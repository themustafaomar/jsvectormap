import { ViteSSG } from 'vite-ssg'
import RootLayout from './layouts/RootLayout.vue'
import ContentLayout from './layouts/ContentLayout.vue'
import VectorMap from './plugins/vectorMap'
import routes from './routing/routes'
import './assets/css/tailwind.css'
import './assets/css/highlight.css'

export const createApp = ViteSSG(
  RootLayout,
  {
    routes,
    scrollBehavior(to, from, savedPosition) {
      return savedPosition ? savedPosition : { top: 0 }
    },
    linkExactActiveClass: '!text-blue-600 !border-blue-600',
  },
  async ({ app, router, routes, isClient, initialState }) => {
    app.use(VectorMap)
    app.component('wrapper', ContentLayout)
    app.component('ReflectUserLocation', (await import('./components/Samples/ReflectUserLocation.vue')).default)

    if (isClient) {
      const ProgressBar = (await import('@badrap/bar-of-progress')).default
      const progress = new ProgressBar({
        size: 2,
        color: '#3b82f6',
        delay: 50,
      })

      router.beforeEach((from, to, next) => {
        if (from.path !== to.path) {
          progress.start()
        }
        next()
      })

      router.afterEach((from, to) => {
        progress.finish()
      })
    }
  }
)