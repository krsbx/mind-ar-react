import React, { useCallback, useEffect, useRef } from 'react';
import { Scene as AScene, SystemDefinition } from 'aframe';
import { Scene as SceneComponent } from 'aframe-react-component';
import { getAframeProps } from 'aframe-react-component/dist/utils/common';
import { IMindARFaceSystem } from 'mind-ar-ts/types/face-target/aframe';
import { IMindARImageSystem } from 'mind-ar-ts/types/image-target/aframe';
import { generateFaceProps, generateImageProps } from '../utils/defaultprops';
import { cleanupVideo, mergeRefs } from '../utils/common';
import { Scene as _Scene } from '../utils/interfaces';
import { AR_COMPONENT_NAME } from '../utils/constant';

const Scene = React.forwardRef<AScene | undefined, _Scene>(({ children, ...props }, ref) => {
  const sceneRef = useRef<AScene>(null);
  const arSystem = useRef<SystemDefinition<IMindARImageSystem | IMindARFaceSystem>>();
  const {
    mindARImage,
    mindARFace,
    'gesture-detector': gestureDetector,
    'mouse-detector': mouseDetector,
    ...rest
  } = props;

  const stopAR = useCallback(() => {
    if (!arSystem.current) return;

    arSystem.current.stop();
    cleanupVideo();
  }, [arSystem.current]);

  useEffect(() => {
    if (!sceneRef.current) return;

    let arSystems = AR_COMPONENT_NAME.IMAGE.IMAGE_SYSTEM;
    const systemKeys = Object.keys(sceneRef.current?.systems);

    for (const key of systemKeys) {
      switch (key) {
        case AR_COMPONENT_NAME.FACE.FACE_SYSTEM:
          arSystems = AR_COMPONENT_NAME.FACE.FACE_SYSTEM;
          break;
        case AR_COMPONENT_NAME.IMAGE.IMAGE_SYSTEM:
          arSystems = AR_COMPONENT_NAME.IMAGE.IMAGE_SYSTEM;
          break;
      }
    }

    arSystem.current = sceneRef.current.systems[arSystems] as SystemDefinition<
      IMindARImageSystem | IMindARFaceSystem
    >;

    return () => {
      stopAR();
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

Scene.displayName = 'ARScene';

export default Scene;
