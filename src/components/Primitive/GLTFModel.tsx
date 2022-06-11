import React from 'react';
import { IGLTFModel } from 'utils/interfaces';
import Primitive from './Primitive';
import { PRIMITIVE_TYPES } from 'utils/constant';

const GLTFModel = React.forwardRef<any, IGLTFModel>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.GLTF_MODEL} {...props} ref={ref} />
));

export default GLTFModel;
