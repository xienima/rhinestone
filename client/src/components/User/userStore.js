const state = {
  authUser: {}
}

const mutations = {
  USER_LOGIN (state, authUser) {
    window.localStorage.setItem('authUser', JSON.stringify(authUser))
    state.authUser = authUser
  }
}

export default {
  state, mutations
}
