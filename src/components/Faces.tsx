import React from 'react';
import { IFaces } from 'utils/interfaces';
import Entity from './Entity';

const Faces: React.FC<IFaces> = ({ anchorIndex, ...props }) => {
  return (
    <Entity {...props} mindar-face-target={`anchorIndex: ${anchorIndex}`} />
  );
};

export default Faces;
