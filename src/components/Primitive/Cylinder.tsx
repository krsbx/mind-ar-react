import React from 'react';
import Primitive from './Primitive';
import { ICylinder } from '../../utils/interfaces';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Cylinder = React.forwardRef<any, ICylinder>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.CYLINDER} {...props} ref={ref} />
));

export default Cylinder;
