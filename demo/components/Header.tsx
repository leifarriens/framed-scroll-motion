import React from 'react';

import { motion } from 'framer-motion';
import { useFramedScrollMotion } from '../../src';

export default function Header() {
  const [ref, filter] = useFramedScrollMotion(
    [0.5, 1],
    ['hue-rotate(0deg)', 'hue-rotate(45deg)']
  );

  return (
    <header>
      <div ref={ref} style={{ textAlign: 'center' }}>
        <motion.h1 style={{ filter }}>framed-scroll-motion</motion.h1>
        <pre>
          <code>npm install framer-motion framed-scroll-motion</code>
        </pre>
        <div>
          <a
            href="https://github.com/leifarriens/framed-scroll-motion"
            target="_blank"
          >
            github
          </a>
        </div>
      </div>
    </header>
  );
}
