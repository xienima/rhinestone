const state = {
  products: []
}

const mutations = {
  LOAD_PRODUCTS (state, products) {
    state.products = products
  }
}

export default {
  state, mutations
}
