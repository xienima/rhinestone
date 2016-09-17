const state = {
  productInfo: {},
  userInfo: '',
  productCount: ''
}

const mutations = {
  GET_DASH_DATA (state, data) {
    state.productInfo = data.productInfo
    state.userInfo = data.userInfo
    state.productCount = data.productCount
  }
}

export default {
  state, mutations
}
