import React from 'react';
import { motion } from 'framer-motion';
import {
  useRefViewportScroll,
  useWindowSize,
  useViewportTransform,
} from '../src';

export default function Demo() {
  const size = useWindowSize();
  const [sectionRef, inputRange] = useRefViewportScroll([0, 1], size);
  const scale = useViewportTransform(inputRange, [1, 2]);
  const textScale = useViewportTransform(inputRange, [1, 25]);
  const filter = useViewportTransform(inputRange, [
    'contrast(0%)',
    'contrast(200%)',
  ]);

  return (
    <section ref={sectionRef}>
      <motion.div style={{ scale }}>
        <motion.img
          src="https://loremflickr.com/g/1280/720/paris"
          style={{ filter }}
        />
      </motion.div>
      <motion.h2
        style={{ scale: textScale, zIndex: 20, pointerEvents: 'none' }}
      >
        Demo
      </motion.h2>
    </section>
  );
}
