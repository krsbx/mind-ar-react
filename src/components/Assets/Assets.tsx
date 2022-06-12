import React from 'react';

const Assets = ({ children }: { children?: React.ReactNode }) =>
  React.createElement('a-assets', {}, children);

export default Assets;
