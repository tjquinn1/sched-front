// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'

import App from './App'
import router from './router'

import { DJANGO_USER_ID } from './constants/settings'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'

import 'babel-polyfill'

Vue.use(Vuetify)

Vue.config.productionTip = false

let userId = localStorage.getItem(DJANGO_USER_ID)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: {
    userId
  },
  template: '<App/>',
  components: { App }
})
