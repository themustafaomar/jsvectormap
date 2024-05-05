import VectorMapComponent from '../components/VectorMap.vue'

export default {
  install(app, options) {
    VectorMapComponent.props.__globalOptions__ = {
      default: () => options,
    }

    app.component('vectorMap', VectorMapComponent)
  }
}