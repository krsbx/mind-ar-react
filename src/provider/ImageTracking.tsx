import React from 'react';
import 'mind-ar-ts/dist/mindar-image.prod.js';
import 'mind-ar-ts/dist/mindar-image-aframe.prod.js';
import 'mind-ar-ts/dist/mindar-gesture.prod.js';

const ImageTracking = ({ children }: { children: React.ReactNode }) => (
  <React.Fragment>{children}</React.Fragment>
);

export default ImageTracking;
