import React from 'react';

const Assets: React.FC = ({ children }) => {
  return React.createElement('a-assets', {}, children);
};

export default Assets;
