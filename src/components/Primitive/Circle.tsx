import React from 'react';
import Primitive from './Primitive';
import { ICircle } from 'utils/interfaces';

const Circle = React.forwardRef<any, ICircle>(({ ...props }, ref) => (
  <Primitive type="a-circle" {...props} ref={ref} />
));

export default Circle;
