const state = {
  products: [],
  currentProduct: {},
  searchResult: [],
  tempFacets: {
    brand: {},
    os: {},
    price: {}
  },
  facets: {
    brand: {},
    os: {},
    price: {}
  }
}

const mutations = {
  LOAD_PRODUCTS (state, products) {
    state.products = products
  },
  SET_CURRENT_PRODUCT (state, product) {
    state.currentProduct = product
  },
  SET_CURRENT_FACETS (state, facetData) {
    state.facets.brand = facetData.brand
    state.facets.os = facetData.os
    state.facets.price = facetData.price
  },
  SET_SEARCH_RESULTS (state, searchResult) {
    state.searchResult = searchResult
  },
  SET_INIT_TEMP_FACETS (state, facetData) {
    state.tempFacets.brand = facetData.brand
    state.tempFacets.os = facetData.os
    state.tempFacets.price = facetData.price
  },
  SWAP_PRODUCT_FACETD_WITH_TEMP (state) {
    state.facets = state.tempFacets
  }
}

export default {
  state, mutations
}
