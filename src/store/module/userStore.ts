import { defineStore } from 'pinia'

const useUserStore = defineStore({
  id: 'user-store',
  state: () => {
    return {
      name: '韩超',
    }
  },
})

export { useUserStore }
