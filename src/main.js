import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BetterScroll from 'better-scroll'
import 'swiper/css/swiper.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  BetterScroll
}).$mount('#app')
