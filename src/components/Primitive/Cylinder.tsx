import React from 'react';
import Primitive from './Primitive';
import { ICylinder } from 'utils/interfaces';

const Cylinder = React.forwardRef<any, ICylinder>(({ ...props }, ref) => (
  <Primitive type="a-cylinder" {...props} ref={ref} />
));

export default Cylinder;
