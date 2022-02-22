import React from 'react';
import Primitive from './Primitive';
import { ICylinder } from 'utils/interfaces';

const Cylinder: React.FC<ICylinder> = ({ ...props }) => {
  return <Primitive type="a-cylinder" {...props} />;
};

export default Cylinder;
