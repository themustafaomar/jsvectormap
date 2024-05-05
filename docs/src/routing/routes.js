import Home from '../pages/index.vue'
import pages from './pages'

export default [
  {
    path: '/',
    component: Home,
    meta: { section: 'Home' }
  },
  ...pages
    .map((s) => ({
      name: s.name,
      children: s.children.map((obj) => ({
        ...obj,
        section: s.name,
      }))
    }))
    .flatMap((g) => g.children.filter((item) => !item.external))
    .map((page) => ({
      path: `/docs/${page.to}`,
      component: () => import(`../../docs/${page.to}.md`),
      meta: { section: page.section },
    })),
  {
    path: '/:other*',
    component: () => import('../pages/404.vue')
  }
]