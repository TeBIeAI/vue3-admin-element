<template>
  <el-aside
    v-if="!getAppIsMobile && getAppNavMode === 'vertical'"
    :width="`${getMunuWidth}px`"
  >
    <el-scrollbar>
      <aside-menu></aside-menu>
    </el-scrollbar>
  </el-aside>
  <el-drawer
    v-else
    direction="ltr"
    :show-close="false"
    :size="menuSetting.menuWidth"
    :with-header="false"
    v-model="showDrawer"
  >
    <aside-menu :collapsed="false"></aside-menu>
  </el-drawer>
</template>

<script lang="ts" setup>
import { useProjectSetting } from '@/store/modules/projectSetting'
import { computed, unref } from 'vue'
import AsideMenu from './asideMenu.vue'
import { storeToRefs } from 'pinia'

const projectSettingStore = useProjectSetting()
const { getAppIsMobile, menuSetting, getAppNavMode } =
  storeToRefs(projectSettingStore)
const designSettingStore = useDesignSetting()

const getMunuWidth = computed(() => {
  return unref(menuSetting).collapsed
    ? unref(menuSetting).minMenuWidth
    : unref(menuSetting).menuWidth
})

const showDrawer = computed({
  get: () => !projectSettingStore.menuSetting.collapsed,
  set: () => projectSettingStore.setAppMenuCollapsed()
})
</script>

<script lang="ts">
import { defineComponent } from 'vue'
import { useDesignSetting } from '@/store/modules/designSetting'
export default defineComponent({
  name: 'LayoutAside'
})
</script>
<style scoped lang="scss">
.el-aside {
  height: 100vh;
  transition: all 0.3s;
  background-color: v-bind('designSettingStore.getAppMenuTheme');
}
</style>
