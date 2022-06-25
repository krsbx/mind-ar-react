import 'aframe';
import 'mind-ar-ts/dist/mindar-image.prod.js';
import 'mind-ar-ts/dist/mindar-image-aframe.prod.js';
import 'mind-ar-ts/dist/mindar-gesture.prod.js';
import React from 'react';

const ImageTracking = ({ children }: { children: React.ReactNode }) => (
  <React.Fragment>{children}</React.Fragment>
);

export default ImageTracking;
