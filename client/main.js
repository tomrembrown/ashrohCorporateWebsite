'use strict'

import Vue from 'vue'
import VueRouter from 'vue-router'
import BootStrapVue from 'bootstrap-vue'
import App from './view/App.vue'
import { routes } from './presentationLogic/clientRoutes'
import { store } from './presentationLogic/store/store'

Vue.use(VueRouter)
Vue.use(BootStrapVue)

const router = new VueRouter({
  routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  router: router,
  render: h => h(App)
})
