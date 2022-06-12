import 'aframe';
import 'mind-ar-ts/dist/mindar-face.prod.js';
import 'mind-ar-ts/dist/mindar-face-aframe.prod.js';
import React from 'react';

const FaceTracking = ({ children }: { children: React.ReactNode }) => (
  <React.Fragment>{children}</React.Fragment>
);

export default FaceTracking;
