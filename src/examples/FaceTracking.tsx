import React from 'react';
import { Scene as AScene } from 'aframe';
import { Camera, Sphere, Entity } from 'aframe-react-component';
import FaceTracking from '../provider/FaceTracking';
import { Faces, Scene } from '../components';
import useARManager from '../utils/useARManager';

const ExampleFaceTracking = () => {
  const [enabled, setEnabled] = React.useState(false);
  const sceneRef = React.useRef<AScene>();

  const { startAR, stopAR } = useARManager(sceneRef);

  const onClick = () => {
    if (enabled) {
      stopAR();
    } else {
      startAR();
    }

    setEnabled((curr) => !curr);
  };

  return (
    <FaceTracking>
      <button onClick={onClick} style={{ position: 'absolute', zIndex: 999 }}>
        {enabled ? 'Stop' : 'Start'}
      </button>
      <Scene
        mindARFace={{
          autoStart: false,
        }}
        colorSpace="sRGB"
        embedded
        renderer="colorManagement: true, physicallyCorrectLights"
        orientationUI={false}
        vrModeUI={false}
        stats={enabled}
        ref={sceneRef}
      >
        <Camera position={{ x: 0, y: 0, z: 0 }} look-controls={false} active={false} />
        <Entity visible={enabled}>
          <Faces anchorIndex={1}>
            <Sphere radius={0.1} color={'green'} position={[0, 0, 0]} />
          </Faces>
        </Entity>
      </Scene>
    </FaceTracking>
  );
};

export default ExampleFaceTracking;
