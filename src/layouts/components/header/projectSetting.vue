<template>
  <el-drawer v-model="isDrawer" :size="250" :show-close="false">
    <el-divider>主题</el-divider>
    <el-switch
      v-model="designSettingStore.appDarkTheme"
      @change="useDarkCb()"
    ></el-switch>

    <!-- 系统主题 -->
    <el-divider>系统主题</el-divider>
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
    <el-divider>主题</el-divider>
    <div>
      <div>
        <el-button @click="projectSetting.setAppNavMode('vertical')"
          >左侧菜单模式</el-button
        >
        <el-badge
          v-show="projectSetting.getAppNavMode === 'vertical'"
          is-dot
          class="item"
        >
        </el-badge>
      </div>
      <div>
        <el-button @click="projectSetting.setAppNavMode('horizontal')"
          >顶部菜单模式</el-button
        >
        <el-badge
          v-show="projectSetting.getAppNavMode === 'horizontal'"
          is-dot
          class="item"
        >
        </el-badge>
      </div>
    </div>
  </el-drawer>
</template>

<script lang="ts" setup>
import { useDesignSetting } from '@/store/modules/designSetting'
import { ref } from 'vue'
import { useProjectSetting } from '@/store/modules/projectSetting'
import { Check } from '@element-plus/icons-vue'
import { useDarkCb } from '@/hooks/useDark'

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
</style>
