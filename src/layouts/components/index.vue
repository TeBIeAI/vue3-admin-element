<template>
  <div class="common-layout">
    <ElContainer>
      <Aside></Aside>
      <ElContainer>
        <ElHeader>
          <Header></Header>
        </ElHeader>
        <ElMain>
          Main
          <RouterView></RouterView>
        </ElMain>
        <ElFooter>Footer</ElFooter>
      </ElContainer>
    </ElContainer>
  </div>
</template>

<script setup lang="ts">
import Aside from './aside'
import Header from './header'
import { onMounted } from 'vue'
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
</script>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'LayoutWrap'
})
</script>

<style scoped lang="scss">
.el-footer {
  background-color: bisque;
}
:deep(.el-drawer .el-drawer__body) {
  padding: 0 !important;
}
</style>
