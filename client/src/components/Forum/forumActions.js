import {
  forumGetAll,
  forumAddUrl,
  forumDetails,
  saveForumPostUrl,
  getHeader,
  getPostById
} from './../../config'

export const getForums = function (store) {
  this.$http.get(forumGetAll, {headers: getHeader()})
  .then(response => {
    console.log(response)
    var dispatch = store.dispatch
    dispatch('GET_FORUMS', response.data.data)
  })
}

export const saveNewForum = function (store, forumData) {
  this.$http.post(forumAddUrl, JSON.stringify(forumData), {headers: getHeader()})
  .then(response => {
    console.log(response)
    var dispatch = store.dispatch
    dispatch('ADD_NEW_FORUM', response.data.data)
    this.$router.go({name: 'forum'})
  })
}

export const getForumById = function (store, id) {
  const url = forumDetails + id
  this.$http.get(url, {headers: getHeader()})
  .then(response => {
    console.log(response)
    var dispatch = store.dispatch
    dispatch('GET_FORUM_DATA_BY_ID', response.data.data)
  })
}

export const saveForumPost = function (store, post) {
  this.$http.post(saveForumPostUrl, JSON.stringify(post), {headers: getHeader()})
  .then(response => {
    console.log('response', response)
    var dispatch = store.dispatch
    dispatch('SAVE_FORUM_POST', response.data.data)
  })
}

export const getForumPostDetails = function (store, postId) {
  const url = getPostById + postId
  this.$http.get(url, {headers: getHeader()})
  .then(response => {
    console.log(response)
    var dispatch = store.dispatch
    dispatch('POST_BY_ID', response.data.data)
  })
}
