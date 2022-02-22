import React, { useRef } from 'react';
import { getAnimations, propsConverter } from 'utils/handler';
import { IPrimitive } from 'utils/interfaces';

const Primitive: React.FC<IPrimitive> = ({
  type,
  animation,
  children,
  ...props
}) => {
  const animations = animation && getAnimations(animation);

  const markerRef = useRef<any>(null);

  return React.createElement(
    type,
    {
      ...propsConverter(props),
      ...animations,
      ref: markerRef,
    },
    children
  );
};

export default Primitive;
