const state = {
  products: [],
  currentProduct: {},
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
  }
}

export default {
  state, mutations
}
