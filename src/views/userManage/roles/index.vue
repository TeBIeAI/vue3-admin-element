<template>
  <HTable :name="tableName" />
</template>

<script setup lang="ts">
import { getUserList } from '@/api/common'
import HTable from '@/components/hTable'
import { createTableContext } from '@/hooks/useTableContext'
import TableClass from '@/utils/table'
import { ref } from 'vue'

const data = ref<any[]>([])

const getList = async () => {
  const res = await getUserList()
  data.value = res.data.data
}

getList()

const tableName = 'xiaohan'

const tableClass = new TableClass({
  data,
  column: [
    {
      type: 'index',
      label: 'roles',
      width: 100
    },
    {
      label: 'ID',
      prop: 'id',
      width: 100
    },
    {
      label: '姓名',
      prop: 'name'
    },
    {
      label: '头像',
      prop: 'avatar',
      render: 'image'
    },
    {
      label: '性别',
      prop: 'sex',
      render: 'tag',
      effect: 'dark',
      replaceValue: {
        1: '男',
        2: '女'
      },
      custom: {
        1: 'success',
        2: 'danger'
      }
    },
    {
      label: '网名',
      prop: 'nickname'
    },
    {
      label: '状态',
      prop: 'status',
      render: 'switch'
    },
    {
      label: '电话',
      prop: 'mobile_phone'
    },

    {
      label: '邮箱',
      prop: 'email'
    },
    {
      label: '地址',
      prop: 'address'
    },
    {
      label: '注册时间',
      prop: 'createTime'
    }
  ]
})

createTableContext(tableName, tableClass)
</script>

<style scoped></style>
