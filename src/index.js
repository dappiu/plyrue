import PlyrUe from "./components/PlyrUe.vue"
import 'plyr/dist/plyr.css'

const PlyrUePlugin = {
  install(vue) {
    vue.component(PlyrUe.name, PlyrUe);
  }
}


if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(PlyrUePlugin)
}

export {
  PlyrUe,
  PlyrUePlugin
}

export default {
  PlyrUePlugin
}
