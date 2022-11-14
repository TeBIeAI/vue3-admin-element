import { whiteUrl } from '@/settings/whiteUrls'
import Cookies from 'js-cookie'
import { HRequestConfig } from './types'

const createHeaderAccToken = (config: HRequestConfig): void => {
  if (!whiteUrl.includes(config.url!)) {
    const token = Cookies.get('token')
    console.log(token)
    if (token) config.headers!['access-token'] = token
  }
}

export { createHeaderAccToken }
