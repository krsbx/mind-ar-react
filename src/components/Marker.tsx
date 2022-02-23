import React from 'react';
import { IMarker } from 'utils/interfaces';
import Entity from './Entity';

const Marker = React.forwardRef<any, IMarker>(
  ({ targetIndex, ...props }, ref) => (
    <Entity
      {...props}
      mindar-image-target={`targetIndex: ${targetIndex}`}
      ref={ref}
    />
  )
);

export default Marker;
