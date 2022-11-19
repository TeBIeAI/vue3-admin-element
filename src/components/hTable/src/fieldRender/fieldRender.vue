<template>
  <div v-if="field.render === 'tag' && fieldValue !== ''">
    <el-tag
      :type="getValueType(fieldValue, field.custom)"
      :effect="field.effect ?? 'light'"
      :size="field.size ?? 'small'"
    >
      {{ field.replaceValue ? field.replaceValue[fieldValue] : fieldValue }}
    </el-tag>
  </div>
  <el-switch
    v-if="field.render === 'switch'"
    :model-value="fieldValue.toString()"
    active-value="1"
    inactive-value="0"
  >
  </el-switch>
  <div v-if="field.render === 'image' && fieldValue !== ''">
    <el-image
      :hide-on-click-modal="true"
      :preview-teleported="true"
      :preview-src-list="[fullUrl(fieldValue)]"
      :src="fullUrl(fieldValue)"
      lazy
    ></el-image>
  </div>
  <div
    v-if="
      field.render === 'buttons' &&
      field.buttons &&
      Array.isArray(field.buttons)
    "
  >
    <template v-for="(item, index) in field.buttons" :key="index">
      <template v-if="item.display ? item.display(row, field) : true">
        <el-tooltip
          v-if="item.renderType === 'tipButton'"
          :content="item.title"
        >
          <el-button
            @click="item.click"
            :disabled="item.disabled"
            :icon="item.icon"
            size="small"
            :type="item.type"
          >
            <div v-if="item.text">{{ item.text }}</div>
          </el-button>
        </el-tooltip>
      </template>
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { TableColumn, TableRow } from '@/types/table'
import { TableColumnCtx } from 'element-plus/es/components/table/src/table-column/defaults'
import { ref } from 'vue'
import type { Ref } from 'vue'
import type { TagProps } from 'element-plus'
import { fullUrl } from '@/utils/common'

interface Props {
  row: TableRow
  field: TableColumn
  column: TableColumnCtx<TableRow>
  index: any
}

const props = defineProps<Props>()

const fieldName: Ref<string | undefined> = ref(props.field.prop)
const fieldValue = ref(fieldName.value ? props.row[fieldName.value] : '')

if (fieldName.value && fieldName.value.indexOf?.('.') > -1) {
  const arrs = fieldName.value.split('.')
  let val = ref(props.row[arrs[0]])
  arrs.shift()
  arrs.map((item) => {
    val.value = val.value && val.value !== '' ? val.value[item] ?? '' : ''
  })
  fieldValue.value = val.value
}

const getValueType = (value: keyof any, custom: any): TagProps['type'] => {
  return custom ? custom[value] : ''
}
</script>
