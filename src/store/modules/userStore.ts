import { login_getUserInfo } from '@/api/login'
import { defineStore } from 'pinia'
import { useAsyncRoute } from './asyncRoute'

interface UserStore {
  userinfo: {
    nickname: string
    avatar: string
  }
}

const useUserStore = defineStore({
  id: 'user-store',
  state: (): UserStore => {
    return {
      userinfo: {
        nickname: '',
        avatar: ''
      }
    }
  },
  getters: {
    getUserInfos(): UserStore['userinfo'] {
      return this.userinfo
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
    }
  }
})

export { useUserStore }
