import { request } from '../service'

export const login = () => {
  return request({
    url: '/api/getUserInfo',
    method: 'GET'
  })
}
