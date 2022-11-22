import { request } from '../service'

interface TableDefaultData<T = any> {
  total: number
  data: T
  msg?: string
}

export default class {
  private apiControllerUrl
  public apiUrlAction: Map<string, string>

  constructor(apiControllerUrl: string) {
    this.apiControllerUrl = apiControllerUrl
    this.apiUrlAction = new Map([
      ['index', apiControllerUrl + 'index'],
      ['add', apiControllerUrl + 'add'],
      ['edit', apiControllerUrl + 'edit'],
      ['delete', apiControllerUrl + 'delete']
    ])
  }

  index(params: AnyObj) {
    return request<TableDefaultData>({
      url: this.apiUrlAction.get('index'),
      method: 'GET',
      params
    })
  }

  add(params: AnyObj) {
    return request({
      url: this.apiUrlAction.get('add'),
      method: 'POST',
      data: params
    })
  }

  edit(params: AnyObj) {
    return request({
      url: this.apiUrlAction.get('edit'),
      method: 'POST',
      data: params
    })
  }

  del(ids: string[]) {
    return request({
      url: this.apiUrlAction.get('delete'),
      method: 'delete',
      data: { ids: ids }
    })
  }
}
