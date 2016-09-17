<script>
  import {getDashData} from './../components/Dashboard/dashboardActions'

  export default {
    created () {
      this.getDashData()
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
        dashboardStore: state => state.dashboardStore
      },
      actions: {
        getDashData
      }
    }
  }
</script>
<template>
  <div id="dashboard-wrapper">
    <!-- <pre>{{ dashboardStore | json }}</pre> -->
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
          icon="ion ion-ios-cart-outline""
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
  </div>
</template>
