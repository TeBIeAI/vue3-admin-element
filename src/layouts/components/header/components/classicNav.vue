<template>
  <div class="classic-header">
    <div class="mr20">
      <el-icon :size="28" @click="handleCollapsed">
        <Expand v-if="projectSettingStore.menuSetting.collapsed" />
        <Fold v-else />
      </el-icon>
    </div>
    <BreadCrumb
      v-if="!projectSettingStore.isMobile"
      class="header-breadcrumb"
    ></BreadCrumb>

    <NavMenu />
  </div>
</template>

<script lang="ts" setup>
import { Fold, Expand } from '@element-plus/icons-vue'
import BreadCrumb from '@/layouts/components/header/breadCrumb.vue'
import NavMenu from '../navMenu.vue'

import { useProjectSetting } from '@/store/modules/projectSetting'

const projectSettingStore = useProjectSetting()

const handleCollapsed = () => {
  projectSettingStore.setAppMenuCollapsed()
}
</script>

<style scoped lang="scss">
.classic-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: v-bind('projectSettingStore.headerSetting.height + "px"');
  padding: 0 40px 0 20px;
  background-color: v-bind('projectSettingStore.headerSetting.bgColor');
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);

  .header-breadcrumb {
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
