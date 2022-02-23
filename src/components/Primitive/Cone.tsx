import React from 'react';
import Primitive from './Primitive';
import { ICone } from 'utils/interfaces';

const Cone = React.forwardRef<any, ICone>(({ ...props }, ref) => (
  <Primitive type="a-cone" {...props} ref={ref} />
));

export default Cone;
