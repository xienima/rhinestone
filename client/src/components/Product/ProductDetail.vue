<script>
  export default {
    props: ['data']
  }
</script>

<template>
  <div class="box box-primary">
    <div class="box-header with-border">
      <h3 class="box-title">View product details <span class="pull-right">Viewed {{ data.views }} times</h3>
    </div>
    <!-- /.box-header -->
    <div class="box-body">
      <div class="col-md-6">
        <h2>{{ data.name }}</h2>
      </div>
      <div class="col-md-6">
        <strong>Brand</strong>: {{ data.brand }} <br>
        <strong>Operating System</strong>: {{ data.os }}
        <h3 class="product-price">Rs {{ data.price }}</h3>
      </div>
    </div>
    <!-- /.box-body -->
  </div>
</template>

<style lang="scss">
  h3.product-price {

  }
</style>
