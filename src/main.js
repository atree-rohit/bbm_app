import Vue from 'vue'
import ButterflyCount from './components/ButterflyCount.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  render: h => h(ButterflyCount),
}).$mount('#app')
