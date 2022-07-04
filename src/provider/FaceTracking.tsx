import React from 'react';
import 'mind-ar-ts/dist/mindar-face.prod.js';
import 'mind-ar-ts/dist/mindar-face-aframe.prod.js';

const FaceTracking = ({ children }: { children: React.ReactNode }) => (
  <React.Fragment>{children}</React.Fragment>
);

export default FaceTracking;
