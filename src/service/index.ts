import AxiosInstance from './request'
import type { AxiosRequestConfig } from 'axios'

const instance = new AxiosInstance({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  },
  responseType: 'json'
})

const request = <T, R = any>(config: AxiosRequestConfig<R>) => {
  // const { method = 'GET', params = null, data = null } = config
  // config[method == 'GET' ? 'params' : 'data'] = params
  // debugger
  return instance.request<IResponse<T>>(config)
}

export { request }
