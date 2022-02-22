import React from 'react';
import { propsConverter } from 'utils/handler';
import { ICamera } from 'utils/interfaces';

const Camera: React.FC<ICamera> = ({
  'look-controls': lookControls,
  children,
  ...props
}) => {
  return React.createElement('a-camera', {
    ...propsConverter(props),
    'look-controls': `enabled: ${lookControls || false}`,
  });
};

export default Camera;
