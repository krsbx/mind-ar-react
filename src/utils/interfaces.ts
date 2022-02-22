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
  easing?:
    | 'easeInQuad'
    | 'easeOutQuad'
    | 'easeInOutQuad|'
    | 'easeInCubic'
    | 'easeOutCubic'
    | 'easeInOutCubic'
    | 'easeInQuart'
    | 'easeOutQuart'
    | 'easeInOutQuart'
    | 'easeInQuint'
    | 'easeOutQuint'
    | 'easeInOutQuint'
    | 'easeInSine'
    | 'easeOutSine'
    | 'easeInOutSine'
    | 'easeInExpo'
    | 'easeOutExpo'
    | 'easeInOutExpo'
    | 'easeInCirc'
    | 'easeOutCirc'
    | 'easeInOutCirc'
    | 'easeInBack'
    | 'easeOutBack'
    | 'easeInOutBack'
    | 'easeInElastic'
    | 'easeOutElastic'
    | 'easeInOutElastic'
    | 'linear';
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
  type:
    | 'a-box'
    | 'a-circle'
    | 'a-cone'
    | 'a-cylinder'
    | 'a-gltf-model'
    | 'a-plane'
    | 'a-sphere'
    | 'a-entity';
  height?: number;
  width?: number;
  src?: string;
  fog?: boolean;
  depth?: number;
  'segments-height'?: number;
  'segments-width'?: number;
  ref?: any;
}

export interface IRounded {
  'theta-start': number;
  'theta-length': number;
}

export interface IRadius {
  'radius-top': number;
  'radius-bottom': number;
}

export interface IBox extends Omit<IPrimitive, 'type'> {}
export interface ICircle extends Omit<IPrimitive, 'type'>, IRounded {
  radius: number;
  segments?: number;
}
export interface ICone extends Omit<IPrimitive, 'type'>, IRounded, IRadius {
  'open-ended': boolean;
}
export interface ICylinder extends ICone {}
export interface IPlane extends IBox {}
export interface ISphere extends ICircle {
  'phi-start': number;
  'phi-length': number;
}
export interface IGLTFModel extends Omit<IPrimitive, 'type'> {}

export interface IEntity extends Omit<IPrimitive, 'type'> {
  geometry?: string;
  'gltf-model'?: string;
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

export interface IScene {
  stats?: boolean;
  embedded?: boolean;
  'vr-mode-ui'?: boolean;
  'device-orientation-permission-ui'?: boolean;
  'mindar-image': {
    imageTargetSrc: string;
    autoStart?: boolean;
    uiLoading?: 'yes' | 'no';
    uiError?: 'yes' | 'no';
    uiScanning?: 'yes' | 'no';
  };
  renderer?: string;
}

export interface IItems {
  id: string;
  'response-type'?: string;
  src: string;
}

export interface IMarker extends IEntity {
  targetIndex: number;
}

export interface ICamera {
  position: IAxis;
  'look-controls'?: boolean;
}
