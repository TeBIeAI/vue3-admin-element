import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import i18n from './locals'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/index.scss'
import { registerIcon } from './utils/common'
import 'element-plus/dist/index.css'
;(() => {
  const app = createApp(App)

  app.use(ElementPlus)
  app.use(store)
  app.use(router)
  app.use(i18n)

  registerIcon(app)

  app.mount('#app')
})()
