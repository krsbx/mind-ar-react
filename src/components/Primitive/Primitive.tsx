import React from 'react';
import { getAnimations, propsConverter } from 'utils/handler';
import { IPrimitive } from 'utils/interfaces';

const Primitive = React.forwardRef<any, IPrimitive>(
  ({ type, animation, children, ...props }, ref) => {
    const animations = animation ? getAnimations(animation) : {};

    return React.createElement(
      type,
      {
        ...propsConverter(props),
        ...animations,
        ref,
      },
      children
    );
  }
);

export default Primitive;
