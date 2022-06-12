import React from 'react';
import Primitive from './Primitive';
import { ISphere } from '../../utils/interfaces';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Sphere = React.forwardRef<any, ISphere>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.SPHERE} {...props} ref={ref} />
));

export default Sphere;
