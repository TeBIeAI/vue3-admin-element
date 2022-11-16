<template>
  <el-container class="layout-container">
    <Aside />
    <el-container class="content-wrap">
      <Header />
      <Main />
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Aside from '@/layouts/components/aside'
import Header from '@/layouts/components/header'
import Main from '@/layouts/components/main'
</script>

<style scoped lang="scss">
.layout-container {
  width: 100%;
  height: 100%;

  .content-wrap {
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
}
</style>
