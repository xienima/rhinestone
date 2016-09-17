import Vue from 'vue'
import Vuex from 'vuex'

import userStore from './components/User/userStore'
import forumStore from './components/Forum/forumStore'
import productStore from './components/Product/productStore'
import dashboardStore from './components/Dashboard/dashboardStore'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    userStore, forumStore, productStore, dashboardStore
  },
  strict: debug
})
