import _ from 'lodash'

const state = {
  forums: [],
  viewForum: {
    posts: [],
    user: {}
  },
  viewPost: {}
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
  },
  POST_BY_ID (state, post) {
    _.forEach(state.forums, function (forum, fkey) {
      console.log('forum', forum.id, post.forum_id)
      if (forum.id === parseInt(post.forum_id)) {
        _.forEach(forum.posts, function (forumPost, pkey) {
          if (forumPost.id === post.id) {
            state.forums[fkey].posts[pkey] = post
            state.viewPost = post
          }
        })
      }
    })
  }
}

export default {
  state, mutations
}
