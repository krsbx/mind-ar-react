import React from 'react';
import { Entity as AEntity } from 'aframe';
import { Entity as EntityComponent } from 'aframe-react-component';
import { getAframeProps } from 'aframe-react-component/dist/utils/common';
import { Entity as _Entity } from '../utils/interfaces';

const Entity = React.forwardRef<AEntity, _Entity>((props, ref) => {
  const {
    'gesture-rotation': gestureRotation,
    'gesture-scale': gestureScale,
    'mouse-rotation': mouseRotation,
    'mouse-scale': mouseScale,
    ...rest
  } = props;

  return (
    <EntityComponent
      {...rest}
      {...(gestureRotation && {
        'gesture-rotation': getAframeProps(gestureRotation),
      })}
      {...(gestureScale && {
        'gesture-scale': getAframeProps(gestureScale),
      })}
      {...(mouseRotation && {
        'mouse-rotation': getAframeProps(mouseRotation),
      })}
      {...(mouseScale && {
        'mouse-scale': getAframeProps(mouseScale),
      })}
      ref={ref}
    />
  );
});

Entity.displayName = 'AREntity';

export default Entity;
