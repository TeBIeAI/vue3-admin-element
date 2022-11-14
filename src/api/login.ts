import { RouteRecordRaw } from 'vue-router'
import { request } from '../service'

interface IResult {
  token: object
}

interface LoginParams {
  username: string
  password: string
}

export const login_acctoken = (params: LoginParams) => {
  return request<IResult, LoginParams>({
    url: '/api/login_acctoken',
    method: 'POST',
    params,
  })
}

interface IUserInfo {
  userinfo: object
  menus: RouteRecordRaw[]
}
export const login_getUserInfo = () => {
  return request<IUserInfo>({
    url: '/api/login_get_userinfo',
    method: 'GET',
  })
}
