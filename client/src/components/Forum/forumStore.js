import _ from 'lodash'

const state = {
  forums: [],
  viewForum: {
    posts: [],
    user: {}
  }
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
  },
  SAVE_FORUM_POST (state, forumPost) {
    _.forEach(state.forums, function (value, key) {
      // check for the forum
      if (forumPost.id === value.id) {
        state.forums[key].posts.push(forumPost)
      }
    })
  }
}

export default {
  state, mutations
}
