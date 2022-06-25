import React, { useRef } from 'react';
import { Scene as AScene } from 'aframe';
import { Scene as SceneComponent } from 'aframe-react-component';
import { getAframeProps } from 'aframe-react-component/dist/utils/common';
import { generateFaceProps, generateImageProps } from '../utils/defaultprops';
import { mergeRefs } from '../utils/common';
import { Scene as _Scene } from '../utils/interfaces';

const Scene = React.forwardRef<AScene, _Scene>(({ children, ...props }, ref) => {
  const sceneRef = useRef<AScene>(null);
  const { mindARImage, mindARFace, ...rest } = props;

  return (
    <SceneComponent
      {...rest}
      {...(mindARImage && {
        'mindar-image': getAframeProps(generateImageProps(mindARImage)),
      })}
      {...(mindARFace && {
        'mindar-face': getAframeProps(generateFaceProps(mindARFace)),
      })}
      ref={mergeRefs(sceneRef, ref)}
    >
      {children}
    </SceneComponent>
  );
});

export default Scene;
