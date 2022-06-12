export const ANIMATION_PROPERTIES = [
  'property',
  'isRawProperty',
  'from',
  'to',
  'type',
  'delay',
  'dir',
  'dur',
  'easing',
  'elasticity',
  'loop',
  'round',
  'startEvents',
  'pauseEvents',
  'resumeEvents',
  'autoplay',
  'enabled',
] as const;

export const ANIMATION_EASING = {
  EASE_IN_QUAD: 'easeInQuad',
  EASE_OUT_QUAD: 'easeOutQuad',
  EASE_IN_OUT_QUAD: 'easeInOutQuad',
  EASE_IN_CUBIC: 'easeInCubic',
  EASE_OUT_CUBIC: 'easeOutCubic',
  EASE_IN_OUT_CUBIC: 'easeInOutCubic',
  EASE_IN_QUART: 'easeInQuart',
  EASE_OUT_QUART: 'easeOutQuart',
  EASE_IN_OUT_QUART: 'easeInOutQuart',
  EASE_IN_QUINT: 'easeInQuint',
  EASE_OUT_QUINT: 'easeOutQuint',
  EASE_IN_OUT_QUINT: 'easeInOutQuint',
  EASE_IN_SINE: 'easeInSine',
  EASE_OUT_SINE: 'easeOutSine',
  EASE_IN_OUT_SINE: 'easeInOutSine',
  EASE_IN_EXPO: 'easeInExpo',
  EASE_OUT_EXPO: 'easeOutExpo',
  EASE_IN_OUT_EXPO: 'easeInOutExpo',
  EASE_IN_CIRC: 'easeInCirc',
  EASE_OUT_CIRC: 'easeOutCirc',
  EASE_IN_OUT_CIRC: 'easeInOutCirc',
  EASE_IN_BACK: 'easeInBack',
  EASE_OUT_BACK: 'easeOutBack',
  EASE_IN_OUT_BACK: 'easeInOutBack',
  EASE_IN_ELASTIC: 'easeInElastic',
  EASE_OUT_ELASTIC: 'easeOutElastic',
  EASE_IN_OUT_ELASTIC: 'easeInOutElastic',
  LINEAR: 'linear',
} as const;

export const PRIMITIVE_TYPES = {
  BOX: 'a-box',
  CIRCLE: 'a-circle',
  CONE: 'a-cone',
  CYLINDER: 'a-cylinder',
  GLTF_MODEL: 'a-gltf-model',
  IMAGE: 'a-image',
  PLANE: 'a-plane',
  SPHERE: 'a-sphere',
  ENTITY: 'a-entity',
} as const;

export const COMPILER_STATE = {
  IDLE: 'IDLE',
  COMPILING: 'COMPILING',
  COMPILED: 'COMPILED',
} as const;
