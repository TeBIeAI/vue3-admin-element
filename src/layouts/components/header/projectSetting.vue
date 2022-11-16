<template>
  <el-drawer
    v-model="projectSetting.appSetting.showDrawer"
    :size="280"
    :show-close="false"
  >
    <el-divider border-style="dashed">全局</el-divider>
    <div class="flex flex-center">
      <div>暗黑模式：</div>
      <HSwitch @click="toggleDark()" />
    </div>

    <!-- 系统主题 -->
    <el-divider border-style="dashed">系统主题</el-divider>
    <div>
      <template v-for="color in appThemeList" :key="color">
        <span
          class="app-them-item"
          :style="{ 'background-color': color }"
          @click="designSettingStore.setAppThemeColor(color)"
        >
          <el-icon
            v-if="designSettingStore.appThemeColor === color"
            color="#fff"
            :size="20"
            ><Check
          /></el-icon>
        </span>
      </template>
    </div>

    <!-- 导航栏模式 -->
    <el-divider border-style="dashed">布局方式</el-divider>
    <div class="flex flex-jc-sa">
      <div>
        <img
          class="theme-svg"
          @click="projectSetting.appLayoutMode = 'classic'"
          src="~@/assets/images/theme/nav-theme-dark.svg"
          alt="左侧菜单布局"
        />
        <div class="t-c">
          <el-badge
            v-show="projectSetting.appLayoutMode === 'classic'"
            is-dot
            class="item"
          >
          </el-badge>
        </div>
      </div>
      <div>
        <img
          class="theme-svg"
          @click="projectSetting.appLayoutMode = 'streamline'"
          src="~@/assets/images/theme/nav-horizontal.svg"
          alt=""
        />
        <div class="t-c">
          <el-badge
            v-show="projectSetting.appLayoutMode === 'streamline'"
            is-dot
            class="item"
          >
          </el-badge>
        </div>
      </div>
    </div>
  </el-drawer>
</template>

<script lang="ts" setup>
import HSwitch from '@/components/hSwitch/index.vue'
import { useDesignSetting } from '@/store/modules/designSetting'
import { ref } from 'vue'
import { useProjectSetting } from '@/store/modules/projectSetting'
import { Check } from '@element-plus/icons-vue'
import { toggleDark } from '@/hooks/useDark'

const isDrawer = ref()

const openDrawer = () => {
  isDrawer.value = !isDrawer.value
}

const projectSetting = useProjectSetting()

const designSettingStore = useDesignSetting()
const { appThemeList } = designSettingStore

defineExpose({ openDrawer })
</script>
<style scoped>
.app-them-item {
  display: inline-block;
  width: 20px;
  height: 20px;
}
.theme-svg {
  width: 80px;
}
</style>
