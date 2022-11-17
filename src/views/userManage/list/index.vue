<template>
  <HTable :name="tableName" />
</template>

<script setup lang="ts">
import HTable from '@/components/hTable'
import { createTableContext } from '@/hooks/useTableContext'
import TableClass from '@/utils/table'

const tableName = 'xiaohan'

const data = [
  {
    name: '张三',
    age: '18',
    sex: 1
  },
  {
    name: '李四',
    age: 22,
    sex: 2
  }
]

const tableClass = new TableClass({
  data,
  column: [
    {
      type: 'index',
      label: '序号',
      width: 100
    },
    {
      label: '姓名',
      prop: 'name'
    },
    {
      label: '年龄',
      prop: 'age'
    },
    {
      label: '性别',
      prop: 'sex',
      render: 'tag'
    }
  ]
})

createTableContext(tableName, tableClass)
</script>

<style scoped></style>
