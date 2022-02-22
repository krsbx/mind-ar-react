import React from 'react';
import { IEntity } from 'utils/interfaces';
import Primitive from './Primitive/Primitive';

const Entity: React.FC<IEntity> = ({ ...props }) => {
  return <Primitive type="a-entity" {...props} />;
};

export default Entity;
