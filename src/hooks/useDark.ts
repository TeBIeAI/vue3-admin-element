import { useDark, useToggle } from '@vueuse/core'

let isDark: unknown
let toggleDark: any
export function useDarkCb() {
  if (isDark) {
    toggleDark()
  } else {
    isDark = useDark()
    toggleDark = useToggle(isDark)
  }
}
