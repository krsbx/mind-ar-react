import React from 'react';
import { ANIMATION_EASING, COMPILER_STATE, PRIMITIVE_TYPES } from './constant';

export interface IAxis {
  x: number;
  y: number;
  z: number;
}

export interface IAnimation {
  property?: string;
  from?: IAxis | string;
  to?: IAxis | string;
  delay?: number;
  dir?: 'normal' | 'alternate' | 'reverse';
  dur?: number;
  easing?: typeof ANIMATION_EASING[keyof typeof ANIMATION_EASING];
  elasticity?: number;
  loop?: boolean;
  round?: boolean;
  autoplay?: boolean;
  enabled?: boolean;
}

export interface IPrimitive {
  color?: string;
  material?: string;
  position?: IAxis;
  scale?: IAxis;
  rotation?: IAxis;
  animation?: IAnimation | IAnimation[];
  visible?: boolean;
  type: typeof PRIMITIVE_TYPES[keyof typeof PRIMITIVE_TYPES];
  height?: number;
  width?: number;
  src?: string;
  fog?: boolean;
  depth?: number;
  'segments-height'?: number;
  'segments-width'?: number;
  children?: React.ReactNode;
  ref?: any;
}

export interface IRounded {
  'theta-start'?: number;
  'theta-length'?: number;
}

export interface IRadius {
  'radius-top'?: number;
  'radius-bottom'?: number;
}

export interface IBox extends Omit<IPrimitive, 'type'> {}
export interface ICircle extends Omit<IPrimitive, 'type'>, IRounded {
  radius: number;
  segments?: number;
}
export interface ICone extends Omit<IPrimitive, 'type'>, IRounded, IRadius {
  'open-ended'?: boolean;
}
export interface ICylinder extends ICone {}
export interface IPlane extends IBox {}
export interface ISphere extends ICircle {
  'phi-start'?: number;
  'phi-length'?: number;
}
export interface IGLTFModel extends Omit<IPrimitive, 'type'> {}

export interface IEntity extends Omit<IPrimitive, 'type'> {
  geometry?: string;
  'gltf-model'?: string;
  'mindar-face-occluder'?: boolean;
}

export interface IText {
  align: 'left' | 'center' | 'right';
  'alpha-test': number;
  anchor: 'left' | 'center' | 'right' | 'align';
  baseline: 'top' | 'center' | 'bottom';
  color: string;
  font: string;
  'font-image': string;
  height: number;
  'letter-spacing': number;
  'line-height': number;
  opacity: number;
  rotation: IAxis;
  shader: string;
  side: 'front' | 'back' | 'double';
  'tab-size': number;
  transparent: boolean;
  value: string;
  'white-space': 'normal' | 'pre' | 'nowrap';
  width: number;
  'wrap-count': number;
  'wrap-pixels': number;
  'z-offset': number;
}

export type AnimationKey = keyof IAnimation;
export type AnimationType = Record<keyof IAnimation, any>;

export interface IDefaultARProps {
  autoStart?: boolean;
  uiLoading?: string;
  uiScanning?: string;
  uiError?: string;
  filterMinCF?: number;
  filterBeta?: number;
  shouldFaceUser?: boolean;
}

export interface IMindARImage extends IDefaultARProps {
  imageTargetSrc: string;
  maxTrack?: number;
  missTolerance?: number;
  warmupTolerance?: number;
  showStats?: boolean;
  reshowScanning?: boolean;
}

export interface IMindARFace extends IDefaultARProps {
  faceOccluder?: boolean;
}

export interface IScene {
  stats?: boolean;
  embedded?: boolean;
  orientationUI?: boolean;
  mindARImage?: IMindARImage;
  mindARFace?: IMindARFace;
  vrModeUI?: boolean;
  renderer?: string;
  children?: React.ReactNode;
  arEvents?: IAREvents[] | IAREvents;
  colorSpace?: string;
}

export interface IItems {
  id: string;
  'response-type'?: string;
  src: string;
}

export interface IMarker extends IEntity {
  targetIndex: number;
}

export interface IFaces extends IEntity {
  anchorIndex?: number;
}

export interface ICamera {
  position: IAxis;
  'look-controls'?: boolean;
  active?: boolean;
}

export interface IAREvents {
  eventName: 'arReady' | 'arError' | 'targetFound' | 'targetLost';
  callbacks: (e: any) => void;
}

export type ReactSetter<T> = React.Dispatch<React.SetStateAction<T>>;

export type CompilerState = typeof COMPILER_STATE[keyof typeof COMPILER_STATE];
