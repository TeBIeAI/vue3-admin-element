<template>
  <div class="streamline-header">
    <Aside :backgroundColor="projectSettingStore.headerSetting.bgColor" />
    <NavMenu />
  </div>
</template>

<script lang="ts" setup>
import NavMenu from '../navMenu.vue'
import Aside from '@/layouts/components/aside'
import { useProjectSetting } from '@/store/modules/projectSetting'

const projectSettingStore = useProjectSetting()
</script>

<style scoped lang="scss">
.streamline-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: v-bind('projectSettingStore.headerSetting.height + "px"');
  padding: 0 10px 0 10px;
  background-color: v-bind('projectSettingStore.headerSetting.bgColor');
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
}
</style>
