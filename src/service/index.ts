import AxiosInstance from './request'
import type { AxiosRequestConfig } from 'axios'

const instance = new AxiosInstance({
  baseURL: import.meta.env.BASE_URL,
  timeout: 50000,
})

const request = <T, R = any>(config: AxiosRequestConfig<R>) => {
  const { method = 'GET', params } = config
  config[method == 'GET' ? 'params' : 'data'] = params
  return instance.request<IResponse<T>>(config)
}

export { request }
