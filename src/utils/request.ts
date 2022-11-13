import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'

const createAxios = (axiosConfig: AxiosRequestConfig) => {
  const Axios = axios.create({
    baseURL: import.meta.env.BASE_URL as string,
    timeout: 1000 * 10,
    headers: {
      'Content-Type': 'application/json',
      server: true,
    },
    responseType: 'json',
  })

  Axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      console.log(config)

      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  Axios.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  return Axios(axiosConfig)
}

export default createAxios
