<script>
  export default {
    props: ['data']
  }
</script>

<template>
  <div class="panel panel-default">
    <div class="panel-heading">View product details <span class="pull-right">Viewed {{ data.views }} times</span></div>
    <div class="panel-body">
      <div class="col-md-6">
        <h2>{{ data.name }}</h2>
      </div>
      <div class="col-md-6">
        <strong>Brand</strong>: {{ data.brand }} <br>
        <strong>Operating System</strong>: {{ data.os }}
        <h3 class="product-price">Rs {{ data.price }}</h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  h3.product-price {

  }
</style>
