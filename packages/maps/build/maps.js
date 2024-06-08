import path from 'path'
import resolve from '@rollup/plugin-node-resolve'
import { glob } from 'glob'
import { terser } from 'rollup-plugin-terser'

async function build() {
	const maps = await glob('src/*.js')

	return maps.map((file) => ({
		external: ['jsvectormap'],
		input: file,
		output: {
			file: `dist/${path.basename(file)}`,
			format: 'cjs',
			plugins: [terser()],
			globals: { jsvectormap: 'jsVectorMap' },
		},
		plugins: [resolve()],
	}))
}

export default build()