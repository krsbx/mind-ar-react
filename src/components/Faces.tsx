import React from 'react';
import { Entity } from 'aframe-react-component';
import { Entity as AEntity } from 'aframe';
import { Faces as _Faces } from '../utils/interfaces';

const Faces = React.forwardRef<AEntity, _Faces>(({ anchorIndex, ...props }, ref) => (
  <Entity {...props} mindar-face-target={`anchorIndex: ${anchorIndex}`} ref={ref} />
));

export default Faces;
