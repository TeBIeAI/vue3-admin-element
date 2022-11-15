import { createRouter, createWebHashHistory } from 'vue-router'
import { staticRoutes } from './static'
import { routerGuard } from './router-guard'

const router = createRouter({
  history: createWebHashHistory(),
  routes: staticRoutes
})

routerGuard(router)

export default router
