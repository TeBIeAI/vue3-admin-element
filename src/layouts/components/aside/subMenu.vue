<template>
  <el-sub-menu
    v-if="menus && menus.children && menus.children.length"
    :index="`${parentPath}/${menus.path}`"
  >
    <template #title>
      <el-icon><Location /></el-icon>
      <span>{{ menus.meta?.title }}</span>
    </template>
    <SubMenu
      v-for="menuChild in menus.children"
      :key="menuChild.name"
      :menus="menuChild"
      :parent-path="menus.path"
    ></SubMenu>
  </el-sub-menu>
  <el-menu-item v-else :index="`${parentPath}/${menus.path}`">
    <span>{{ menus.meta?.title }}</span>
  </el-menu-item>
</template>

<script lang="ts" setup name="SubMenu">
import { AppRouterRecordRaw } from '@/router/types'
import { Location } from '@element-plus/icons-vue'

interface Props {
  menus: AppRouterRecordRaw
  parentPath: string
}

withDefaults(defineProps<Props>(), {})
</script>
