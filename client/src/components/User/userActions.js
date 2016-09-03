import {loginUrl, userUrl} from './../../config'
import {clientSecret} from './../../env'

export const doUserLogin = function (store, loginData) {
  const postData = {
    grant_type: 'password',
    client_id: 2,
    client_secret: clientSecret,
    username: loginData.username,
    password: loginData.password,
    scope: ''
  }
  this.$http.post(loginUrl, JSON.stringify(postData))
    .then(response => {
      const tokenData = JSON.parse(response.data)
      // console.log(tokenData)
      const headers = {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + tokenData.access_token
      }
      this.$http.get(userUrl, {headers: headers})
        .then(response => {
          // console.log(response)
          const userObj = {
            access_token: tokenData.access_token,
            refresh_token: tokenData.refresh_token,
            email: response.data.email,
            name: response.data.name,
            created_at: response.data.created_at,
            updated_at: response.data.updated_at
          }
          var dispatch = store.dispatch
          dispatch('USER_LOGIN', userObj)
          this.$router.go('dashboard')
        })
    })
    .catch(response => {
      console.log(JSON.parse(response.data))
    })
}
