<script>
  export default {
    data () {
      return {
        productInfo: {
          title: 'Most viewed mobile',
          count: 85,
          percent: true,
          icon: 'ion ion-eye',
          bg: 'bg-aqua'
        },
        userInfo: {
          title: 'Total users',
          count: 125,
          percent: false,
          icon: 'ion ion-ios-people-outline',
          bg: 'bg-yellow'
        }
      }
    }
  }
</script>
<template>
  <div id="dashboard-wrapper">
    <div class="row">
      <div class="col-md-12">
        <h1 class="page-title">Dashboard</h1>
      </div>
    </div>

    <div class="row">
      <div class="col-md-3 col-sm-6 col-xs-12">
        <info-box :data.sync="productInfo"></info-box>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <info-box :data.sync="userInfo"></info-box>
      </div>
    </div>
  </div>
</template>
