<template>
  <el-breadcrumb eparator="/">
    <el-breadcrumb-item
      v-for="item in route.matched"
      :key="(item as RouteLocationMatched).name"
      >{{ (item as RouteLocationMatched).meta.title }}</el-breadcrumb-item
    >
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import type { RouteLocationMatched } from 'vue-router'
const route = useRoute()
</script>

<style scoped></style>
