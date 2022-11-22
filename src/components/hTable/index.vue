<template>
  <el-table :data="table.table.data" v-loading="table.table.loading">
    <template v-for="item in table.table.column" :key="item.prop">
      <Column v-if="item.show !== false" :attrs="item">
        <template v-if="item.render" #default="scope">
          <FieldRender
            :name="name"
            :field="item"
            :row="scope.row"
            :column="scope.column"
            :index="scope.$index"
          ></FieldRender>
        </template>
      </Column>
    </template>
  </el-table>
  <div v-if="pagination" class="h-table-pagination">
    <el-pagination
      layout="total, sizes, ->, prev, pager, next, jumper"
      :total="table.table.total"
      :currentPage="table.table.filter?.currentPage"
      :pageSize="table.table.filter?.pageSize"
      :pageSizes="pageSizes"
      @current-change="onTableCurrentChange"
      @size-change="onTableSizeChange"
      background
    >
    </el-pagination>
  </div>
</template>

<script setup lang="ts">
import { useTableContext } from '@/hooks/useTableContext'
import Column from '@cps/hTable/column'
import FieldRender from '@cps/hTable/fieldRender'
import { computed } from 'vue'

interface Props {
  name: string
  pagination?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  name: 'h-table',
  pagination: true
})

const table = useTableContext(props.name)

console.log(table)

const pageSizes = computed(() => {
  let defaultPageSizes = [10, 20, 50]
  if (table.table.filter?.pageSizes) {
    if (!defaultPageSizes.includes(table.table.filter!.pageSizes)) {
      defaultPageSizes.push(table.table.filter!.pageSizes)
    }
  }

  return defaultPageSizes
})

const onTableCurrentChange = (size: number) => {
  table.onTaleAction('table-current-page-change', { currentPage: size })
}

const onTableSizeChange = (size: number) => {
  table.onTaleAction('table-sizes-change', { pageSizes: size })
}
</script>

<style scoped lang="scss">
.h-table-pagination {
  background-color: #fff;
  padding: 15px;
}
</style>
