import _ from 'lodash';
import React, { useEffect } from 'react';
import { IAREvents } from './interfaces';

// use for activating AR
const useActivator = (
  sceneRef: React.MutableRefObject<any>,
  arEvents?: IAREvents[] | IAREvents
) => {
  useEffect(() => {
    const sceneEl = sceneRef.current;
    const arSystem = sceneEl.systems['mindar-image-system'];
    sceneEl.addEventListener('renderstart', () => {
      arSystem.start(); // start AR
    });

    // Convert arEvents to array if nots
    const events = _.isNil(arEvents)
      ? []
      : _.isArray(arEvents)
      ? arEvents
      : [arEvents];

    // Get all the events from the arEvents array
    // and add them to the scene
    const callbacks = _.map(arEvents, ({ callbacks }) => callbacks);
    _.forEach(events, ({ eventName }, index) => {
      sceneEl.addEventListener(eventName, callbacks[index]);
    });

    return () => {
      arSystem.stop();

      // Remove all the events from the arEvents array
      _.forEach(events, ({ eventName }, index) => {
        sceneEl.removeEventListener(eventName, callbacks[index]);
      });
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useActivator;
