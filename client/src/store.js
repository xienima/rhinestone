import Vue from 'vue'
import Vuex from 'vuex'

import userStore from './components/User/userStore'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    userStore
  },
  strict: debug
})
