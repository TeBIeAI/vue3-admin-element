import type { AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios'

interface HHeaders extends RawAxiosRequestHeaders {
  'access-token'?: string
}

export interface HRequestConfig extends AxiosRequestConfig {
  headers?: HHeaders
}
