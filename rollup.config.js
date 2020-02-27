import { terser } from 'rollup-plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'

export default {
  input: 'src/js/JsVectorMap.js',

  output: [
    {
      name: 'JsVectorMap',
      file: 'dist/js/jsvectormap.js',
      format: 'iife',
    },
    {
      name: 'JsVectorMap',
      file: 'dist/js/jsvectormap.min.js',
      format: 'iife',
      plugins: [ terser() ]
    }
  ],

  plugins: [
    resolve(), babel({
      exclude: 'node_modules/**'
    })
  ]
}