import 'mind-ar-ts';
import 'mind-ar-ts/dist/mindar-image.prod';
import { useCallback, useState } from 'react';
import { ICompilerData } from 'mind-ar-ts/src/image-target/utils/types/compiler';
import { CompilerState } from './interfaces';
import { COMPILER_STATE } from './constant';

const useCompiler = () => {
  const [percentage, setPercentage] = useState<number | null>(null);
  const [dataList, setDataList] = useState<ICompilerData[]>([]);
  const [exportedBuffer, setExportedBuffer] = useState<Uint8Array>(new Uint8Array());
  const [step, setStep] = useState<CompilerState>(COMPILER_STATE.IDLE);

  // Create new compiler instance.
  const compiler = new window.MINDAR.IMAGE.Compiler();

  const loadImage = useCallback(async (file: File) => {
    return new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = URL.createObjectURL(file);
    });
  }, []);

  const onDataReady = useCallback((dataList: ICompilerData[], exportedBuffer: Uint8Array) => {
    setDataList(dataList);
    setExportedBuffer(exportedBuffer);
    setStep(COMPILER_STATE.COMPILED);
  }, []);

  const compileFiles = useCallback(async (files: File[]) => {
    const images: HTMLImageElement[] = await Promise.all(files.map(loadImage));

    console.log('files', files, images);

    const dataList = await compiler.compileImageTargets(images, (progress) => {
      setPercentage(+progress.toFixed(2));
    });

    const exportedBuffer = await compiler.exportData();

    onDataReady(dataList, exportedBuffer);
  }, []);

  const loadMindFile = useCallback(async (file: File) => {
    const reader = new FileReader();

    reader.onload = async function () {
      if (!this.result || typeof this.result === 'string') return;

      const dataList = compiler.importData(this.result);
      const exportedBuffer = await compiler.exportData();

      onDataReady(dataList, exportedBuffer);
    };

    reader.readAsArrayBuffer(file);
  }, []);

  const startCompiler = useCallback(async (files: File[]) => {
    if (files.length === 0) {
      console.error('please select images.');
      return;
    }

    const ext = files[0].name.split('.').pop();

    if (ext === 'mind') {
      loadMindFile(files[0]);
      return;
    }

    compileFiles(files);
  }, []);

  return {
    startCompiler,
    exportedBuffer,
    percentage,
    dataList,
    step,
  };
};

export default useCompiler;
