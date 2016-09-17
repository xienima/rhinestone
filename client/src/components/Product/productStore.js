const state = {
  products: [],
  currentProduct: {}
}

const mutations = {
  LOAD_PRODUCTS (state, products) {
    state.products = products
  },
  SET_CURRENT_PRODUCT (state, product) {
    state.currentProduct = product
  }
}

export default {
  state, mutations
}
