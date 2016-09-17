import {
  getHeader,
  saveProductMobileUrl,
  getProductsUrl,
  getProductDetailsUrl
} from './../../config'

export const saveNewMobile = function (store, mobileData) {
  this.$http.post(saveProductMobileUrl, JSON.stringify(mobileData), {headers: getHeader()})
  .then(response => {
    console.log(response)
    // var dispatch = store.dispatch
    // dispatch('ADD_NEW_FORUM', response.data.data)
  })
}

export const getProducts = function (store) {
  this.$http.get(getProductsUrl, {headers: getHeader()})
  .then(response => {
    console.log(response)
    var dispatch = store.dispatch
    dispatch('LOAD_PRODUCTS', response.data.data)
  })
}

export const getProductDetails = function (store, pId) {
  const url = getProductDetailsUrl + pId
  this.$http.get(url)
  .then(response => {
    console.log(response.data.data)
  })
}
