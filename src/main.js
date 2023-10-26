import Vue from 'vue'
import App from './App.vue'
import './css/reset.css'
import './css/icon.css'
import './css/main.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')