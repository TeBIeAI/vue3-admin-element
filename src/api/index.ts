import { request } from '../service'

interface Iresult {
  list: object
}

export const login = () => {
  return request<Iresult>({
    url: '/api/getUserInfo',
    method: 'GET',
  })
}
