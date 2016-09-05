import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueValidator from 'vue-validator'
import store from './store'

import App from './App'
import Menu from './components/Menu'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import ForumPage from './pages/ForumPage'
import Forum from './components/Forum/Forum'
import ForumAdd from './components/Forum/ForumAdd'
import ForumView from './components/Forum/ForumView'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueValidator)
Vue.component('app', App)
Vue.component('menu', Menu)
Vue.component('login-page', LoginPage)
Vue.component('dashboard-page', DashboardPage)
Vue.component('forum-page', ForumPage)
Vue.component('forum', Forum)
Vue.component('forum-add', ForumAdd)
Vue.component('forum-view', ForumView)

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
  },
  'forum': {
    name: 'forum',
    component: ForumPage,
    subRoutes: {
      '/': {
        name: 'forum-list',
        component: Forum
      },
      '/add': {
        name: 'forum-add',
        component: ForumAdd
      },
      '/view/:id': {
        name: 'forum-view',
        component: ForumView
      }
    }
  }
})

appRoutes.start(vue, 'body')
