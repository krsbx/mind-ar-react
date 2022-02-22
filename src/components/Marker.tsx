import React from 'react';
import { IMarker } from 'utils/interfaces';
import Entity from './Entity';

const Marker: React.FC<IMarker> = ({ targetIndex, ...props }) => {
  return (
    <Entity {...props} mindar-image-target={`targetIndex: ${targetIndex}`} />
  );
};

export default Marker;
