//import './assets/main.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from "./router/router.js"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import axios from "axios";


const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}


app.use(ElementPlus)
app.use(router)

app.config.globalProperties.$axios= axios
app.config.globalProperties.$base = "http://127.0.0.1:8080"


app.mount('#app')
