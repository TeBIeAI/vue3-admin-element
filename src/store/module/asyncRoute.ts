import { defineStore } from 'pinia'
import type { RouteRecordRaw } from 'vue-router'

interface AsyncRouterState {
  asyncRoutes: RouteRecordRaw[]
  keepAliveComponents: string[]
  isDynamicAddedRoute: boolean
}

const useAsyncRoute = defineStore({
  id: 'async-route-store',
  state: (): AsyncRouterState => {
    return {
      asyncRoutes: [],
      keepAliveComponents: [],
      isDynamicAddedRoute: false,
    }
  },
  getters: {
    getIsDynamicAddedRoute(): boolean {
      return this.isDynamicAddedRoute
    },
    getKeepAliveComponents(): string[] {
      return this.keepAliveComponents
    },
    getAsyncRoutes(): RouteRecordRaw[] {
      return this.asyncRoutes
    },
  },
  actions: {
    setAsyncRoutes(routes: RouteRecordRaw[]) {
      this.asyncRoutes = routes
    },
    setIsDynamicAddedRoute(bool: boolean) {
      this.isDynamicAddedRoute = bool
    },
    generateRoutes(asyncRoutes: RouteRecordRaw[]) {
      const _asyncRoutes = createAsyncRouterTree(asyncRoutes)
      this.setAsyncRoutes(_asyncRoutes)
    },
  },
})

function createRouteType(route: any): RouteRecordRaw {
  const path = route.filePath
  route.path = route.pid === 0 ? '/' + route.name : route.name
  route.component = () => import(/* @vite-ignore */ `/src${path}.vue`)
  route.component1 = path
  route.meta = {
    title: route.title,
  }
  return route
}

function createAsyncRouterTree(routeList: any[]) {
  routeList.forEach(function (it) {
    delete it.children
  })
  // 定义map/
  const map: any = {}
  // 这里可以重构数据类型，放回字段值
  routeList.forEach(function (it) {
    map[it.id] = createRouteType(it)
    // map[it.id] = it
  })
  // 定义返回集合
  const val: RouteRecordRaw[] = []
  routeList.forEach(function (it) {
    const parent = map[it.pid]
    if (parent) {
      // 有数据说明不是顶级节点，将数据放到该 children 子节点下
      ;(parent.children || (parent.children = [])).push(it)
    } else {
      // 没有数据说明是顶级节点放到val中
      val.push(it)
    }
  })
  console.log(val)
  return val
}

export { useAsyncRoute }
