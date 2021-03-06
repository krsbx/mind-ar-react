import React, { useState } from 'react';
import { Camera, GLTFModel, Plane, Assets, Item } from 'aframe-react-component';
import ImageTracking from '../provider/ImageTracking';
import { Entity, Marker, Scene } from '../components';

const ExampleImageTracking = () => {
  const [started, setStarted] = useState(false);

  const rotationSettings = {
    enabled: true,
    rotationFactor: 5,
  };

  const scaleSettings = {
    enabled: true,
    minScale: 0.3,
    maxScale: 8,
  };

  return (
    <ImageTracking>
      <button onClick={() => setStarted(!started)}>{started ? 'Stop' : 'Start'}</button>
      {started && (
        <Scene
          mindARImage={{
            imageTargetSrc:
              'https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.0.0/examples/image-tracking/assets/card-example/card.mind',
            autoStart: true,
          }}
          color-space="sRGB"
          mouse-detector
          gesture-detector
          embedded
          renderer="colorManagement: true, physicallyCorrectLights"
          orientationUI
          stats
        >
          <Assets>
            <img
              id="card"
              src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/examples/image-tracking/assets/card-example/card.png"
              alt=""
            />
            <Item
              id="avatarModel"
              src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/examples/image-tracking/assets/card-example/softmind/scene.gltf"
            />
          </Assets>
          <Camera position={{ x: 0, y: 0, z: 0 }} look-controls={false} />
          <Marker targetIndex={0}>
            <Entity
              mouse-rotation={rotationSettings}
              mouse-scale={scaleSettings}
              gesture-rotation={rotationSettings}
              gesture-scale={scaleSettings}
            >
              <Plane
                src="#card"
                position={[0, 0, 0]}
                height={0.552}
                width={1}
                rotation={[0, 0, 0]}
              />
              <GLTFModel
                rotation={[0, 0, 0]}
                position={[0, 0, 0.1]}
                scale={[0.005, 0.005, 0.005]}
                animation={{
                  property: 'position',
                  to: '0 0.1 0.1',
                  dur: 1000,
                  easing: 'easeInOutQuad',
                  loop: true,
                  dir: 'alternate',
                }}
                src="#avatarModel"
              />
            </Entity>
          </Marker>
        </Scene>
      )}
    </ImageTracking>
  );
};

export default ExampleImageTracking;
