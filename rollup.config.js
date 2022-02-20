import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import autoprefixer from 'autoprefixer'
import scss from 'rollup-plugin-scss'
import postcss from 'postcss'
import serve from 'rollup-plugin-serve'
import liveReload from 'rollup-plugin-livereload'

export default {
  input: 'src/js/jsvectormap.js',
  output: {
    name: 'jsVectorMap',
    file: 'dist/js/jsvectormap.js',
    format: 'umd',
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
    serve(),
    liveReload({
      watch: './dist',
    }),
  ]
}