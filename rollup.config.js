export default [
  {
    input: 'main-a.js',
    output: {
      file: 'dist/bundle-a.js',
      format: 'cjs',
    },
  },
  {
    input: 'main-b.js',
    output: [
      {
        file: 'dist/bundle-b1.js',
        format: 'cjs',
      },
      {
        file: 'dist/bundle-b2.js',
        format: 'es',
      },
    ],
  },
];
