import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import { markdownItSetup } from './node/markdown/markdownit'

export default defineConfig({
  rollupInputOptions: {
    input: resolve(__dirname, './src/app.js')
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/]
    }),

    // Markdown
    Markdown({
      headEnabled: true,
      wrapperClasses: 'markdown-body',
      wrapperComponent: 'wrapper',
      markdownItOptions: {
        html: true,
        linkify: true,
      },
      markdownItSetup,
    })
  ],

  // Vite ssg
  ssgOptions: {
    formatting: 'minify',
    format: 'cjs',
    mode: 'ssr',
    includedRoutes(paths) {
      return paths.map(path => path.startsWith('/:other') ? '/404' : path)
    }
  }
})