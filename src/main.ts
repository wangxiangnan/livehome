import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'

const app = createApp(App)
app.config.globalProperties.$BASE_URL = process.env.VUE_APP_BASE_URL
app.use(store).use(router).use(ElementPlus).mount('#app')
