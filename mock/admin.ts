import { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'
import { formatResponse, getTimeOut } from './utils'

const Random = Mock.Random

export default [
  {
    url: '/api/admin/admin_user/index',
    method: 'get',
    timeout: getTimeOut(),
    response: (res) => {
      const total = 38
      const { currentData } = formatResponse(total, res.query)
      const dataList = () => {
        return {
          ['data|' + currentData]: [
            {
              'id|+1': 1,
              name: '@cname',
              'age|11-99': 1,
              address: '@county(true)',
              mobile_phone: '@natural(13000000000,19900000000)',
              email: '@email',
              'sex|1': [1, 2],
              'status|1': [0, 1],
              createTime: '@date', //创建时间
              avatar: Random.image('70x70'),
              lastlogin: '@datetime'
            }
          ]
        }
      }

      const data = dataList()
      return {
        code: 200,
        msg: '获取成功',
        data: {
          ...data,
          total
        }
      }
    }
  }
] as MockMethod[]
