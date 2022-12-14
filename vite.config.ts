import { defineConfig, loadEnv } from 'vite'
import type { ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd())
  console.log(env)
  return {
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@cps': resolve(__dirname, 'src/components'),
        '/types/': resolve(__dirname, 'typings'),
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
        extensions: ['.js', '.json', '.ts', '.vue'] as unknown as string // 使用路径别名时想要省略的后缀名，可以自己 增减
      }
    },
    plugins: [vue(), viteMockServe()],
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
