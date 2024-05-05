import prism from 'markdown-it-prism'
import toc from 'markdown-it-table-of-contents'
import anchor from 'markdown-it-anchor'
import { containerPlugin } from './plugins/containers'
import { anchorPlugin } from './plugins/anchor'

export const markdownItSetup = md => {
  md.use(prism)
    .use(toc, {
      includeLevel: [1, 2, 3],
    })
    .use(anchor, anchorPlugin(anchor))
    .use(containerPlugin)
}