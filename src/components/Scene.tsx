import React, { useRef } from 'react';
import { concatProps, mergeRefs, propsConverter } from 'utils/handler';
import { IScene } from 'utils/interfaces';
import useActivator from 'utils/useActivator';

const Scene = React.forwardRef<any, IScene>(
  (
    {
      children,
      'vr-mode-ui': vrModeUi,
      'mindar-image': mindARImage,
      'device-orientation-permission-ui': orientationUI,
      arEvents,
      ...props
    },
    ref
  ) => {
    const sceneRef = useRef<any>(null);

    useActivator(sceneRef, arEvents);

    return React.createElement(
      'a-scene',
      {
        ...propsConverter(props),
        ...{
          ...(mindARImage && { 'mindar-image': concatProps(mindARImage) }),
          'vr-mode-ui': `enabled: ${vrModeUi || false}`,
          'device-orientation-permission-ui': `enabled: ${
            orientationUI || false
          }`,
          ref: mergeRefs(sceneRef, ref),
        },
      },
      children
    );
  }
);

export default Scene;
