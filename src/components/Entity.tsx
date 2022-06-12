import React from 'react';
import { Entity as AEntity } from 'aframe';
import { IEntity } from '../utils/interfaces';
import Primitive from './Primitive/Primitive';
import { PRIMITIVE_TYPES } from '../utils/constant';

const Entity = React.forwardRef<AEntity, IEntity>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.ENTITY} {...props} ref={ref} />
));

export default Entity;
