<template>
  <component :is="projectSettingStore.appLayoutMode"></component>
</template>

<script lang="ts" setup>
import { useProjectSetting } from '@/store/modules/projectSetting'
import Classic from './container/classic/index.vue'
import Streamline from './container/streamline/index.vue'
import { useEventListener } from '@vueuse/core'
import { onMounted } from 'vue'

const projectSettingStore = useProjectSetting()
const { mobileWidth } = projectSettingStore.getAppMenuSetting

const checkIsMoble = () => {
  if (document.body.clientWidth <= mobileWidth) {
    if (!projectSettingStore.getAppIsMobile) {
      projectSettingStore.setAppIsMobile(true)
    }
  } else {
    if (projectSettingStore.getAppIsMobile) {
      projectSettingStore.setAppIsMobile(false)
    }
  }
}

onMounted(() => {
  useEventListener(window, 'resize', checkIsMoble)
})
</script>

<script lang="ts">
export default {
  components: {
    Classic,
    Streamline
  }
}
</script>
