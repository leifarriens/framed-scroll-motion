import { useFramedScrollMotion } from '../../src';
import { motion } from 'framer-motion';

export function FramedScrollMotion() {
  const [ref, filter] = useFramedScrollMotion(
    [0.25, 1],
    ['hue-rotate(0deg)', 'hue-rotate(-180deg)']
  );

  return (
    <section style={{ backgroundColor: 'brown' }}>
      <motion.div ref={ref} className="element" style={{ filter }}>
        Ref
      </motion.div>
    </section>
  );
}
