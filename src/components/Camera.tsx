import React from 'react';
import { Entity as AEntity } from 'aframe';
import { propsConverter } from '../utils/handler';
import { ICamera } from '../utils/interfaces';

const Camera = React.forwardRef<AEntity, ICamera>(
  ({ 'look-controls': lookControls, active, ...props }, ref) =>
    React.createElement('a-camera', {
      ...propsConverter(props),
      'look-controls': `enabled: ${lookControls ?? true}`,
      active: active ?? true,
      ref,
    })
);

export default Camera;
