import { reactive } from 'vue'

export default class {
  public table: HTable = reactive({
    data: [],
    loading: false,
    column: []
  })

  constructor(table: HTable) {
    this.table = Object.assign(this.table, table)
  }
}
