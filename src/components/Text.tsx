import React from 'react';
import { propsConverter } from 'utils/handler';
import { IText } from 'utils/interfaces';

const Text: React.FC<IText> = React.forwardRef<any, IText>(
  ({ children, ...props }, ref) =>
    React.createElement(
      'a-text',
      {
        ...propsConverter(props),
        ref,
      },
      children
    )
);

export default Text;
