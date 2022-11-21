import { reactive } from 'vue'

export default class {
  public table: HTable = reactive({
    data: [],
    loading: true,
    column: []
  })

  public comSearchForm: ComSearchForm = reactive({
    form: {}
  })

  constructor(table: HTable) {
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
}
