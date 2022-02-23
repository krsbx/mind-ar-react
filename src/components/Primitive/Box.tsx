import React from 'react';
import Primitive from './Primitive';
import { IBox } from 'utils/interfaces';

const Box = React.forwardRef<any, IBox>(({ ...props }, ref) => (
  <Primitive type="a-box" {...props} ref={ref} />
));

export default Box;
