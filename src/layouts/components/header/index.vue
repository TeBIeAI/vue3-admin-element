<template>
  <el-header class="layout-header">
    <component :is="`${projectSettingStore.appLayoutMode}Nav`"></component>
  </el-header>
  <project-setting></project-setting>
</template>

<script setup lang="ts">
import ClassicNav from './components/classicNav.vue'
import StreamlineNav from './components/streamline.vue'
import { useProjectSetting } from '@/store/modules/projectSetting'
import ProjectSetting from './projectSetting.vue'

const projectSettingStore = useProjectSetting()
</script>

<script lang="ts">
export default {
  components: { ClassicNav, StreamlineNav }
}
</script>

<style scoped lang="scss">
.layout-header {
  height: auto;
  padding: 0;
}
</style>
