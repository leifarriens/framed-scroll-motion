import { useRefViewportScroll, useViewportTransform } from '../../src';
import { motion } from 'framer-motion';
import React from 'react';

export function ContainerRef() {
  const [ref, inputRange] = useRefViewportScroll([0, 1]);

  const scale = useViewportTransform(inputRange, [0, 1]);
  const rotate = useViewportTransform(inputRange, [0, 360]);
  const filter = useViewportTransform(inputRange, [
    'hue-rotate(0deg)',
    'hue-rotate(45deg)',
  ]);

  return (
    <div
      ref={ref}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="element"
          style={{ scale, rotate, filter }}
        />
      ))}
    </div>
  );
}
