import React from 'react';
import Primitive from './Primitive';
import { ICircle } from 'utils/interfaces';

const Circle: React.FC<ICircle> = ({ ...props }) => {
  return <Primitive type="a-circle" {...props} />;
};

export default Circle;
