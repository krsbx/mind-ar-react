import React from 'react';
import { IGLTFModel } from 'utils/interfaces';
import Primitive from './Primitive';

const GLTFModel: React.FC<IGLTFModel> = ({ ...props }) => {
  return <Primitive type="a-gltf-model" {...props} />;
};

export default GLTFModel;
