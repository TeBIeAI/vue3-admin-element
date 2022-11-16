<template>
  <component :is="projectSettingStore.appLayoutMode"></component>
</template>

<script lang="ts" setup>
import { useProjectSetting } from '@/store/modules/projectSetting'
import Classic from './container/classic/index.vue'
import Streamline from './container/streamline/index.vue'

const projectSettingStore = useProjectSetting()
</script>

<script lang="ts">
export default {
  components: {
    Classic,
    Streamline
  }
}
</script>
