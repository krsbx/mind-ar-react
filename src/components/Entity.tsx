import React from 'react';
import { IEntity } from 'utils/interfaces';
import Primitive from './Primitive/Primitive';

const Entity = React.forwardRef<any, IEntity>(({ ...props }, ref) => (
  <Primitive type="a-entity" {...props} ref={ref} />
));

export default Entity;
