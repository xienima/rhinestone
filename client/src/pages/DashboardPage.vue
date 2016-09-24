<script>
  import {getDashData} from './../components/Dashboard/dashboardActions'
  import {getProducts} from './../components/Product/productActions'

  export default {
    created () {
      this.getDashData()
      this.getProducts()
    },
    data () {
      return {
        userInfo: {
          title: 'Total users',
          count: 125,
          percent: false,
          icon: 'ion ion-ios-people-outline',
          bg: 'bg-yellow'
        }
      }
    },
    vuex: {
      getters: {
        dashboardStore: state => state.dashboardStore,
        productStore: state => state.productStore
      },
      actions: {
        getDashData, getProducts
      }
    }
  }
</script>
<template>
  <div id="dashboard-wrapper">
    <!-- <pre>{{ productStore | json }}</pre> -->
    <div class="row">
      <div class="col-md-12">
        <h1 class="page-title">Dashboard</h1>
      </div>
    </div>

    <div class="row">
      <div class="col-md-3 col-sm-6 col-xs-12">
        <info-box
          title="Most popular product"
          bg="bg-aqua"
          icon="ion ion-eye"
          :count="dashboardStore.productInfo.productViews"
          unit="views"
        ></info-box>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <info-box
          title="Total products added"
          bg="bg-green"
          icon="ion ion-ios-cart-outline"
          :count="dashboardStore.productCount"
          unit=""
        ></info-box>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <info-box
          title="Total users registered"
          bg="bg-yellow"
          icon="ion ion-ios-people-outline"
          :count="dashboardStore.productInfo.productViews"
          unit=""
        ></info-box>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <info-box
          title="Something else"
          bg="bg-red"
          icon="ion ion-ios-people-outline"
          :count="dashboardStore.productInfo.productViews"
          unit=""
        ></info-box>
      </div>
    </div>

    <div class="row">
      <div class="col-md-3">
        <div class="box box-primary">
          <div class="box-header with-border">
            <h3 class="box-title">Recently Added Products</h3>

            <div class="box-tools pull-right">
              <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
              </button>
              <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
            </div>
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <p>This is a content</p>
          </div>
          <!-- /.box-body -->
          <div class="box-footer text-center">
            <a v-link="{name: 'product-search'}" class="uppercase">View All Products</a>
          </div>
          <!-- /.box-footer -->
        </div>
      </div>
      <div class="col-md-3"></div>
      <div class="col-md-3"></div>
      <div class="col-md-3">
        <div class="box box-primary">
          <div class="box-header with-border">
            <h3 class="box-title">Recently Added Products</h3>
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <ul class="products-list product-list-in-box">
              <li class="item" v-for="product in productStore.products | limitBy 4 | orderBy 'created_at' -1">
                <div class="product-img">
                  <img src="/static/images/default-50x50.gif" alt="Product Image">
                </div>
                <div class="product-info">
                  <a v-link="{name: 'product-details', params: {id: product.id}}" class="product-title">{{product.name}}
                    <span class="label label-warning pull-right">{{product.price}}</span></a>
                      <span class="product-description">
                        Samsung 32" 1080p 60Hz LED Smart HDTV.
                      </span>
                </div>
              </li>
              <!-- /.item -->
            </ul>
          </div>
          <!-- /.box-body -->
          <div class="box-footer text-center">
            <a v-link="{name: 'product-search'}" class="uppercase">View All Products</a>
          </div>
          <!-- /.box-footer -->
        </div>
      </div>
    </div>
  </div>
</template>
