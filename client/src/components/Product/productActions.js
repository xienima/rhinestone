import {
  getHeader,
  saveProductMobileUrl,
  getProductsUrl,
  getProductDetailsUrl,
  getProductFacetsUrl
} from './../../config'

export const saveNewMobile = function (store, mobileData) {
  this.$http.post(saveProductMobileUrl, JSON.stringify(mobileData), {headers: getHeader()})
  .then(response => {
    console.log(response)
  })
}

export const getProducts = function (store) {
  this.$http.get(getProductsUrl, {headers: getHeader()})
  .then(response => {
    // console.log(response)
    var dispatch = store.dispatch
    dispatch('LOAD_PRODUCTS', response.data.data)
  })
}

export const getProductDetails = function (store, pId) {
  const url = getProductDetailsUrl + pId
  this.$http.get(url, {headers: getHeader()})
  .then(response => {
    // console.log(response.data.data)
    var dispatch = store.dispatch
    dispatch('SET_CURRENT_PRODUCT', response.data.data)
  })
}

export const getProductFacets = function (store) {
  this.$http.get(getProductFacetsUrl, {headers: getHeader()})
  .then(response => {
    // console.log(response.data.data)
    var dispatch = store.dispatch
    dispatch('SET_CURRENT_FACETS', response.data.data)
    dispatch('SET_INIT_TEMP_FACETS', response.data.data)
  })
}

export const setProductFacetsFromSearch = function (store, facets) {
  var dispatch = store.dispatch
  dispatch('SET_CURRENT_FACETS', facets)
}

export const setProductSearchResult = function (store, result) {
  var dispatch = store.dispatch
  dispatch('SET_SEARCH_RESULTS', result)
}

export const swapProductFacetsDataWithTemp = function (store) {
  var dispatch = store.dispatch
  dispatch('SWAP_PRODUCT_FACETD_WITH_TEMP')
}
