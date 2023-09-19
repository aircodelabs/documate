import { buildSync } from "esbuild";

const options = {
  entryPoints: ['src/index.js'],
  outfile: 'dist/documate-ui.js',
  bundle: true,
  inject: ['./src/inject-css.js'],
  loader: {
    '.css': 'text',
  },
  minify: true,
};

buildSync(options);