import { useFramedScrollMotion } from '../../src';
import { motion } from 'framer-motion';
import React from 'react';

export function FramedScrollMotion() {
  const [ref, rotate] = useFramedScrollMotion([0, 1], [0, 180]);

  return (
    <motion.div ref={ref} className="element" style={{ rotate }}>
      Rotate
    </motion.div>
  );
}
