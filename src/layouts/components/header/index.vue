<template>
  <div class="app-header plr20">
    <el-row
      v-if="!getAppIsMobile && getAppNavMode === 'vertical'"
      class="h100 flex-center"
      :gutter="20"
    >
      <div class="mr20">
        <el-icon :size="28" @click="handleCollapsed">
          <Expand v-if="getAppMenuSetting.collapsed" />
          <Fold v-else />
        </el-icon>
      </div>
      <el-col :span="11"> 面包屑 </el-col>
      <el-col :span="10" class="t-r">
        <div>{{ userStore.userinfo.nickname }}</div>
      </el-col>
    </el-row>

    <div v-else-if="getAppIsMobile" class="flex flex-center flex-jc-sb h100">
      <el-icon :size="28" @click="handleCollapsed">
        <Expand v-if="getAppMenuSetting.collapsed" />
        <Fold v-else />
      </el-icon>
      <el-dropdown>
        <span class="el-dropdown-link">
          Dropdown List
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item disabled>Action 4</el-dropdown-item>
            <el-dropdown-item divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>

  <div v-if="getAppNavMode === 'horizontal' && !getAppIsMobile">
    <el-row>
      <el-col :span="18">
        <aside-menu></aside-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import AsideMenu from '@/layouts/components/aside/asideMenu.vue'
import { useProjectSetting } from '@/store/module/projectSetting'
import { useUserStore } from '@/store/module/userStore'
import { Fold, Expand, ArrowDown } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia'

const projectSettingStore = useProjectSetting()

const {
  getAppMenuSetting,
  getAppIsMobile,
  getAppNavMode,
  getAppHeaderSetting
} = storeToRefs(projectSettingStore)

const userStore = useUserStore()

const handleCollapsed = () => {
  projectSettingStore.setAppMenuCollapsed()
}
</script>

<style scoped lang="scss">
.app-header {
  background-color: v-bind('getAppHeaderSetting.bgColor');
  height: v-bind('getAppHeaderSetting.height + "px"');
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
}
</style>
