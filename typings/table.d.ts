import HTable from '@/components/hTable'
import type { ButtonType, ElTableColumn, TagProps } from 'element-plus'
import type { Component } from 'vue'

declare global {
  interface HTable {
    ref?: typeof HTable
    // 表格数据
    data: Record<string, any>
    // 表格列
    column: TableColumn[]
    loading?: boolean
    // 显示公共搜索
    showComSearch?: boolean
  }

  interface OptButton {
    // tipButton 提示框按钮 confirmButton 弹出框带确认button
    renderType: 'tipButton' | 'confirmButton'
    // 按钮tooltip需要提示的
    title?: string
    // 按钮文字
    text?: string
    icon: Component
    type: ButtonType
    popconfirmOption?: {
      confirmButtonText?: string
      cancelButtonText?: string
      title: string
      confirmButtonType?: ButtonType
    }
    click?: (row: TableRow, column: TableColumn) => void
    display?: (row: TableRow, column: TableColumn) => boolean
    disabled?: (row: TableRow, column: TableColumn) => boolean
  }

  type optButtonType = 'edit' | 'delete'

  type OptHeaderButtons =
    | 'refresh'
    | 'add'
    | 'edit'
    | 'delete'
    | 'column-show-change'

  interface TableColumn extends ElTableColumn {
    size?: TagProps['size']
    show?: boolean
    render?: 'icon' | 'tag' | 'image' | 'images' | 'buttons' | 'switch'
    // 需要替换的值 例如 {1: '男'， 2：'女'}
    replaceValue?: any
    // 自定义数据:比如渲染为Tag时,可以指定不同值时的Tag的Type属性 { open: 'success', close: 'info' }
    custom?: any
    effect?: TagProps['effect']
    buttons?: OptButton[]
  }

  interface TableRow extends AnyObj {
    children?: TableRow[]
  }
}

interface ElTableColumn {
  type?: 'selection' | 'index' | 'expand'
  index?: number | Function
  label?: string
  'column-key'?: string
  prop?: string
  width?: string | number
  'min-width'?: string | number
  fixed?: string | boolean
  'render-header'?: Function
  sortable?: string | boolean
  'sort-method'?: Function
  'sort-by'?: Function
  'sort-orders'?: string[] | null[]
  resizable?: boolean
  formatter?: Function
  'show-overflow-tooltip'?: boolean
  align?: 'left' | 'center' | 'right'
  'header-align'?: 'left' | 'center' | 'right'
  'class-name'?: string
  'label-class-name'?: string
  selectable?: Function
  'reserve-selection'?: boolean
  filters?: { key: string; value: string }[]
  'filter-placement'?: string
  'filter-multiple'?: boolean
  'filter-method'?: Function
  'filtered-value'?: any[]
}

export type { TableColumn, TableRow, OptButton, OptHeaderButtons }
