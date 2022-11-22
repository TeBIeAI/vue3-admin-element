import baseTableApi from '@/api/baseTableApi'
import { reactive } from 'vue'

export default class {
  public table: HTable = reactive({
    data: [],
    loading: true,
    column: [],
    filter: {},
    total: 0,
    pk: 'id'
  })

  public api: baseTableApi

  public comSearchForm: ComSearchForm = reactive({
    form: {}
  })

  constructor(api: baseTableApi, table: HTable) {
    this.api = api
    this.table = Object.assign(this.table, table)
  }

  onTableHeaderAction(event: OptHeaderButtons, data: AnyObj) {
    const actions = new Map<OptHeaderButtons, any>([
      [
        'column-show-change',
        () => {
          const { prop, value } = data
          this.table.column.forEach((i) => {
            if (i.prop === prop) {
              i.show = value
            }
          })
        }
      ]
    ])
    const action = actions.get(event)
    action.call(this)
  }

  onTaleAction(event: string, data: AnyObj) {
    const actionFn = new Map<string, () => void>([
      [
        'refresh',
        () => {
          this.table.data = []
          this.getIndex()
        }
      ],
      [
        'table-current-page-change',
        () => {
          this.table.filter!.currentPage = data.currentPage
          this.getIndex()
        }
      ],
      [
        'table-sizes-change',
        () => {
          this.table.filter!.pageSizes = data.pageSizes
          this.getIndex()
        }
      ],
      [
        'delete',
        () => {
          this.table.filter!.pageSizes = data.pageSizes
          this.delete([data.row[this.table.pk!]])
        }
      ],
      [
        'com-search',
        () => {
          this.table.filter = data
          this.getIndex()
        }
      ]
    ])
    const action = actionFn.get(event)
    action?.call(this)
  }

  /**
   * 表格请求
   * @return 表格数据
   */
  getIndex() {
    this.table.loading = true
    this.api
      .index(this.table.filter!)
      .then((res) => {
        this.table.data = res.data.data
        this.table.total = res.data.total
        this.table.loading = false
      })
      .catch((error) => {
        this.table.loading = false
        console.log(error)
      })
  }

  delete(ids: string[]) {
    this.api
      .del(ids)
      .then(() => {
        this.onTaleAction('refresh', {})
      })
      .catch((error) => {
        this.onTaleAction('refresh', {})
        console.log(error)
      })
  }
}
