export default {
  root: '.',
  outDir: 'dist',
  workers: 2,
  passes: 3,
  clean: true,
  exclude: [
    'xmScripts/**',
    'ximera-downloads/**',
    '.devcontainer/**',
    '.github/**',
    'node_modules/**',
    'dist/**',
    '.tex4npm/**'
  ]
};
