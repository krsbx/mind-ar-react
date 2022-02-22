import _ from 'lodash';
import { ANIMATION_PROPERTIES } from './constant';
import { AnimationKey, IAnimation } from './interfaces';

/**
 * Generate animation for a single object
 * @param props animation properties
 * @returns animationParams
 */

const singleAnimationHandler = (props: IAnimation): string => {
  let animationParams = '';

  _.forEach(props, (value: any, key: string) => {
    if (_.includes(ANIMATION_PROPERTIES, key)) {
      const currentData = props[key as AnimationKey];

      if (_.isObject(currentData)) {
        animationParams += `${key}: ${_.values(currentData).join(' ')};`;
      } else {
        animationParams += `${key}: ${currentData};`;
      }
    }
  });

  return animationParams;
};

/**
 * Generate animation for objects
 * @param props animation properties
 * @returns animationParams
 */
const multipleAnimationHandler = (props: IAnimation[]) => {
  const animationParams: string[] = [];

  _.forEach(props, (value: IAnimation) => {
    animationParams.push(singleAnimationHandler(value));
  });

  const animationObject: Record<
    string,
    ReturnType<typeof singleAnimationHandler>
  > = {};

  _.forEach(animationParams, (value: string, index: number) => {
    const animationName = `animation${index === 0 ? '' : `__${index + 1}`}`;

    animationObject[animationName] = value;
  });

  return animationObject;
};

/**
 * Generate animation for entity/primitive
 * @param props
 * @returns animationParams
 */
export const getAnimations = (props: IAnimation | IAnimation[]) => {
  let animationParams = null;

  if (_.isArray(props)) {
    // Multiple animations
    animationParams = multipleAnimationHandler(props);
  } else if (_.isObject(props) && !_.isArray(props)) {
    // Single animations
    animationParams = { animation: singleAnimationHandler(props) };
  }

  return animationParams;
};

/**
 * Join an object to a string
 * @param props component props
 * @return single object for each props
 */
export const propsConverter = (props: Record<any, any>) => {
  _.forEach(props, (value, index) => {
    if (_.isObject(value)) {
      props[index] = _.values(value).join(' ');
    }
  });

  return props;
};

export const concatProps = (props: Record<any, any>) => {
  _.forEach(props, (value, index) => {
    if (_.isObject(value)) {
      props[index] = _.values(value).join(' ');
    }
  });

  return _.map(props, (value: string | boolean, key: string) => {
    return `${key}: ${value}`;
  }).join('; ');
};

export const mergeRefs = (...refs: any[]) => {
  const filteredRefs = refs.filter(Boolean);

  if (!filteredRefs.length) return null;

  if (filteredRefs.length === 0) return filteredRefs[0];

  return (inst: any) => {
    for (const ref of filteredRefs) {
      if (typeof ref === 'function') {
        ref(inst);
      } else if (ref) {
        ref.current = inst;
      }
    }
  };
};
