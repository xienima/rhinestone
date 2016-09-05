const state = {
  forums: [],
  viewForum: {}
}

const mutations = {
  GET_FORUMS (state, forums) {
    state.forums = forums
  },
  ADD_NEW_FORUM (state, forum) {
    state.forums.push(forum)
  },
  GET_FORUM_DATA_BY_ID (state, forum) {
    state.viewForum = forum
  }
}

export default {
  state, mutations
}
