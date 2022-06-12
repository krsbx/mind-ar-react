import React from 'react';
import Primitive from './Primitive';
import { ICircle } from '../../utils/interfaces';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Circle = React.forwardRef<any, ICircle>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.CIRCLE} {...props} ref={ref} />
));

export default Circle;
