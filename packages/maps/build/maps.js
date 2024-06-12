import path from 'path'
import resolve from '@rollup/plugin-node-resolve'
import { glob } from 'glob'
import { terser } from 'rollup-plugin-terser'

async function build() {
	const maps = await glob('src/*.js')

	return maps.map((file) => ({
		input: file,
		output: {
			file: `dist/${path.basename(file)}`,
			format: 'cjs',
			plugins: [terser()],
			strict: false,
		},
		plugins: [resolve()],
	}))
}

export default build()