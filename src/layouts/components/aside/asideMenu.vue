<template>
  <ElMenu v-bind="getMenuAttrs">
    <SubMenu
      v-for="menu in menus"
      :key="menu.name"
      parent-path=""
      :menus="menu"
    ></SubMenu>
  </ElMenu>
</template>

<script lang="ts" setup>
import { useAsyncRoute } from '@/store/modules/asyncRoute'
// import { useDesignSetting } from '@/store/modules/designSetting'
import { useProjectSetting } from '@/store/modules/projectSetting'
import { AppRouterRecordRaw } from '@/router/types'
import { computed, onMounted, ref } from 'vue'
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
const route = useRoute()
const currentOpenKey = ref<string>()

const asyncRouterStore = useAsyncRoute()
const projectSettingStore = useProjectSetting()

const getAppLayoutMode = computed(() => {
  return projectSettingStore.appLayoutMode === 'classic'
    ? 'vertical'
    : 'horizontal'
})

const collapse = computed(
  () => props.collapsed && projectSettingStore.getAppMenuSetting.collapsed
)

const getMenuAttrs = computed(() => {
  return {
    uniqueOpened: true,
    collapse: collapse.value,
    router: true,
    mode: getAppLayoutMode.value,
    defaultActive: currentOpenKey.value
  }
})

menus.value = asyncRouterStore.getAsyncRoutes

const createActiveMenu = (route: RouteLocationNormalizedLoaded) => {
  currentOpenKey.value = route.path
}

onMounted(() => {
  createActiveMenu(route)
})
</script>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouteLocationNormalizedLoaded, useRoute } from 'vue-router'
export default defineComponent({
  name: 'AsideMenu'
})
</script>
<style scoped lang="scss">
.el-menu {
  height: 100%;
  border-right: none;
  width: v-bind(
    'projectSettingStore.appLayoutMode === "streamline" ? "50%" : "auto"'
  );
  border-bottom: 0;
  // box-shadow: 1px 1px 4px rgb(0 21 41 / 8%);
}
</style>
