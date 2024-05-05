import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

export default ['world-merc.js', 'world.js'].map((file) => ({
  external: ['jsvectormap'],
  input: `src/maps/${file}`,
  output: {
    file: `dist/${file}`,
    format: 'cjs',
    plugins: [terser()],
    globals: { jsvectormap: 'jsVectorMap' },
  },
  plugins: [resolve()],
}))
