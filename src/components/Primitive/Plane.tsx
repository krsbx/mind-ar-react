import React from 'react';
import Primitive from './Primitive';
import { IPlane } from 'utils/interfaces';

const Plane: React.FC<IPlane> = ({ ...props }) => {
  return <Primitive type="a-plane" {...props} />;
};

export default Plane;
