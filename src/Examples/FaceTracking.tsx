import React from 'react';
import FaceTracking from 'components/AR/FaceTracking';
import { Faces, Camera, Scene } from 'components';
import { Sphere } from 'components/Primitive';

const ExampleFaceTracking = () => {
  return (
    <FaceTracking>
      <Scene
        mindARFace={{}}
        colorSpace="sRGB"
        embedded
        renderer="colorManagement: true, physicallyCorrectLights"
        orientationUI={false}
        vrModeUI={false}
        stats
      >
        <Camera position={{ x: 0, y: 0, z: 0 }} look-controls={false} active={false} />
        <Faces anchorIndex={1}>
          <Sphere radius={0.1} color={'green'} position={[0, 0, 0]} />
        </Faces>
      </Scene>
    </FaceTracking>
  );
};

export default ExampleFaceTracking;
