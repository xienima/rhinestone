import {
  getHeader,
  dashDataUrl
} from './../../config'

export const getDashData = function (store, mobileData) {
  this.$http.get(dashDataUrl, {headers: getHeader()})
  .then(response => {
    console.log(response.data)
    var dispatch = store.dispatch
    dispatch('GET_DASH_DATA', response.data)
  })
}
