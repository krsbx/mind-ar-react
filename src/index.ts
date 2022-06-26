import { Entity, Faces, Marker, Scene } from './components';
import FaceTracking from './components/AR/FaceTracking';
import ImageTracking from './components/AR/ImageTracking';

const Components = {
  Entity,
  Faces,
  Marker,
  Scene,
};

const MindAR = {
  FaceTracking,
  ImageTracking,
  Components,
};

export { FaceTracking, ImageTracking, Components as MindAR };
export { default as useCompiler } from './utils/useCompiler';
export type { CompilerState } from './utils/interfaces';
export * from './utils/constant';

export default MindAR;
