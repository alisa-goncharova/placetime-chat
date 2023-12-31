import Vue from 'vue'
import App from './App.vue'
import store from '@/store/store'
import './css/reset.css'
import './css/icon.css'
import './css/main.css'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
