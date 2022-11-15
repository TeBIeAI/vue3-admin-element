<template>
  <div v-if="getAppNavMode === 'horizontal' && !getAppIsMobile">
    <el-row>
      <el-col :span="18">
        <aside-menu></aside-menu>
      </el-col>
    </el-row>
  </div>
  <div v-else class="app-header plr20">
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
      <el-col :span="11">
        <BreadCrumb></BreadCrumb>
      </el-col>
      <el-col :span="10">
        <div class="flex flex-jc-end">
          <div>
            <el-icon
              class="mr20"
              :size="20"
              @click="projectSettingRef.openDrawer()"
            >
              <Setting />
            </el-icon>
          </div>
          <div>{{ userStore.userinfo.nickname }}</div>
        </div>
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
  <project-setting ref="projectSettingRef"></project-setting>
</template>

<script setup lang="ts">
import AsideMenu from '@/layouts/components/aside/asideMenu.vue'
import BreadCrumb from './breadCrumb.vue'
import ProjectSetting from './projectSetting.vue'
import { useProjectSetting } from '@/store/modules/projectSetting'
import { useUserStore } from '@/store/modules/userStore'
import { Fold, Expand, ArrowDown, Setting } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

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
const projectSettingRef = ref()
</script>

<style scoped lang="scss">
.app-header {
  background-color: v-bind('getAppHeaderSetting.bgColor');
  height: v-bind('getAppHeaderSetting.height + "px"');
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
}
</style>
