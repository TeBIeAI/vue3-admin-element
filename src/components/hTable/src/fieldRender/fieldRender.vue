<template>
  <div v-if="field.render === 'tag'"></div>
</template>

<script lang="ts" setup>
import type { TableColumn, TableRow } from '@/types/table'
import { TableColumnCtx } from 'element-plus/es/components/table/src/table-column/defaults'

interface Props {
  row: TableRow
  field: TableColumn
  column: TableColumnCtx<TableRow>
  index: any
}

const props = defineProps<Props>()

console.log(props)
</script>
