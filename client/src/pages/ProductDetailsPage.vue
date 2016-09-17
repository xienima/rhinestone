<script>
  import {getProductDetails} from './../components/Product/productActions'
  import ProductDetail from './../components/Product/ProductDetail'

  export default {
    components: {
      ProductDetail
    },
    created () {
      this.getProductDetails(this.$route.params.id)
    },
    vuex: {
      getters: {
        productStore: state => state.productStore
      },
      actions: {
        getProductDetails
      }
    }
  }
</script>

<template>
  <div class="row">
    <div class="col-md-12">
      <h1 class="page-title">Product details</h1>
    </div>
  </div>

  <div class="row">
    <div class="col-md-12">
      <p><a v-link="{name: 'product-search'}" class="btn btn-warning"><i class="fa fa-chevron-left"></i> Back to listing</a></p>
      <product-detail :data.sync="productStore.currentProduct"></product-detail>
    </div>
  </div>
</template>
