import React from 'react';
import { FaceTracking } from 'components/AR';
import Scene from 'components/Scene';
import Camera from 'components/Camera';
import Faces from 'components/Faces';
import { Sphere } from 'components/Primitive';
import Assets, { Items } from 'components/Assets';

const ExampleFaceTracking = () => {
  return (
    <FaceTracking>
      <Scene
        mindar-face
        embedded
        mindar-image={{
          autoStart: true,
          uiError: 'yes',
          uiLoading: 'no',
          uiScanning: 'yes',
        }}
        renderer="colorManagement: true, physicallyCorrectLights"
        color-space="sRGB"
        arEvents={[
          {
            eventName: 'targetFound',
            callbacks: (e: any) => {
              console.log('Face Found!');
            },
          },
        ]}
      >
        <Assets>
          <Items
            id="glassesModel"
            src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.0.0/examples/image-tracking/assets/card-example/softmind/scene.gltf"
          />
        </Assets>
        <Camera
          position={{
            x: 0,
            y: 0,
            z: 0,
          }}
        />
        <Faces>
          <Sphere radius={0.1} color={'green'} />
        </Faces>
      </Scene>
    </FaceTracking>
  );
};

export default ExampleFaceTracking;
