import { defineStore } from 'pinia'
import projectSetting from '@/settings/projectSetting'

type ProjectSettingState = {
  [key in keyof typeof projectSetting]: typeof projectSetting[key]
}

const useProjectSetting = defineStore({
  id: 'project-setting',
  state: (): ProjectSettingState => {
    return {
      ...projectSetting
    }
  },
  getters: {
    getAppNavMode(): string {
      return this.navMode
    },
    getAppIsMobile(): boolean {
      return this.isMobile
    },
    getAppMenuSetting(): ProjectSettingState['menuSetting'] {
      return this.menuSetting
    },
    getAppIsPageAnimate(): boolean {
      return this.isPageAnimate
    },
    getAppPageAnimateType(): string {
      return this.pageAnimateType
    },
    getAppHeaderSetting(): ProjectSettingState['headerSetting'] {
      return this.headerSetting
    }
  },
  actions: {
    setAppIsMobile(bool: boolean) {
      this.isMobile = bool
    },
    setAppMenuCollapsed() {
      this.menuSetting.collapsed = !this.menuSetting.collapsed
    }
  }
})
export { useProjectSetting }
