import 'mind-ar-ts';
import 'mind-ar-ts/dist/mindar-image.prod';
import { useCallback } from 'react';
import { ICompilerData } from 'mind-ar-ts/src/image-target/utils/types/compiler';
import { CompilerState, ReactSetter } from 'utils/interfaces';
import { COMPILER_STATE } from './constant';

const useCompiler = ({
  setDataList,
  setExportedBuffer,
  setStep,
  setPercentage,
}: Params) => {
  // Create new compiler instance.
  const compiler = new window.MINDAR.IMAGE.Compiler();

  const loadImage = useCallback(async (file) => {
    return new Promise<HTMLImageElement>((resolve, reject) => {
      let img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = URL.createObjectURL(file);
    });
  }, []);

  const onDataReady = useCallback(
    (dataList: ICompilerData[], exportedBuffer: Uint8Array) => {
      setDataList(dataList);
      setExportedBuffer(exportedBuffer);
      setStep(COMPILER_STATE.COMPILED);
    },
    [] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const compileFiles = useCallback(async (files: File[]) => {
    const images: HTMLImageElement[] = await Promise.all(files.map(loadImage));

    console.log('files', files, images);

    const dataList = await compiler.compileImageTargets(images, (progress) => {
      setPercentage(+progress.toFixed(2));
    });

    const exportedBuffer = await compiler.exportData();

    onDataReady(dataList, exportedBuffer);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const loadMindFile = useCallback(async (file) => {
    const reader = new FileReader();

    reader.onload = async function () {
      if (!this.result || typeof this.result === 'string') return;

      const dataList = compiler.importData(this.result);
      const exportedBuffer = await compiler.exportData();

      onDataReady(dataList, exportedBuffer);
    };

    reader.readAsArrayBuffer(file);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const startHandler = useCallback(async (files: File[]) => {
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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return startHandler;
};

type Params = {
  setDataList: ReactSetter<ICompilerData[]>;
  setExportedBuffer: ReactSetter<Uint8Array>;
  setPercentage: ReactSetter<number | null>;
  setStep: ReactSetter<CompilerState>;
};

export default useCompiler;
