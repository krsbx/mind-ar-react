import _ from 'lodash';
import React, { useRef } from 'react';
import { Scene as AScene } from 'aframe';
import { generateFaceProps, generateImageProps } from 'utils/defaultprops';
import { concatProps, mergeRefs, propsConverter } from 'utils/handler';
import { IScene } from 'utils/interfaces';

const Scene = React.forwardRef<AScene, IScene>(({ children, ...props }, ref) => {
  const sceneRef = useRef<AScene>(null);
  const { vrModeUI, mindARImage, orientationUI, colorSpace, mindARFace, ...rest } = props;

  return React.createElement(
    'a-scene',
    {
      ...propsConverter(_.omit(rest, 'arEvents')),
      ...{
        ...(mindARImage && {
          'mindar-image': concatProps(generateImageProps(mindARImage)),
        }),
        ...(mindARFace && {
          'mindar-face': concatProps(generateFaceProps(mindARFace)),
        }),
        ...(colorSpace && { 'color-space': colorSpace }),
        'vr-mode-ui': `enabled: ${vrModeUI ?? false}`,
        'device-orientation-permission-ui': `enabled: ${orientationUI ?? false}`,
        ref: mergeRefs(sceneRef, ref),
      },
    },
    children
  );
});

export default Scene;
