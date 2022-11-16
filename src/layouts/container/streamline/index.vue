<template>
  <el-container class="layout-container">
    <el-container class="content-wrapper">
      <Header />
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Header from '@/layouts/components/header'
</script>

<style scoped lang="scss">
.layout-container {
  width: 100%;
  height: 100%;

  .content-wrapper {
    flex-direction: column;
    width: 100%;
  }
}
</style>
