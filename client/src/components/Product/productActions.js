import {
  getHeader,
  saveProductMobileUrl
} from './../../config'

export const saveNewMobile = function (store, mobileData) {
  this.$http.post(saveProductMobileUrl, JSON.stringify(mobileData), {headers: getHeader()})
  .then(response => {
    console.log(response)
    // var dispatch = store.dispatch
    // dispatch('ADD_NEW_FORUM', response.data.data)
  })
}
