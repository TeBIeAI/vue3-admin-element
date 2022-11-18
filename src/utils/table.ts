import { reactive } from 'vue'

export default class {
  public table: HTable = reactive({
    data: [],
    loading: true,
    column: []
  })

  constructor(table: HTable) {
    this.table = Object.assign(this.table, table)
  }
}
