/**
 * Convert CommonJS modules to ES6,
 * so they can be includedin a Rollup bundle
 * SEE https://github.com/rollup/rollup-plugin-commonjs
 */
import commonjs from 'rollup-plugin-commonjs'

/**
 * Locate modules using the Node resolution algorithm,
 * for using third party modules in node_modules
 * SEE https://github.com/rollup/rollup-plugin-node-resolve
 */
import resolve from 'rollup-plugin-node-resolve'

/**
 * json loader
 */
import json from 'rollup-plugin-json'

/**
 * buble instead of babel(with babel-preset-env),
 * the latter is much more powerful, while the former is simpler
 */
import buble from 'rollup-plugin-buble'

/**
 * postCSS loader
 */
import postCSS from 'rollup-plugin-postcss'

/**
 * uglify js
 */
import uglify from 'rollup-plugin-uglify'
import { minify } from 'uglify-js'

/**
 * minify css
 * SEE http://cssnano.co/
 */
import cssnano from 'cssnano'

/**
 * PostCSS plugin that enables for-loop syntax in your CSS
 * SEE SEE https://github.com/antyakushev/postcss-for
 */
import cssFor from 'postcss-for'

/**
 * PostCSS plugin to iterate through values
 * SEE https://github.com/outpunk/postcss-each
 */
import cssEach from 'postcss-each'

/**
 * SEE https://github.com/MoOx/postcss-cssnext
 */
import cssNext from 'postcss-cssnext'

/**
 * https://github.com/postcss/postcss-import
 */
import cssImport from 'postcss-import'

/**
 * Rollup: https://rollupjs.org/
 */
export default {
  input: './src/scripts/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    sourcemap: true,
    strict: true
  },
  context: 'this',
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
      extensions: ['.js', '.json']
    }),
    commonjs(),
    json(),
    postCSS({
      plugins: [
        cssImport(),
        cssFor(),
        cssEach(),
        cssNext({ warnForDuplicates: false }),
        cssnano({})
      ],
      extract: 'dist/bundle.css'
    }),
    buble(),
    uglify({}, minify)
  ]
}

