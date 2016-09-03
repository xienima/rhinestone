const state = {
  authUser: null
}

const mutations = {
  USER_LOGIN (state, authUser) {
    window.localStorage.setItem('authUser', JSON.stringify(authUser))
    state.authUser = authUser
  },
  USER_LOGOUT (state) {
    state.authUser = null
  }
}

export default {
  state, mutations
}
