import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import autoprefixer from 'autoprefixer'
import scss from 'rollup-plugin-scss'
import postcss from 'postcss'

export default {
  input: 'src/js/index.js',
  output: {
    name: 'jsVectorMap',
    file: 'dist/js/jsvectormap.js',
    format: 'es',
  },
  plugins: [
    resolve(),
    babel({
      babelHelpers: 'bundled',
    }),
    scss({
      processor: css => postcss([ autoprefixer ]).process(css).then(result => result.css),
      output: 'dist/css/jsvectormap.css',
      outputStyle: 'expanded',
    }),
  ]
}