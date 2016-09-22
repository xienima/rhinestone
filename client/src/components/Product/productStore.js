const state = {
  products: [],
  currentProduct: {},
  searchResult: [],
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
  }
}

export default {
  state, mutations
}
