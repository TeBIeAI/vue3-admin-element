import type { RouteRecordRaw } from 'vue-router'

const staticRoutes: RouteRecordRaw[] = [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/',
    redirect: '/userManage/userList',
  },
]

export const ErrorPageRoute: RouteRecordRaw = {
  path: '/:path(.*)*',
  name: 'ErrorPage',
  component: () => import('@/views/notFound/index.vue'),
  meta: {
    title: 'ErrorPage',
  },
}

export { staticRoutes }
