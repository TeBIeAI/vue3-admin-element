import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import i18n from './locals'
import 'element-plus/theme-chalk/dark/css-vars.css'

function bootstrap() {
  const app = createApp(App)

  app.use(store)
  app.use(router)
  app.use(i18n)

  app.mount('#app')
}

bootstrap()
