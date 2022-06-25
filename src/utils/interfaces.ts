import React from 'react';
import { Entity, Scene as _Scene } from 'aframe-react-component/dist/utils/interface';
import { COMPILER_STATE } from './constant';

export type DefaultARProps = {
  autoStart?: boolean;
  uiLoading?: string;
  uiScanning?: string;
  uiError?: string;
  filterMinCF?: number;
  filterBeta?: number;
  shouldFaceUser?: boolean;
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
  mindARImage?: MindARImage;
  mindARFace?: MindARFace;
  children?: React.ReactNode;
  arEvents?: IAREvents[] | IAREvents;
};

export type Marker = Entity & {
  targetIndex: number;
};

export type Faces = Entity & {
  anchorIndex?: number;
};

export type IAREvents = {
  eventName: 'arReady' | 'arError' | 'targetFound' | 'targetLost';
  callbacks: (e: any) => void;
};

export type ReactSetter<T> = React.Dispatch<React.SetStateAction<T>>;

export type CompilerState = typeof COMPILER_STATE[keyof typeof COMPILER_STATE];
