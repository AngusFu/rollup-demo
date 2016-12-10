import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import buble from 'rollup-plugin-buble';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js';

import css from 'rollup-plugin-css-only';

export default {
  entry: 'src/index.js',
  dest: 'dist/bundle.js',
  format: 'iife',
  moduleName: "wxEditor",
  context: 'window',
  plugins: [
    css({
      output: './dist/bundle.css',
      sourceMap: true
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
      extensions: ['.js', '.json']
    }),
    commonjs(),
    json(),
    buble(),
    uglify({}, minify)
  ]
};
