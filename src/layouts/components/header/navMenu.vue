<template>
  <div :size="10" class="nav-menus">
    <div class="nav-menu-item">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <el-icon :size="20" @click="visible = true"><Delete /></el-icon>
        </span>

        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>清理系统缓存</el-dropdown-item>
            <el-dropdown-item>清理浏览器缓存</el-dropdown-item>
            <el-dropdown-item divided>清理所有缓存</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div class="nav-menu-item">
      <div class="user-avatar">
        <img src="@/assets/images/theme/avatar.png" alt="" />
      </div>
      {{ userStore.userinfo.nickname }}
    </div>
    <div class="nav-menu-item">
      <el-icon :size="20" @click="showSettingHandle">
        <Setting />
      </el-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Setting, Delete } from '@element-plus/icons-vue'
import { useUserStore } from '@/store/modules/userStore'
import { useProjectSetting } from '@/store/modules/projectSetting'
import { ref } from 'vue'
const userStore = useUserStore()
const projectSettingStore = useProjectSetting()

const visible = ref<boolean>(false)

const showSettingHandle = () => {
  projectSettingStore.appSetting.showDrawer = true
}
</script>

<style scoped lang="scss">
.nav-menus {
  display: flex;
  align-items: center;
  height: 50px;
  .nav-menu-item {
    height: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0 8px;

    .user-avatar {
      width: 25px;
      height: 25px;
      overflow: hidden;
      border-radius: 50%;
      margin-right: 5px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    &:hover {
      .el-icon {
        animation: twinkle 0.3s ease-in-out;
      }
    }
  }
  .nav-menu-item:hover {
    background-color: #ddd;
  }
}

@keyframes twinkle {
  0% {
    transform: scale(0);
  }
  80% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
