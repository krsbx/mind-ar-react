import React, { useState, useEffect, createRef } from 'react';
import Dropzone from 'dropzone';
import { ICompilerData } from 'mind-ar-ts/src/image-target/utils/types/compiler';
import useCompiler from 'utils/useCompiler';
import { COMPILER_STATE } from 'utils/constant';
import { CompilerState } from 'utils/interfaces';
import VisualTab from './Compiler/VisualTab';
import UploadTab from './Compiler/UploadTab';

const ImageCompiler = () => {
  const [dataList, setDataList] = useState<ICompilerData[]>([]);
  const [dropzone, setDropzone] = useState<Dropzone>();
  const [percentage, setPercentage] = useState<number | null>(null);
  const [exportedBuffer, setExportedBuffer] = useState<Uint8Array>(
    new Uint8Array()
  );
  const [step, setStep] = useState<CompilerState>(COMPILER_STATE.IDLE);
  const refDropzone = createRef<HTMLDivElement>();

  const startCompiler = useCompiler({
    setExportedBuffer,
    setPercentage,
    setDataList,
    setStep,
  });

  useEffect(() => {
    if (!refDropzone.current) return;

    const myDropzone = new Dropzone(refDropzone.current, {
      url: '#',
      autoProcessQueue: false,
      addRemoveLinks: true,
    });

    setDropzone(myDropzone);
  }, [refDropzone.current]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {step === 'IDLE' && (
        <>
          <UploadTab
            refDropzone={refDropzone}
            percentage={percentage}
            onClick={() => {
              if (!dropzone) return;

              startCompiler(dropzone.files as File[]);
            }}
          />
        </>
      )}
      {step === 'COMPILED' && (
        <VisualTab dataList={dataList} exportedBuffer={exportedBuffer} />
      )}
    </>
  );
};

export default ImageCompiler;
