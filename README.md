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

- Import the components in your React projects

```js
import { Scene, Camera, Box } from 'mind-ar-react';


return (
  /// See the Example one for the structure
);
```

# Usage

:arrow_right: Please see how to use it by seeing the example one in [Examples](./src/Examples)

# :warning: Gesture/Mouse Actions :warning:

For any gesture/mouse actions, the example how to use it can be found in [`src/Examples/ImageTracking.tsx`](./src/Examples/ImageTracking.tsx). In the example files, the only actions that works is the Scale with mouse wheel, this happen 'cause of the DOM things. Any PR to fix this examples are welcome.
