import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'
import autoprefixer from 'autoprefixer'
import scss from 'rollup-plugin-scss'
import postcss from 'postcss'

const input = 'src/js/JsVectorMap.js'
const name = 'JsVectorMap'

function scssOptions(filename, outputStyle = 'expanded') {
  return {
    processor: css => postcss([ autoprefixer ]).process(css).then(result => result.css),
    output: `dist/css/${filename}.css`,
    outputStyle,
  }
}

module.exports = [
  {
    input,
    output: {
      name,
      file: 'dist/js/jsvectormap.js',
      format: 'umd',
    },
    plugins: [
      resolve(),
      babel({ exclude: 'node_modules/**' }),
      scss(
        scssOptions('jsvectormap')
      )
    ]
  },
  {
    input,
    output: {
      name,
      file: 'dist/js/jsvectormap.min.js',
      format: 'umd',
      plugins: [ terser() ]
    },
    plugins: [
      resolve(),
      babel({ exclude: 'node_modules/**' }),
      scss(
        scssOptions('jsvectormap.min', 'compressed')
      )
    ]
  }
]