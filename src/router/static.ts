import type { RouteRecordRaw } from 'vue-router'

const staticRoutes: RouteRecordRaw[] = [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/',
    redirect: '/index/index',
  },
  {
    name: 'test-index',
    path: '/index/index',
    component: () => import('../components/HelloWorld.vue'),
  },
]

export { staticRoutes }
