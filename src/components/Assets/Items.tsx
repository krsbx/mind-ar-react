import React from 'react';
import { IItems } from 'utils/interfaces';

const Items = ({ children, ...props }: IItems & { children?: React.ReactNode }) =>
  React.createElement('a-asset-item', props, children);

export default Items;
