# Mind AR React

## A Mind AR Wrapper for React

# How to start

- Install Mind AR React as Depedencies

```
npm i mind-ar-react
```

- Install Aframe, since it's depends on aframe

```
npm i aframe
```

- Install aframe-react-component, if npm not installing it for you

```
npm i aframe-react-component
```

- Import the components in your React projects

```js
import { Scene } from 'mind-ar-react';
import { Camera, Box } from 'aframe-react-component';


return (
  /// See the Example one for the structure
);
```

# Usage

:arrow_right: Please see how to use it by seeing the example one in [Examples (from src)](./src/examples) / [Examples (from dist)](./dist/examples)

# Keep in Mind

Use the `Scene` and `Entity` component that `mind-ar-react` provide instead the one that `aframe-react-component` provide.

# :warning: Gesture/Mouse Actions :warning:

For any gesture/mouse actions, the example how to use it can be found in [`src/examples/ImageTracking.tsx`](./src/examples/ImageTracking.tsx). In the example files, the only actions that works is the Scale with mouse wheel, this happen 'cause of the DOM things. Any PR to fix this examples are welcome.
