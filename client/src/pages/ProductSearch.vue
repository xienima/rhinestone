<script>
  import algoliasearch from 'algoliasearch'
  import ProductSingle from './../components/Product/ProductSingle'
  import {getProducts, getProductFacets, setProductFacetsFromSearch, setProductSearchResult} from './../components/Product/productActions'
  import {algoliaAppId, algoliaApiKey} from './../env'

  export default {
    components: {
      ProductSingle
    },
    created () {
      this.client = algoliasearch(algoliaAppId, algoliaApiKey)
      this.index = this.client.initIndex('mobiles')
      this.getProducts()
      this.getProductFacets()
    },
    data () {
      return {
        query: '',
        noresult: false,
        results: [],
        facetFilters: []
      }
    },
    methods: {
      search () {
        this.index.search(this.query, {
          'facets': '*',
          'facetFilters': this.facetFilters
        }, function (error, results) {
          console.log('results', results)

          // setting up the data for facets
          const facets = {
            brand: {},
            os: {},
            price: {}
          }
          facets.brand = results.facets.brand
          facets.os = results.facets.os
          facets.price = results.facets.price
          this.setProductFacetsFromSearch(facets)

          // setting the results
          if (results.hits.length > 0) {
            this.results = results.hits
            this.setProductSearchResult(results.hits)
          } else {
            this.noresult = true
          }
          console.log(results, error)
        }.bind(this))
        this.query = ''
      },
      addFacetAndSearch (key, value) {
        const string = key + ':' + value
        console.log(string)
        this.facetFilters.push(string)
        this.search()
      }
    },
    vuex: {
      getters: {
        productStore: state => state.productStore
      },
      actions: {
        getProducts, getProductFacets, setProductFacetsFromSearch, setProductSearchResult
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

  <div class="col-md-3">
    <h3> </h3>
    <div class="panel panel-default">
      <div class="panel-heading">Brands</div>
      <div class="panel-body">
        <ul class="list-group">
          <li class="list-group-item" v-for="(index, value) in productStore.facets.brand">
            <span class="badge">{{ value }}</span>
            <span v-on:click="addFacetAndSearch('brand', index)" class="cursor">{{ index }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="panel panel-default">
      <div class="panel-heading">OS</div>
      <div class="panel-body">
        <ul class="list-group">
          <li class="list-group-item" v-for="(index, value) in productStore.facets.os">
            <span class="badge">{{ value }}</span>
            {{ index }}
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="col-md-9">
    <!-- Show products -->
    <div class="row">
      <div class="col-md-12" v-if="productStore.searchResult.length == 0">
        <h3>Products</h3>
        <div class="product-item" v-for="product in productStore.products">
          <product-single :product="product"></product-single>
        </div>
      </div>
    </div>

    <!-- Show search results -->
    <div class="row">
      <div class="col-md-12" v-if="productStore.searchResult.length > 0">
        <p>
          {{ productStore.searchResult.length }} results found.
          <button class="btn btn-primary btn-xs" v-on:click="setProductSearchResult([])">Clear search</button>
        </p>
        <div class="list-group search-result">
          <a v-link="{name: 'product-details', params: {id: item.id}}" class="list-group-item" v-for="item in productStore.searchResult">
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
  </div>
</template>

<style lang="scss">
  .search-result {
    em {
      background-color: #ffe11b;
    }
  }
</style>
