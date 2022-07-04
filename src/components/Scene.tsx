import _ from 'lodash';
import React, { useEffect, useRef } from 'react';
import { Scene as AScene, SystemDefinition } from 'aframe';
import { Scene as SceneComponent } from 'aframe-react-component';
import { getAframeProps } from 'aframe-react-component/dist/utils/common';
import { IMindARFaceSystem } from 'mind-ar-ts/types/face-target/aframe';
import { IMindARImageSystem } from 'mind-ar-ts/types/image-target/aframe';
import { generateFaceProps, generateImageProps } from '../utils/defaultprops';
import { mergeRefs } from '../utils/common';
import { Scene as _Scene } from '../utils/interfaces';
import { AR_COMPONENT_NAME } from '../utils/constant';

const Scene = React.forwardRef<AScene, _Scene>(({ children, ...props }, ref) => {
  const sceneRef = useRef<AScene>(null);
  const {
    mindARImage,
    mindARFace,
    'gesture-detector': gestureDetector,
    'mouse-detector': mouseDetector,
    ...rest
  } = props;

  useEffect(() => {
    const arSystem = sceneRef.current?.systems[
      mindARImage ? AR_COMPONENT_NAME.IMAGE.IMAGE_SYSTEM : AR_COMPONENT_NAME.FACE.FACE_SYSTEM
    ] as SystemDefinition<IMindARImageSystem | IMindARFaceSystem> | undefined;

    return () => {
      if (!arSystem) return;

      arSystem.stop();
    };
  }, []);

  return (
    <SceneComponent
      {...rest}
      gesture-detector={gestureDetector}
      mouse-detector={mouseDetector}
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
