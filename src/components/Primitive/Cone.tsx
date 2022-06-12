import React from 'react';
import Primitive from './Primitive';
import { ICone } from '../../utils/interfaces';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Cone = React.forwardRef<any, ICone>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.CONE} {...props} ref={ref} />
));

export default Cone;
