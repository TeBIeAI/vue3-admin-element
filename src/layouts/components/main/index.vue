<template>
  <el-main>
    <el-scrollbar>
      <router-view v-slot="{ Component }">
        <div class="content-wrap">
          <transition name="side-right" mode="out-in">
            <keep-alive :include="asyncRouteStore.keepAliveComponents">
              <component :is="Component" />
            </keep-alive>
          </transition>
        </div>
      </router-view>
    </el-scrollbar>
  </el-main>
</template>

<script setup lang="ts">
import { useAsyncRoute } from '@/store/modules/asyncRoute'

const asyncRouteStore = useAsyncRoute()
</script>

<style scoped lang="scss">
/* 进入之前和的样式 */
.side-right-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}
/* 离开后 */
.side-right-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
/* 离开和过程中的样式 */
.side-right-enter-active,
.side-right-leave-active {
  /* 添加过渡动画 */
  transition: all 0.3s ease;
}
/* 进入之后和离开之前的样式 */
.side-right-enter-to {
}
.side-right-leave-from {
}

.el-main {
  padding: 0;
}

.content-wrap {
  width: 100%;
  padding: 20px;
}
</style>
