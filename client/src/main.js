import moment from 'moment'
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
import PostAdd from './components/Forum/PostAdd'
import PostView from './components/Forum/PostView'
import ProductAddForm from './components/Product/ProductAddForm'
import ProductAdd from './pages/ProductAdd'
import ProductSearch from './pages/ProductSearch'
import ProductDetailsPage from './pages/ProductDetailsPage'
import InfoBox from './components/Widgets/InfoBox'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueValidator)
Vue.component('app', App)
Vue.component('menu', Menu)
Vue.component('info-box', InfoBox)
Vue.component('login-page', LoginPage)
Vue.component('dashboard-page', DashboardPage)
Vue.component('forum-page', ForumPage)
Vue.component('forum', Forum)
Vue.component('forum-add', ForumAdd)
Vue.component('forum-view', ForumView)
Vue.component('post-add', PostAdd)
Vue.component('post-view', PostView)
Vue.component('product-add', ProductAdd)
Vue.component('product-search', ProductSearch)
Vue.component('product-add-form', ProductAddForm)
Vue.component('product-details-page', ProductDetailsPage)

const vue = Vue.extend({
  store
})

Vue.filter('moment', function (date) {
  return moment(date).fromNow()
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
      },
      'post-add/:fid': {
        name: 'add-forum-post',
        component: PostAdd
      },
      'post/view/:pid': {
        name: 'view-post',
        component: PostView
      }
    }
  },
  'products': {
    name: 'products',
    component: ProductAdd,
    subRoutes: {
      '/add': {
        name: 'product-add',
        component: ProductAddForm
      },
      '/search': {
        name: 'product-search',
        component: ProductSearch
      },
      '/view/:id': {
        name: 'product-details',
        component: ProductDetailsPage
      }
    }
  }
})

appRoutes.start(vue, 'body')
