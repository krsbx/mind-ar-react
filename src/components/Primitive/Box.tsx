import React from 'react';
import Primitive from './Primitive';
import { IBox } from 'utils/interfaces';

const Box: React.FC<IBox> = ({ ...props }) => {
  return <Primitive type="a-box" {...props} />;
};

export default Box;
