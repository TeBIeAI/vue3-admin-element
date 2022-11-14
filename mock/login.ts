import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/login_acctoken',
    method: 'post',
    timeout: 200,
    response: ({ query }) => {
      return {
        code: 200,
        msg: '获取成功',
        data: {
          token: '@id',
        },
      }
    },
  },
  {
    url: '/api/login_get_userinfo',
    method: 'get',
    timeout: 200,
    response: ({ query }) => {
      return {
        code: 200,
        msg: '获取成功',
        data: {
          userinfo: {
            nickname: '@cname',
            age: '@integer(10-100)',
            uid: '@id',
            url: '@image',
            mobile_phone: '@phone',
            email: '@email',
            region: '@region',
          },
        },
      }
    },
  },
] as MockMethod[]
