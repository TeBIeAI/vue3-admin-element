import { request } from '../service'

interface Result {
  data: any[]
}

export const getUserList = () => {
  return request<Result>({
    url: '/api/get_userlist',
    method: 'GET'
  })
}
