<template>
  <div>
    <TableHeader :name="tableName" />
    <HTable :name="tableName" />
  </div>
</template>

<script setup lang="ts">
import { admin_user } from '@/api/apiController'
import HTable from '@cps/hTable'
import { createTableContext } from '@/hooks/useTableContext'
import TableClass from '@/utils/table'
import { defineComponent } from 'vue'
import { defaultOptButtons } from '@cps/hTable/helper'
import TableHeader from '@cps/hTable/tableHeader'
import baseTableApi from '@/api/baseTableApi'

// const data = ref<any[]>([])

// // const getList = async () => {
// //   const res = await getUserList()
// //   data.value = res.data.data
// // }

// // getList()

const tableName = 'xiaohan'

const tableClass = new TableClass(new baseTableApi(admin_user), {
  column: [
    {
      label: 'ID',
      prop: 'id',
      width: 100,
      operator: false
    },
    {
      label: '姓名',
      prop: 'name'
    },
    {
      label: '头像',
      prop: 'avatar',
      render: 'image',
      operator: false
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
      prop: 'createTime',
      operator: 'date-range'
    },
    {
      label: '上次登录时间',
      prop: 'lastlogin',
      operator: 'date'
    },
    {
      label: '操作',
      render: 'buttons',
      operator: false,
      width: 100,
      buttons: defaultOptButtons()
    }
  ],
  filter: {
    name: '汉朝'
  }
})

tableClass.getIndex()

createTableContext(tableName, tableClass)
</script>

<script lang="ts">
export default defineComponent({
  name: 'rolesList'
})
</script>

<style scoped></style>
