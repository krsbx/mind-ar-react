import 'aframe';
import 'mind-ar/dist/mindar-face.prod.js';
import 'mind-ar/dist/mindar-face-aframe.prod.js';
import React from 'react';

const FaceTracking: React.FC = ({ children }) => (
  <React.Fragment>{children}</React.Fragment>
);

export default FaceTracking;
