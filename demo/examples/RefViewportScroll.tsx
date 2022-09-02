import { useRefViewportScroll, useViewportTransform } from '../../src';
import { motion } from 'framer-motion';
import React from 'react';

export function RefViewportScroll() {
  const [ref, inputRange] = useRefViewportScroll([-0.3, 0.3, 0.8, 1.15]);

  const scale = useViewportTransform(inputRange, [0, 1, 1, 0]);
  const opacity = useViewportTransform(inputRange, [0, 1, 1, 0]);

  return (
    <motion.div ref={ref} className="element" style={{ scale, opacity }}>
      Scale Opacity
    </motion.div>
  );
}
