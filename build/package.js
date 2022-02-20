import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import babel from '@rollup/plugin-babel'
import autoprefixer from 'autoprefixer'
import scss from 'rollup-plugin-scss'
import postcss from 'postcss'

const INPUT_FILE = 'src/js/jsvectormap.js'
const LIBRARY_NAME = 'jsVectorMap'

function scssOptions(filename, outputStyle = 'expanded') {
  return {
    processor: css => postcss([ autoprefixer ]).process(css).then(result => result.css),
    output: `dist/css/${filename}.css`,
    outputStyle,
  }
}

module.exports = [
  {
    input: INPUT_FILE,
    output: {
      name: LIBRARY_NAME,
      file: 'dist/js/jsvectormap.js',
      format: 'umd',
    },
    plugins: [
      resolve(),
      babel({ babelHelpers: 'bundled' }),
      scss(scssOptions('jsvectormap'))
    ]
  },
  {
    input: INPUT_FILE,
    output: {
      name: LIBRARY_NAME,
      file: 'dist/js/jsvectormap.min.js',
      format: 'umd',
      plugins: [ terser() ]
    },
    plugins: [
      resolve(),
      babel({ babelHelpers: 'bundled' }),
      scss(scssOptions('jsvectormap.min', 'compressed'))
    ]
  }
]