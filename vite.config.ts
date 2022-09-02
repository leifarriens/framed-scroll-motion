import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
  plugins: [react(), { ...typescript(), apply: 'build' }],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'framed-scroll-motion',
      fileName: (format) => `framed-scroll-motion.${format}.js`,
    },
    rollupOptions: {
      external: ['react'],
      output: {
        dir: 'dist',
        globals: {
          react: 'React',
        },
      },
    },
    minify: 'terser',
    emptyOutDir: true,
  },
});
