import React from 'react';
import Primitive from './Primitive';
import { ICone } from 'utils/interfaces';

const Cone: React.FC<ICone> = ({ ...props }) => {
  return <Primitive type="a-cone" {...props} />;
};

export default Cone;
