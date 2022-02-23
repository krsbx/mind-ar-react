import React from 'react';
import { IGLTFModel } from 'utils/interfaces';
import Primitive from './Primitive';

const GLTFModel = React.forwardRef<any, IGLTFModel>(({ ...props }, ref) => (
  <Primitive type="a-gltf-model" {...props} ref={ref} />
));

export default GLTFModel;
