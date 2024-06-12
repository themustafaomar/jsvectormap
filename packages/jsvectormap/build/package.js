import { terser } from 'rollup-plugin-terser'
import { babel } from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import autoprefixer from 'autoprefixer'
import scss from 'rollup-plugin-scss'
import postcss from 'postcss'

const INPUT_FILE = 'src/js/index.js'
const LIBRARY_NAME = 'jsVectorMap'

function scssOptions(filename, outputStyle = 'expanded') {
  return {
    processor: css => postcss([ autoprefixer ]).process(css).then(result => result.css),
    output: `dist/${filename}.css`,
    outputStyle,
  }
}

function getCommonMaps() {
  return ['world-merc', 'world'].map((file) => ({
    external: ['jsvectormap'],
    input: `../maps/src/${file}.js`,
    output: {
      file: `dist/maps/${file}.js`,
      format: 'cjs',
      plugins: [terser()],
      globals: { jsvectormap: LIBRARY_NAME },
    },
    plugins: [resolve()],
  }))
}

const builds = ['umd', 'es', 'cjs'].map((format) => {
  const extension = format === 'umd'
    ? 'js'
    : format === 'es'
      ? 'esm.js'
      : 'cjs'

  return {
    input: INPUT_FILE,
    output: {
      name: LIBRARY_NAME,
      file: `dist/jsvectormap.${extension}`,
      format,
    },
    plugins: [
      resolve(),
      babel({ babelHelpers: 'bundled' }),
      scss(scssOptions('jsvectormap')),
    ],
  }
})

export default [
  {
    input: INPUT_FILE,
    output: {
      name: LIBRARY_NAME,
      file: `dist/jsvectormap.min.js`,
      format: 'umd',
      plugins: [ terser() ],
    },
    plugins: [
      resolve(),
      babel({ babelHelpers: 'bundled' }),
      scss(scssOptions('jsvectormap.min', 'compressed')),
    ],
  },
  ...builds,
  ...getCommonMaps(),
]