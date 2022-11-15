<template>
  <ElMenu
    unique-opened
    router
    :collapse="collapse"
    :mode="projectSettingStore.getAppNavMode"
    :background-color="designSettingStore.getAppMenuTheme"
    :text-color="designSettingStore.getAppMenuTextColor"
    :active-text-color="designSettingStore.getAppActiveTextColor"
  >
    <SubMenu
      v-for="menu in menus"
      :key="menu.name"
      parent-path=""
      :menus="menu"
    ></SubMenu>
  </ElMenu>
</template>

<script lang="ts" setup>
import { useAsyncRoute } from '@/store/module/asyncRoute'
import { useDesignSetting } from '@/store/module/designSetting'
import { useProjectSetting } from '@/store/module/projectSetting'
import { AppRouterRecordRaw } from '@/router/types'
import { computed, ref } from 'vue'
import SubMenu from './subMenu.vue'
const props = withDefaults(
  defineProps<{
    collapsed?: boolean
  }>(),
  {
    collapsed: true
  }
)

const menus = ref<AppRouterRecordRaw[]>([])

const asyncRouterStore = useAsyncRoute()
const designSettingStore = useDesignSetting()
const projectSettingStore = useProjectSetting()
const collapse = computed(
  () => props.collapsed && projectSettingStore.getAppMenuSetting.collapsed
)
menus.value = asyncRouterStore.getAsyncRoutes
</script>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'AsideMenu'
})
</script>
<style scoped lang="scss">
.el-menu {
  height: 100%;
  border-right: none;
}
</style>
