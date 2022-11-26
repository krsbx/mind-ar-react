import React, { useCallback, useEffect, useRef } from 'react';
import { Scene as AScene, SystemDefinition } from 'aframe';
import { AR_COMPONENT_NAME } from './constant';
import { IMindARImageSystem } from 'mind-ar-ts/types/image-target/aframe';
import { IMindARFaceSystem } from 'mind-ar-ts/types/face-target/aframe';
import { cleanupVideo } from './common';

// use for activating AR
const useARManager = (sceneRef: React.MutableRefObject<AScene | undefined>) => {
  const arSystem = useRef<SystemDefinition<IMindARImageSystem | IMindARFaceSystem>>();
  const startAR = useCallback(() => {
    if (!arSystem.current) return;

    return arSystem.current.start();
  }, [arSystem.current]);
  const stopAR = useCallback(() => {
    if (!arSystem.current) return;

    arSystem.current.stop();
    cleanupVideo();
  }, [arSystem.current]);

  useEffect(() => {
    if (!sceneRef.current) return;

    sceneRef.current.addEventListener('loaded', () => {
      if (!sceneRef.current) return;

      let arSystems = AR_COMPONENT_NAME.IMAGE.IMAGE_SYSTEM;
      const systemKeys = Object.keys(sceneRef.current.systems);

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
    });

    return () => {
      stopAR();
    };
  }, []);

  return {
    startAR,
    stopAR,
    arSystem: arSystem.current,
  };
};

export default useARManager;
