import React, {
  useCallback,
  useEffect,
  useMemo,
  createRef,
  useState,
} from 'react';
import { ICompilerData } from 'mind-ar-ts/src/image-target/utils/types/compiler';

const VisualTab = ({
  dataList,
  exportedBuffer,
}: {
  dataList: ICompilerData[];
  exportedBuffer: Uint8Array;
}) => {
  const canvasRef = createRef<HTMLCanvasElement>();
  const [targetIndex, setTargetIndex] = useState(0);
  const [keyframeIndex, setKeyframeIndex] = useState(0);

  const drawPoint = useCallback((ctx, color, centerX, centerY, radius = 1) => {
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = color;
    ctx.lineWidth = 1;
    ctx.strokeStyle = color;
    ctx.stroke();
  }, []);

  useEffect(() => {
    if (dataList.length === 0) return;

    const targetImage = dataList[targetIndex].imageList[keyframeIndex];
    const matchingPoints = [
      ...dataList[targetIndex].matchingData[keyframeIndex].maximaPoints,
      ...dataList[targetIndex].matchingData[keyframeIndex].minimaPoints,
    ];

    const canvas = canvasRef.current;

    if (!canvas) return;

    canvas.width = targetImage.width;
    canvas.height = targetImage.height;

    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const tData = new Uint8ClampedArray(
      targetImage.width * targetImage.height * 4
    );

    for (let i = 0; i < targetImage.data.length; i++) {
      tData[i * 4 + 0] = targetImage.data[i];
      tData[i * 4 + 1] = targetImage.data[i];
      tData[i * 4 + 2] = targetImage.data[i];
      tData[i * 4 + 3] = 255;
    }

    const imageData = new ImageData(
      tData,
      targetImage.width,
      targetImage.height
    );

    ctx.putImageData(imageData, 0, 0);

    for (let i = 0; i < matchingPoints.length; i++) {
      const point = matchingPoints[i];
      drawPoint(
        ctx,
        '#ff0000',
        Math.round(point.x),
        Math.round(point.y),
        point.scale
      );
    }
  }, [dataList, targetIndex, keyframeIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  const numTargetRange = useMemo(
    () => dataList.map((data, index) => index),
    [dataList]
  );

  const numScaleRange = useMemo(
    () => dataList?.[targetIndex]?.imageList?.map((data, index) => index) ?? [],
    [dataList, targetIndex]
  );

  const canvasStyle = useMemo(() => {
    const width =
      100 * (dataList?.[targetIndex]?.imageList?.[keyframeIndex]?.scale ?? 1);

    return {
      width: width * 0.95 + '%',
      maxHeight: '100%',
      top: (100 - width) / 2 + '%',
    };
  }, [dataList, targetIndex, keyframeIndex]);

  const downloadHandler = useCallback(() => {
    const blob = new Blob([exportedBuffer]);
    const aLink = document.createElement('a') as unknown as HTMLAnchorElement;

    aLink.download = 'targets.mind';
    aLink.href = URL.createObjectURL(blob);

    aLink.click();
    URL.revokeObjectURL(aLink.href);
  }, [exportedBuffer]);

  return (
    <div style={{ overflow: 'hidden', height: '100vh' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <ul
          role="tablist"
          aria-orientation="horizontal"
          style={{
            listStyleType: 'none',
            display: 'flex',
          }}
        >
          {numTargetRange.map((index) => (
            <li
              role="tab"
              key={index}
              onClick={() => {
                setTargetIndex(index);
                setKeyframeIndex(0);
              }}
              style={{
                padding: '0.5rem',
                cursor: 'pointer',
              }}
            >
              Image {index + 1}
            </li>
          ))}
        </ul>
        <ul
          role="tablist"
          aria-orientation="horizontal"
          style={{
            listStyleType: 'none',
            display: 'flex',
          }}
        >
          {numScaleRange.map((index) => (
            <li
              role="tab"
              key={index}
              onClick={() => {
                setKeyframeIndex(index);
              }}
              style={{
                margin: '0.5rem',
                cursor: 'pointer',
              }}
            >
              Scale {index + 1}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ height: '70%', overflow: 'auto', marginBottom: '20px' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <canvas style={canvasStyle} ref={canvasRef}></canvas>
        </div>
      </div>
      <button onClick={downloadHandler}>Download compiled</button>
    </div>
  );
};

export default VisualTab;
