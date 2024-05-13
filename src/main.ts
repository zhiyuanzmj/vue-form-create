import { createApp } from 'vue'
import App from './App.vue'
import VueFormCreate from './index'
import 'element-plus/lib/theme-chalk/index.css'
import element from 'element-plus'
import Draggable from 'vuedraggable'
createApp(App)
  .use(element, {})
  .use({ install: (app) => app.component('Draggable', Draggable) })
  .use(VueFormCreate)
  .mount('#app')
