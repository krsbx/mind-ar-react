import React from 'react';
import Primitive from './Primitive';
import { IBox } from 'utils/interfaces';
import { PRIMITIVE_TYPES } from 'utils/constant';

const Box = React.forwardRef<any, IBox>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.BOX} {...props} ref={ref} />
));

export default Box;
