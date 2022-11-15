import { RouteMeta, RouteRecordRaw } from 'vue-router'

interface AppRouteMeta extends RouteMeta {
  title?: string
}

export type AppRouterRecordRaw = {
  meta?: AppRouteMeta
} & RouteRecordRaw
