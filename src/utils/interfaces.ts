import React from 'react';
import { Entity as _Entity, Scene as _Scene } from 'aframe-react-component/dist/utils/interface';
import { COMPILER_STATE } from './constant';

export type DefaultARProps = {
  autoStart?: boolean;
  uiLoading?: string;
  uiScanning?: string;
  uiError?: string;
  filterMinCF?: number;
  filterBeta?: number;
  shouldFaceUser?: boolean;
  _positionSettings?: string;
  _positionZIndex?: number;
};

export type MindARImage = DefaultARProps & {
  imageTargetSrc: string;
  maxTrack?: number;
  missTolerance?: number;
  warmupTolerance?: number;
  showStats?: boolean;
  reshowScanning?: boolean;
};

export type MindARFace = DefaultARProps & {
  faceOccluder?: boolean;
};

export type Scene = _Scene & {
  'gesture-detector'?: boolean;
  'mouse-detector'?: boolean;
  mindARImage?: MindARImage;
  mindARFace?: MindARFace;
  children?: React.ReactNode;
  arEvents?: IAREvents[] | IAREvents;
};

export type GestureRotation = {
  enabled: boolean;
  rotationFactor: number;
};

export type GestureScale = {
  enabled: boolean;
  minScale: number;
  maxScale: number;
};

export type Marker = _Entity & {
  targetIndex: number;
};

export type Entity = _Entity & {
  'gesture-rotation'?: GestureRotation;
  'mouse-rotation'?: GestureRotation;
  'gesture-scale'?: GestureScale;
  'mouse-scale'?: GestureScale;
};

export type Faces = _Entity & {
  anchorIndex?: number;
};

export type IAREvents = {
  eventName: 'arReady' | 'arError' | 'targetFound' | 'targetLost';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callbacks: (e: any) => void;
};

export type ReactSetter<T> = React.Dispatch<React.SetStateAction<T>>;

export type CompilerState = typeof COMPILER_STATE[keyof typeof COMPILER_STATE];
