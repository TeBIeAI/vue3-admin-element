import { login_getUserInfo } from '@/api/login'
import { defineStore } from 'pinia'
import { useAsyncRoute } from './asyncRoute'

const useUserStore = defineStore({
  id: 'user-store',
  state: (): UserStore => {
    return {
      userinfo: null,
    }
  },
  actions: {
    setUserInfo(userinfo: any) {
      this.userinfo = userinfo
    },
    async getUserInfo() {
      try {
        const res = await login_getUserInfo()
        this.setUserInfo(res.data.userinfo)
        const asyncStore = useAsyncRoute()
        asyncStore.generateRoutes(res.data.menus)
      } catch (error) {
        return false
      }
    },
  },
})

export { useUserStore }
