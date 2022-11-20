import { Router, isNavigationFailure } from 'vue-router'
import Cookie from 'js-cookie'
import { useUserStore } from '@/store/modules/userStore'
import { whitePath } from '@/settings/whiteUrls'
import { useAsyncRoute } from '@/store/modules/asyncRoute'
import NProgress from 'nprogress'
import { ErrorPageRoute } from './static'
import { AppRouterRecordRaw } from './types'
import('nprogress/nprogress.css')

NProgress.configure({
  easing: 'ease',
  speed: 500,
  trickleSpeed: 200,
  showSpinner: true
})

const routerGuard = (router: Router) => {
  router.beforeEach(async (to, from, next) => {
    NProgress.start()
    NProgress.inc()
    const token = Cookie.get('token')
    if (!token) {
      if (whitePath.includes(to.path)) {
        return next()
      } else {
        return next({ path: '/login', replace: true })
      }
    }
    const asyncRouteStore = useAsyncRoute()
    if (asyncRouteStore.getIsDynamicAddedRoute) {
      if (to.path == '/login') {
        return next(from.path)
      }
      return next()
    }

    const userStore = useUserStore()
    await userStore.getUserInfo()
    NProgress.inc()
    const routes = asyncRouteStore.getAsyncRoutes
    routes.forEach((route: AppRouterRecordRaw) => router.addRoute(route))
    router.addRoute(ErrorPageRoute)
    const redirectPath = from.query.redirect || to.path
    const redirect = decodeURIComponent(redirectPath as string)
    const nextData =
      to.path === redirect ? { ...to, replace: true } : { path: redirect }
    asyncRouteStore.setIsDynamicAddedRoute(true)
    next(nextData)
  })

  router.afterEach((to, from, failure) => {
    if (isNavigationFailure(failure)) {
      console.log('failed navigation', failure)
    }
    // 处理缓存
    const asyncRouteStore = useAsyncRoute()
    const keepAliveComponents = asyncRouteStore.keepAliveComponents
    const cureentCompName = to.matched.find((item) => item.name === to.name)
      ?.name as string
    if (
      cureentCompName &&
      to.meta.keepAlive &&
      !keepAliveComponents.includes(cureentCompName)
    ) {
      // 存入keepAlive
      keepAliveComponents.push(cureentCompName)
    }

    NProgress.done(true)
  })
}

export { routerGuard }
