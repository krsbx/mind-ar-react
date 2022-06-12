import React from 'react';
import { propsConverter } from 'utils/handler';
import { ICamera } from 'utils/interfaces';

const Camera = ({ 'look-controls': lookControls, active, ...props }: ICamera) =>
  React.createElement('a-camera', {
    ...propsConverter(props),
    'look-controls': `enabled: ${lookControls ?? true}`,
    active: active ?? true,
  });

export default Camera;
