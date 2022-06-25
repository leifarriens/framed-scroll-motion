import { useRefViewportScroll, useSize } from '../../src';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export function RefViewportScroll() {
  const size = useSize();

  const { scrollYProgress } = useViewportScroll();

  const [ref, inputRange] = useRefViewportScroll([-0.1, 0.25, 0.75, 1.1], size);

  const scale = useTransform(scrollYProgress, inputRange, [0, 1, 1, 0]);
  const rotate = useTransform(scrollYProgress, inputRange, [0, 90, 180, 0]);
  const opacity = useTransform(scrollYProgress, inputRange, [0, 1, 1, 0]);

  return (
    <section style={{ backgroundColor: 'orange' }}>
      <motion.div
        ref={ref}
        className="element"
        style={{ scale, rotate, opacity }}
      >
        Ref Viewport
      </motion.div>
    </section>
  );
}
