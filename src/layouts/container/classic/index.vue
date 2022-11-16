<template>
  <el-container class="layout-container">
    <Aside />
    <el-container class="content-wrap">
      <Header />
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Aside from '@/layouts/components/aside'
import Header from '@/layouts/components/header'
import { onMounted, onUnmounted } from 'vue'
import { useProjectSetting } from '@/store/modules/projectSetting'

const projectSettingStore = useProjectSetting()
const { mobileWidth } = projectSettingStore.getAppMenuSetting

const checkIsMoble = () => {
  if (document.body.clientWidth <= mobileWidth) {
    if (!projectSettingStore.getAppIsMobile) {
      projectSettingStore.setAppIsMobile(true)
    }
  } else {
    if (projectSettingStore.getAppIsMobile) {
      projectSettingStore.setAppIsMobile(false)
    }
  }
}

onMounted(() => {
  checkIsMoble()
  window.addEventListener('resize', checkIsMoble)
})

onUnmounted(() => window.removeEventListener('resize', checkIsMoble))
</script>

<style scoped lang="scss">
.layout-container {
  width: 100%;
  height: 100%;

  .content-wrap {
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0 20px;
  }
}
</style>
