export const apiDomain = 'http://localhost:8000/'
export const loginUrl = apiDomain + 'oauth/token'
export const userUrl = apiDomain + 'api/user'
export const forumGetAll = apiDomain + 'api/v1/forum'
export const forumAddUrl = apiDomain + 'api/v1/forum'
export const forumDetails = apiDomain + 'api/v1/forum/view/'
export const saveForumPostUrl = apiDomain + 'api/v1/forum/save/post'

/**
 * This function will take the access token from the local storage
 * and create the authorization required on all API requests
 * as Bearer token.
 */
export const getHeader = function () {
  const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
  const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + tokenData.access_token
  }
  return headers
}
