import React from 'react';
import Primitive from './Primitive';
import { ISphere } from 'utils/interfaces';

const Sphere = React.forwardRef<any, ISphere>(({ ...props }, ref) => (
  <Primitive type="a-sphere" {...props} ref={ref} />
));

export default Sphere;
