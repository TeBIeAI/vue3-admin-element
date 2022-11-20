import type { App } from 'vue'
import Icon from '@/components/icon/index'
import * as elIcons from '@element-plus/icons-vue'

/**
 * 获取资源完整地址
 * @param relativeUrl 资源相对地址
 * @param domain 指定域名
 */
export const fullUrl = (relativeUrl: string, domain = '') => {
  if (!relativeUrl) return domain

  const regUrl = new RegExp(/^http(s)?:\/\//)
  const regexImg = new RegExp(/^((?:[a-z]+:)?\/\/|data:image\/)(.*)/i)
  if (!domain || regUrl.test(relativeUrl) || regexImg.test(relativeUrl)) {
    return relativeUrl
  }
  return domain + relativeUrl
}

export function registerIcon(app: App) {
  app.component('Icon', Icon)

  const icons = elIcons as any
  for (const i in icons) {
    app.component(`el-icon-${icons[i].name}`, icons[i])
  }
}
