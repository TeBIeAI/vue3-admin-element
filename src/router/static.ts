import { AppRouterRecordRaw } from './types'

const staticRoutes: AppRouterRecordRaw[] = [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    redirect: '/userManage/userList'
  }
]

export const ErrorPageRoute: AppRouterRecordRaw = {
  path: '/:path(.*)*',
  name: 'ErrorPage',
  component: () => import('@/views/notFound/index.vue'),
  meta: {
    title: 'ErrorPage'
  }
}

export { staticRoutes }
