import HTable from '@/components/hTable'
import type { ElTableColumn, TagProps } from 'element-plus'

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

  interface TableColumn extends ElTableColumn {
    size?: TagProps['size']
    show?: boolean
    render?: 'icon' | 'tag' | 'image' | 'images' | 'buttons' | 'switch'
    // 需要替换的值 例如 {1: '男'， 2：'女'}
    replaceValue?: any
    // 自定义数据:比如渲染为Tag时,可以指定不同值时的Tag的Type属性 { open: 'success', close: 'info' }
    custom?: any
    effect?: TagProps['effect']
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

export type { TableColumn, TableRow }
