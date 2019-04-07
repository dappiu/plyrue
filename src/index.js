import PlyrUe from './PlyrUe.vue'

PlyrUe.install = (Vue, options = {}) => {
  if (options.plyr) {
    PlyrUe.props.options.default = () => { return { ...options.plyr } }
  }
  if (options.emit) {
    PlyrUe.props.emit.default = () => { return [ ...options.emit ] }
  }
  Vue.component(PlyrUe.name, PlyrUe)
}

// Credit to https://github.com/irazasyed for this auto Vue.use() when
// installing from unpkg or similar.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(PlyrUe)
}

export default PlyrUe
