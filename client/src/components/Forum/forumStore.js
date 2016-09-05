const state = {
  forums: []
}

const mutations = {
  GET_FORUMS (state, forums) {
    state.forums = forums
  },
  ADD_NEW_FORUM (state, forum) {
    state.forums.push(forum)
  }
}

export default {
  state, mutations
}
