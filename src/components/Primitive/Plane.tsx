import React from 'react';
import Primitive from './Primitive';
import { IPlane } from 'utils/interfaces';

const Plane = React.forwardRef<any, IPlane>(({ ...props }, ref) => (
  <Primitive type="a-plane" {...props} ref={ref} />
));

export default Plane;
