/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'demo',
  plugins: [react()],
  build: {
    minify: 'terser',
    outDir: 'build',
    emptyOutDir: true,
    rollupOptions: {
      // output: {
      //   dir: 'build',
      // },
      input: {
        main: resolve(__dirname, 'demo/index.html'),
      },
    },
  },
});
