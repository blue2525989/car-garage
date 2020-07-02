import Vue from 'vue'
import App from './App.vue'
import Carousel from './components/Carousel.vue'
import FileUpload from './components/FileUpload.vue'

Vue.config.productionTip = false
Vue.component('Carousel', Carousel)
Vue.component('FileUpload', FileUpload)

new Vue({
  render: h => h(App),
}).$mount('#app')
