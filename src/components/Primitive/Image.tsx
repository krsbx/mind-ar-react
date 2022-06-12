import React from 'react';
import Primitive from './Primitive';
import { IImage } from '../../utils/interfaces';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Image = React.forwardRef<any, IImage>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.IMAGE} {...props} ref={ref} />
));

export default Image;
