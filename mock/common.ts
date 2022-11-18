import { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'
import { getTimeOut } from './utils'

const Random = Mock.Random

export default [
  {
    url: '/api/get_userlist',
    method: 'get',
    timeout: getTimeOut(),
    response: () => {
      return {
        code: 200,
        msg: '获取成功',
        data: {
          'data|10': [
            {
              'id|+1': 18,
              name: '@name',
              nickname: '@last',
              'age|11-99': 1,
              address: '@county(true)',
              mobile_phone: '@natural(13000000000,19900000000)',
              email: '@email',
              'sex|1': [1, 2],
              'status|1': [1, 0],
              createTime: '@datetime', //创建时间
              avatar: Random.image('70x70')
            }
          ]
        }
      }
    }
  }
] as MockMethod[]
