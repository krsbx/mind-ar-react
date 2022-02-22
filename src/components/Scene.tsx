import React, { useEffect, useRef } from 'react';
import { concatProps, propsConverter } from 'utils/handler';
import { IScene } from 'utils/interfaces';

const Scene: React.FC<IScene> = ({
  children,
  'vr-mode-ui': vrModeUi,
  'mindar-image': mindARImage,
  'device-orientation-permission-ui': orientationUI,
  ...props
}) => {
  const sceneRef = useRef<any>(null);

  useEffect(() => {
    const sceneEl = sceneRef.current;
    const arSystem = sceneEl.systems['mindar-image-system'];
    sceneEl.addEventListener('renderstart', () => {
      arSystem.start(); // start AR
    });
    return () => {
      arSystem.stop();
    };
  }, []);

  return React.createElement(
    'a-scene',
    {
      ...propsConverter(props),
      ...{
        'mindar-image': concatProps(mindARImage),
        'vr-mode-ui': `enabled: ${vrModeUi || false}`,
        'device-orientation-permission-ui': `enabled: ${
          orientationUI || false
        }`,
        ref: sceneRef,
      },
    },
    children
  );
};

export default Scene;
