import React from 'react';
import { Entity as AEntity } from 'aframe';
import { IFaces } from '../utils/interfaces';
import Entity from './Entity';

const Faces = React.forwardRef<AEntity, IFaces>(({ anchorIndex, ...props }, ref) => (
  <Entity {...props} mindar-face-target={`anchorIndex: ${anchorIndex}`} ref={ref} />
));

export default Faces;
