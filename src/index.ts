import { Scene, Faces, Marker } from './components';
import FaceTracking from './components/AR/FaceTracking';
import ImageTracking from './components/AR/ImageTracking';

const Components = {
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

export default MindAR;
