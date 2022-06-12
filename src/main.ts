import * as Primitive from './components/Primitive';
import * as Assets from './components/Assets';
import { Scene, Camera, Entity, Faces, Marker, Text } from './components';
import FaceTracking from './components/AR/FaceTracking';
import ImageTracking from './components/AR/ImageTracking';

const Components = {
  Camera,
  Entity,
  Faces,
  Marker,
  Scene,
  Text,
  ...Primitive,
  ...Assets,
};

const MindAR = {
  FaceTracking,
  ImageTracking,
  Components,
};

export { FaceTracking, ImageTracking, Components as MindAR };

export default MindAR;
