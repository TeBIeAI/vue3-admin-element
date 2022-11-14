<template>
  <div class="common-layout">
    <ElContainer>
      <ElAside width="200px">Aside</ElAside>
      <ElContainer>
        <ElHeader>Header</ElHeader>
        <ElMain>
          Main
          <RouterView></RouterView>
        </ElMain>
        <ElFooter>Footer</ElFooter>
      </ElContainer>
    </ElContainer>
  </div>
</template>

<script setup lang="ts"></script>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'LayoutWrap',
})
</script>

<style scoped></style>
