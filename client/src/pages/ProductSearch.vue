<script>
  import algoliasearch from 'algoliasearch'
  import ProductSingle from './../components/Product/ProductSingle'
  import {getProducts} from './../components/Product/productActions'
  import {algoliaAppId, algoliaApiKey} from './../env'

  export default {
    components: {
      ProductSingle
    },
    created () {
      this.client = algoliasearch(algoliaAppId, algoliaApiKey)
      this.index = this.client.initIndex('mobiles')
      this.getProducts()
    },
    data () {
      return {
        query: '',
        noresult: false,
        results: []
      }
    },
    methods: {
      search () {
        if (this.query !== '') {
          console.log(this.query)
          this.index.search(this.query, {
            'facets': '*',
            'facetFilters': []
          }, function (error, results) {
            if (results.hits.length > 0) {
              this.results = results.hits
            } else {
              this.noresult = true
            }
            console.log(results, error)
          }.bind(this))
          this.query = ''
        }
      }
    },
    vuex: {
      getters: {
        productStore: state => state.productStore
      },
      actions: {
        getProducts
      }
    }
  }
</script>

<template>
  <div class="row">
    <div class="col-md-12">
      <h1 class="page-title">Product finder</h1>
    </div>
  </div>

  <div class="row">
    <div class="col-md-12">
      <form v-on:submit.prevent="search()">
        <div class="form-group">
          <input
            type="text"
            class="form-control input-lg"
            v-model="query"
            placeholder="Enter something you want to search like Samsung Note 7"
          >
        </div>
      </form>
    </div>
  </div>

  <div class="row" v-if="noresult">
    <div class="col-md-12">
      <p>We are not able to find what you are looking for. Try something else</p>
    </div>
  </div>

  <div class="row" v-if="results.length == 0">
    <div class="col-md-12">
      <h3>Products</h3>
      <div class="product-item" v-for="product in productStore.products">
        <product-single :product="product"></product-single>
      </div>
    </div>
  </div>

  <div class="row" v-if="results.length > 0">
    <div class="col-md-12">
      <!-- <pre>{{ results | json }}</pre> -->
      <p>
        {{ results.length }} results found.
        <button class="btn btn-primary btn-xs" v-on:click="results = []">Clear search</button>
      </p>
      <div class="list-group search-result">
        <a v-link="{name: 'product-details', params: {id: item.id}}" class="list-group-item" v-for="item in results">
          <h4 class="list-group-item-heading">{{{ item._highlightResult.name.value }}}</h4>
          <p class="list-group-item-text">
            <strong>OS:</strong> {{item.os}} <br>
            <strong>Brand:</strong> {{item.brand}} <br>
            <strong>Price:</strong> {{item.price}}
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .search-result {
    em {
      background-color: #ffe11b;
    }
  }
</style>
