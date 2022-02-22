import Assets, { Items } from 'components/Assets';
import { ImageTracking } from 'components/AR';
import Marker from 'components/Marker';
import GLTFModel from 'components/Primitive/GLTFModel';
import Camera from 'components/Camera';
import React, { useState } from 'react';
import Scene from 'components/Scene';

const ExampleImageTracking: React.FC = () => {
  const [started, setStarted] = useState(false);

  return (
    <ImageTracking>
      <button onClick={() => setStarted(!started)}>
        {started ? 'Stop' : 'Start'}
      </button>
      {started && (
        <React.Fragment>
          <Scene
            mindar-image={{
              imageTargetSrc:
                'https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.0.0/examples/image-tracking/assets/card-example/card.mind',
              autoStart: false,
              uiLoading: 'no',
              uiError: 'no',
              uiScanning: 'no',
            }}
            color-space="sRGB"
            embedded
            renderer="colorManagement: true, physicallyCorrectLights"
          >
            <Assets>
              <img
                id="card"
                src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.0.0/examples/image-tracking/assets/card-example/card.png"
                alt=""
              />
              <Items
                id="avatarModel"
                src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.0.0/examples/image-tracking/assets/card-example/softmind/scene.gltf"
              />
            </Assets>
            <Camera position={{ x: 0, y: 0, z: 0 }} />
            <Marker targetIndex={0}>
              <GLTFModel
                rotation={{
                  x: 0,
                  y: 0,
                  z: 0,
                }}
                position={{
                  x: 0,
                  y: 0,
                  z: 0.1,
                }}
                scale={{
                  x: 0.005,
                  y: 0.005,
                  z: 0.005,
                }}
                src="#avatarModel"
              />
            </Marker>
          </Scene>
          <video></video>
        </React.Fragment>
      )}
    </ImageTracking>
  );
};

export default ExampleImageTracking;
