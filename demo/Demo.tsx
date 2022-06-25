import { motion } from 'framer-motion';
import { useFramedScrollMotion } from '../src';

export default function Demo() {
  const [ref, x] = useFramedScrollMotion(
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, 200, -200, 200, -200, 0]
  );

  return (
    <section>
      <motion.div ref={ref} style={{ x }} className="element">
        Demo
      </motion.div>
    </section>
  );
}
