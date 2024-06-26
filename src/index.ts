import { App } from 'vue'
import ElDesignForm from './core/element/ElDesignForm.vue'
import ElGenerateForm from './core/element/ElGenerateForm.vue'
import Icons from './icons'
import './styles/index.styl'

Icons.install()

ElDesignForm.install = (app: App) => {
  app.component(ElDesignForm.name, ElDesignForm)
}

ElGenerateForm.install = (app: App) => {
  app.component(ElGenerateForm.name, ElGenerateForm)
}

const components = [
  ElDesignForm,
  ElGenerateForm
]

const install = (app: App) => {
  components.forEach(component => app.component(component.name, component))
}

export {
  install,
  ElDesignForm,
  ElGenerateForm
}
export default {
  install,
  ElDesignForm,
  ElGenerateForm
}
