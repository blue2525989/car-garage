import Vue from 'vue'
import App from './App.vue'
import Carousel from './components/Carousel.vue'

Vue.config.productionTip = false
Vue.component('Carousel', Carousel)

new Vue({
  render: h => h(App),
}).$mount('#app')
