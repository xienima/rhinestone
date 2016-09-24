<script>
  import {
    getProducts,
    getProductFacets,
    setProductFacetsFromSearch,
    setProductSearchResult,
    swapProductFacetsDataWithTemp
  } from './../components/Product/productActions'
  import algoliasearch from 'algoliasearch'
  import ProductSingle from './../components/Product/ProductSingle'
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
      },
      clearSearch () {
        this.facetFilters = []
        this.swapProductFacetsDataWithTemp()
        this.setProductSearchResult([])
      }
    },
    vuex: {
      getters: {
        productStore: state => state.productStore
      },
      actions: {
        getProducts,
        getProductFacets,
        setProductFacetsFromSearch,
        setProductSearchResult,
        swapProductFacetsDataWithTemp
      }
    }
  }
</script>

<template>
  <!-- <pre>{{ $data.facetFilters | json }}</pre> -->
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

  <div class="row">

    <div class="col-md-3">
      <div class="box box-primary">
        <div class="box-header with-border">
          <h3 class="box-title">Brands</h3>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
          <ul class="list-group">
            <li class="list-group-item" v-for="(index, value) in productStore.facets.brand">
              <span class="badge">{{ value }}</span>
              <span v-on:click="addFacetAndSearch('brand', index)" track-by="$index" class="cursor">{{ index }}</span>
            </li>
          </ul>
        </div>
        <!-- /.box-body -->
      </div>

      <div class="box box-primary">
        <div class="box-header with-border">
          <h3 class="box-title">OS</h3>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
          <ul class="list-group">
            <li class="list-group-item" v-for="(index, value) in productStore.facets.os">
              <span class="badge">{{ value }}</span>
              {{ index }}
            </li>
          </ul>
        </div>
        <!-- /.box-body -->
      </div>
    </div>

    <div class="col-md-9">
      <!-- Show products -->
      <div class="row">
        <div class="col-md-12" v-if="productStore.searchResult.length == 0">
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">Products</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <div class="product-item" v-for="product in productStore.products">
                <product-single :product="product"></product-single>
              </div>
            </div>
            <!-- /.box-body -->
          </div>
        </div>
      </div>

      <!-- Show search results -->
      <div class="row">
        <div class="col-md-12" v-if="productStore.searchResult.length > 0">
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">Search results</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <p>
                {{ productStore.searchResult.length }} results found.
                <button class="btn btn-primary btn-xs" v-on:click="clearSearch()">Clear search</button>
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
            <!-- /.box-body -->
          </div>

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
