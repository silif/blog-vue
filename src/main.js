// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
// import VueHighlightJS from 'vue-highlightjs'
require('./assets/normallize.css')
require('./assets/public.css')
// Tell Vue.js to use vue-highlightjs
// Vue.use(VueHighlightJS)
/* eslint-disable no-new */
Vue.use(require('vue-moment'))
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
