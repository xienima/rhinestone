import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueValidator from 'vue-validator'
import store from './store'

import App from './App'
import Menu from './components/Menu'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueValidator)
Vue.component('app', App)
Vue.component('menu', Menu)
Vue.component('login-page', LoginPage)
Vue.component('dashboard-page', DashboardPage)

const vue = Vue.extend({
  store
})

var appRoutes = new VueRouter()

appRoutes.map({
  '/': {
    name: 'home',
    component: LoginPage
  },
  'dashboard': {
    name: 'dashboard',
    component: DashboardPage
  }
})

appRoutes.start(vue, 'body')
