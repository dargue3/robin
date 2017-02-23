import Vue from 'vue'
import App from 'components/App'
import router from './routes'
import axios from 'axios'

window.axios = axios

new Vue({
  el: '#app',
  router,
  template: '<App />',
  components: { App }
})
