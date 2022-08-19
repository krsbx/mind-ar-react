import React from 'react';
import { Entity } from 'aframe-react-component';
import { Entity as AEntity } from 'aframe';
import { Marker as _Marker } from '../utils/interfaces';

const Marker = React.forwardRef<AEntity, _Marker>(({ targetIndex, ...props }, ref) => (
  <Entity {...props} mindar-image-target={`targetIndex: ${targetIndex}`} ref={ref} />
));

Marker.displayName = 'Marker';

export default Marker;
