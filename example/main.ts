import { createApp } from 'vue'
import element from 'element-plus'
import App from './App.vue'
import DesignForm from '../src'
import 'element-plus/lib/theme-chalk/index.css'

createApp(App)
  .use(element)
  .use(DesignForm)
  .mount('#app')
