// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './vuex'
import './mixin/common'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#container',
  name: 'Root',
  router,
  store,
  // components: { App },
  components: (function () {
    return { App }
  })(),
  template: '<App/>',
})

Vue.use(Vuex)
