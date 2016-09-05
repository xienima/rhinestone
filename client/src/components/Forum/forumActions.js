import {forumGetAll, forumAddUrl} from './../../config'

/**
 * Define the header which is required for all request
 * as part of the authentioncation token for api
 * validation.
 */
const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
const headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer ' + tokenData.access_token
}

export const getForums = function (store) {
  this.$http.get(forumGetAll, {headers: headers})
    .then(response => {
      console.log(response)
      var dispatch = store.dispatch
      dispatch('GET_FORUMS', response.data.data)
    })
}

export const saveNewForum = function (store, forumData) {
  this.$http.post(forumAddUrl, JSON.stringify(forumData), {headers: headers})
    .then(response => {
      console.log(response)
      var dispatch = store.dispatch
      dispatch('ADD_NEW_FORUM', response.data.data)
      this.$router.go({name: 'forum'})
    })
}
