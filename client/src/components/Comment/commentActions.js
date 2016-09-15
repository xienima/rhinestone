import {
  savePostCommentUrl,
  getHeader
} from './../../config'

export const savePostComment = function (store, postId, comment) {
  const postData = {
    pid: postId,
    comment: comment
  }

  this.$http.post(savePostCommentUrl, JSON.stringify(postData), {headers: getHeader()})
  .then(response => {
    const post = response.data.data.post
    const comment = response.data.data.comment

    var dispatch = store.dispatch
    dispatch('SAVE_FORUM_POST_COMMENT', post, comment)
  })
}
