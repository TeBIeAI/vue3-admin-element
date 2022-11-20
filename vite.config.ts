import { defineConfig, loadEnv } from 'vite'
import type { ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock'
import { resolve } from 'path'

const pathSrc = resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd())
  console.log(env)
  return {
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
        extensions: ['.js', '.json', '.ts', '.vue'] as unknown as string // 使用路径别名时想要省略的后缀名，可以自己 增减
      }
    },
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue'],
        dts: resolve(pathSrc, 'auto-imports.d.ts')
      }),
      AutoImport({
        resolvers: [
          ElementPlusResolver(),
          // 自动导入图标组件
          IconsResolver({
            prefix: 'Icon'
          })
        ],
        dts: resolve(pathSrc, 'auto-Notification.d.ts')
      }),
      Components({
        resolvers: [
          ElementPlusResolver(),
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ['ep']
          })
        ],
        dts: resolve(pathSrc, 'components.d.ts')
      }),
      Icons({
        autoInstall: true
      }),
      viteMockServe()
    ],
    server: {
      port: env.VITE_APP_PORT as unknown as number
      // proxy: {
      //   '/api': {
      //     target: env.VITE_APP_API_BASE_URL,
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/api/, ''),
      //   },
      // },
    }
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: '@import "@/styles/var.scss";'
    //     }
    //   }
    // }
  }
})
