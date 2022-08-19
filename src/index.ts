import { Entity, Faces, Marker, Scene } from './components';
import * as Examples from './examples';

const MindAR = {
  Entity,
  Faces,
  Marker,
  Scene,
};

export { MindAR, Entity, Faces, Marker, Scene, Examples };

export { default as useCompiler } from './utils/useCompiler';

export { default as useARManager } from './utils/useARManager';

export type { CompilerState } from './utils/interfaces';

export * from './utils/constant';

export default MindAR;
