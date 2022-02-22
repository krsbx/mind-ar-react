import React from 'react';
import { propsConverter } from 'utils/handler';
import { IText } from 'utils/interfaces';

const Text: React.FC<IText> = ({ children, ...props }) => {
  return React.createElement(
    'a-text',
    {
      ...propsConverter(props),
    },
    children
  );
};

export default Text;
