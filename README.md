# framed-scroll-motion

Wrapper for [framer-motions](https://github.com/framer/motion/tree/main/packages/framer-motion) `useViewportScroll` hook to animate an element according to its ref containers position in the viewport.

## Installation

With npm:

```sh
npm i framer-motion framed-scroll-motion
```

With yarn:

```sh
yarn add framer-motion framed-scroll-motion
```

## Usage/Examples

### Setup

Wrap your App with the `FrameProvider`. This Context provides the current window size for every `framed-scroll-motion` hook.

```js
import { FrameProvider } from 'framed-scroll-motion';

const App = () => {
  return (
    <FrameProvider>
      // ...
    </FrameProvider>
  );
}
```

### Quickstart hook

The `useFramedScrollMotion` hook takes an array of keyframes as its first argument and framer motions `useTransform` hook output range as the seconds argument.

The animation starts when the ref element is entering the viewport and ends when the ref has fully left the screen.

The keyframes array must contain ascending decimal values representing the refs scroll percentage in the current viewport. Keyframes and output range must be the same length.

```js
import { useFramedScrollMotion } from 'framed-scroll-motion';

const FramedScroll = () => {
  const [ref, rotate] = useFramedScrollMotion([0, 1], [0, 180]);

  return (
    <motion.div ref={ref} style={{ rotate }}>
      Rotate
    </motion.div>
  );
};
```

### Multiple Transforms

To use multiple transforms corresponding to a single ref element use the `useRefViewportScroll` hook. It returns an input range which you can pass to the `useViewportTransform` hook to get the according motion value.

```js
import {
  useRefViewportScroll,
  useViewportTransform,
} from 'framed-scroll-motion';

const FramedScroll = () => {
  const [ref, inputRange] = useRefViewportScroll([-0.3, 0.3, 0.8, 1.15]);

  const scale = useViewportTransform(inputRange, [0, 1, 1, 0]);
  const opacity = useViewportTransform(inputRange, [0, 1, 1, 0]);

  return (
    <motion.div ref={ref} style={{ scale, opacity }}>
      Scale Opacity
    </motion.div>
  );
};
```

## Roadmap

- Better demo
- Better documentation

## Authors

- [@leifarriens](https://www.github.com/leifarriens)
