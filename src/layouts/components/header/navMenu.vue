<template>
  <div>
    <div class="flex flex-jc-end">
      <div>
        <el-icon class="mr20" :size="20" @click="showSettingHandle">
          <Setting />
        </el-icon>
      </div>
      <div>{{ userStore.userinfo.nickname }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Setting } from '@element-plus/icons-vue'
import { useUserStore } from '@/store/modules/userStore'
import { useProjectSetting } from '@/store/modules/projectSetting'
const userStore = useUserStore()
const projectSettingStore = useProjectSetting()

const showSettingHandle = () => {
  projectSettingStore.appSetting.showDrawer = true
}
</script>

<style scoped></style>
