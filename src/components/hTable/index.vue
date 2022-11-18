<template>
  <el-table :data="table.table.data" v-loading="table.table.loading">
    <template v-for="item in table.table.column" :key="item.prop">
      <Column v-if="item.show !== false" :attrs="item">
        <template v-if="item.render" #default="scope">
          <FieldRender
            :field="item"
            :row="scope.row"
            :column="scope.column"
            :index="scope.$index"
          ></FieldRender>
        </template>
      </Column>
    </template>
  </el-table>
</template>

<script setup lang="ts">
import { useTableContext } from '@/hooks/useTableContext'
import { watch } from 'vue'
import Column from './src/column'
import { FieldRender } from './src/fieldRender/index'

const props = withDefaults(defineProps<{ name: string }>(), {
  name: 'h-table'
})

const table = useTableContext(props.name)

watch(
  () => table.table.data,
  () => {
    table.table.loading = false
  }
)
</script>

<style scoped></style>
