import { MockMethod } from 'vite-plugin-mock'

const routesData = [
  {
    id: 1,
    name: 'userManage',
    title: '用户管理',
    filePath: '/layouts/components/index',
    pid: 0,
  },
  {
    id: 2,
    name: 'userList',
    title: '列表',
    filePath: '/views/userManage/list/index',
    pid: 1,
    operation: ['add', 'edit', 'delete'],
  },
  {
    id: 3,
    name: 'rolesList',
    title: '角色',
    filePath: '/views/userManage/roles/index',
    pid: 1,
  },
  {
    id: 4,
    name: 'cycle',
    title: '无限极路由',
    filePath: '/views/cycle/index',
    pid: 0,
  },
  {
    id: 5,
    name: 'cycle-1',
    title: '无限极路由-1',
    filePath: '/views/cycle/index1',
    pid: 4,
  },
  {
    id: 6,
    name: 'cycle-1',
    title: '无限极路由-1',
    filePath: '/views/cycle/index1',
    pid: 4,
  },
  {
    id: 7,
    name: 'cycle-1-1',
    title: '无限极路由-1-1',
    filePath: '/views/cycle/index1-1',
    pid: 6,
  },
  {
    id: 8,
    name: 'cycle-1-1-1',
    title: '无限极路由-1-1-1',
    filePath: '/views/cycle/index1-1-1',
    pid: 7,
  },
]

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
          menus: routesData,
        },
      }
    },
  },
] as MockMethod[]
