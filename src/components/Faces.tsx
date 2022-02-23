import React from 'react';
import { IFaces } from 'utils/interfaces';
import Entity from './Entity';

const Faces = React.forwardRef<any, IFaces>(
  ({ anchorIndex, ...props }, ref) => (
    <Entity
      {...props}
      mindar-face-target={`anchorIndex: ${anchorIndex}`}
      ref={ref}
    />
  )
);

export default Faces;
