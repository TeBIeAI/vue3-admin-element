import { useDark, useToggle } from '@vueuse/core'

// let isDark: unknown
// let toggleDark: any

// const
const isDark = useDark()
const toggleDark = useToggle(isDark)

export { toggleDark }

// export function useDarkCb() {
//   debugger
//   if (isDark) {
//     toggleDark()
//   } else {
//     isDark = useDark()
//     toggleDark = useToggle(isDark)
//   }
// }
