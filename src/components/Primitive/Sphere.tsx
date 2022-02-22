import React from 'react';
import Primitive from './Primitive';
import { ISphere } from 'utils/interfaces';

const Sphere: React.FC<ISphere> = ({ ...props }) => {
  return <Primitive type="a-sphere" {...props} />;
};

export default Sphere;
