import React from 'react';
import useCompiler from '../utils/useCompiler';
import { COMPILER_STATE } from '../utils/constant';
import VisualTab from './Compiler/VisualTab';
import UploadTab from './Compiler/UploadTab';

const ExampleImageCompiler = () => {
  const { startCompiler, dataList, exportedBuffer, percentage, step } = useCompiler();

  const RenderTab = () => {
    switch (step) {
      case COMPILER_STATE.IDLE:
        return (
          <UploadTab
            percentage={percentage}
            onClick={(files) => {
              startCompiler(files);
            }}
          />
        );
      case COMPILER_STATE.COMPILED:
        return <VisualTab dataList={dataList} exportedBuffer={exportedBuffer} />;
      default:
        return <></>;
    }
  };

  return <RenderTab />;
};

export default ExampleImageCompiler;
