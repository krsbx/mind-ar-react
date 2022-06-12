import React from 'react';
import Primitive from './Primitive';
import { IPlane } from '../../utils/interfaces';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Plane = React.forwardRef<any, IPlane>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.PLANE} {...props} ref={ref} />
));

export default Plane;
