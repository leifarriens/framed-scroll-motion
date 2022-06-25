import { useRefScrollProgress, useSize } from '../../src';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

export function RefScrollProgress() {
  const size = useSize();

  const { scrollYProgress } = useViewportScroll();

  const { ref, start, end } = useRefScrollProgress(size);

  const rotate = useTransform(
    scrollYProgress,
    [start, end],
    ['0deg', '360deg']
  );

  return (
    <section style={{ backgroundColor: 'yellowgreen' }}>
      <motion.div ref={ref} className="element" style={{ rotate }}>
        Ref
      </motion.div>
    </section>
  );
}
