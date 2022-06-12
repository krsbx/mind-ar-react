import React from 'react';
import { Entity as AEntity } from 'aframe';
import { IMarker } from '../utils/interfaces';
import Entity from './Entity';

const Marker = React.forwardRef<AEntity, IMarker>(({ targetIndex, ...props }, ref) => (
  <Entity {...props} mindar-image-target={`targetIndex: ${targetIndex}`} ref={ref} />
));

export default Marker;
