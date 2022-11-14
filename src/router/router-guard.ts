import type { Router } from 'vue-router'
import Cookie from 'js-cookie'
import { useUserStore } from '@/store/module/userStore'
import { whitePath } from '@/settings/whiteUrls'

const routerGuard = (router: Router) => {
  return router.beforeEach(async (to, from, next) => {
    const token = Cookie.get('token')
    if (whitePath.includes(to.path)) {
      return next()
    }
    if (!token) {
      return next({ path: '/login', replace: true })
    }
    const userStore = useUserStore()
    const { userinfo } = userStore
    if (!userinfo) {
      await userStore.getUserInfo()
    }
  })
}

export { routerGuard }
