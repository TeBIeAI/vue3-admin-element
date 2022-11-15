import { defineStore } from 'pinia'
import { setting } from '@/settings/designSetting'

const {
  appDarkTheme,
  appThemeColor,
  appMenuTheme,
  appMenuActiveTheme,
  appMenuTextColor,
  appActiveTextColor,
  appThemeList
} = setting

type DesignState = {
  [key in keyof typeof setting]: typeof setting[key]
}

const useDesignSetting = defineStore({
  id: 'design-setting',
  state: (): DesignState => {
    return {
      appDarkTheme,
      appThemeColor,
      appMenuTheme,
      appMenuActiveTheme,
      appMenuTextColor,
      appActiveTextColor,
      appThemeList
    }
  },
  getters: {
    getAppDarkTheme(): boolean {
      return this.appDarkTheme
    },
    getAppThemeColor(): string {
      return this.appThemeColor
    },
    getAppMenuTheme(): string {
      return this.appMenuTheme
    },
    getAppMenuActiveTheme(): string {
      return this.appMenuActiveTheme
    },
    getAppMenuTextColor(): string {
      return this.appMenuTextColor
    },
    getAppActiveTextColor(): string {
      return this.appActiveTextColor
    },
    getAppThemeList(): string[] {
      return this.appThemeList
    }
  },
  actions: {}
})
export { useDesignSetting }
