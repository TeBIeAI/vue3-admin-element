<template>
  <el-aside
    v-if="!getAppIsMobile && projectSettingStore.appLayoutMode === 'classic'"
    :width="`${getMunuWidth}px`"
  >
    <el-scrollbar>
      <aside-menu></aside-menu>
    </el-scrollbar>
  </el-aside>
  <aside-menu
    v-else-if="projectSettingStore.appLayoutMode === 'streamline'"
  ></aside-menu>
  <!-- <el-drawer
    v-else
    direction="ltr"
    :show-close="false"
    :size="menuSetting.menuWidth"
    :with-header="false"
    v-model="showDrawer"
  >
    <aside-menu :collapsed="false"></aside-menu>
  </el-drawer> -->
</template>

<script lang="ts" setup>
import { useProjectSetting } from '@/store/modules/projectSetting'
// import { useDesignSetting } from '@/store/modules/designSetting'
import { computed, unref } from 'vue'
import AsideMenu from './asideMenu.vue'
import { storeToRefs } from 'pinia'

const projectSettingStore = useProjectSetting()
const { getAppIsMobile, menuSetting } = storeToRefs(projectSettingStore)
// const designSettingStore = useDesignSetting()

const getMunuWidth = computed(() => {
  return unref(menuSetting).collapsed
    ? unref(menuSetting).minMenuWidth
    : unref(menuSetting).menuWidth
})

// const showDrawer = computed({
//   get: () => !projectSettingStore.menuSetting.collapsed,
//   set: () => projectSettingStore.setAppMenuCollapsed()
// })
//
</script>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'LayoutAside'
})
</script>
<style scoped lang="scss">
.el-aside {
  transition: width 0.3s;
  box-shadow: 1px 1px 4px rgb(0 21 41 / 8%);
}
</style>
