import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import DesignForm from '../src'
import 'element-plus/lib/theme-chalk/index.css'

createApp(App).use(ElementPlus, {}).use(DesignForm).mount('#app')
