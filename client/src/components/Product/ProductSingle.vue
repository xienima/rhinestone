<script>
  export default {
    props: ['product']
  }
</script>

<template>
  <div class="single-product-wrapper">
    <!-- Card start -->
    <div class="col-sm-3">
      <div class="thumbnail" style="padding: 0;">

        <a v-link="{name: 'product-details', params: {id: product.id}}"><img src="http://placehold.it/500x250/EEE" height="127" width="254"></a>

        <div class="caption">
            <h4>
              <a v-link="{name: 'product-details', params: {id: product.id}}">{{product.name}}</a>
            </h4>
            <div class="description">
              <p>
                <strong>Brand</strong>: {{product.brand}} <br>
                <strong>OS</strong>: {{product.os}} <br>
                <strong>Price</strong> {{product.price}}
              </p>
            </div>
            <a href="#" class="btn btn-default btn-xs pull-right" role="button">
              <i class="fa fa-trash"></i>
            </a>
            <a href="#" class="btn btn-info btn-xs" role="button">Button</a>
            <a href="#" class="btn btn-default btn-xs" role="button">
              <span v-if="product.views > 0"><i class="ion ion-eye"></i> {{product.views}}</span>
              <span v-if="product.views < 1">Not viewed</span>
            </a>
        </div>
      </div>
    </div>
    <!-- Card End -->
  </div>
</template>
<style lang="scss">
  .single-product-wrapper {
    h4 {
      font-size: 1em;
      height: 50px;
      overflow: hidden;
    }
    .thumbnail .caption {
      height: 190px;
      overflow: hidden;
    }
  }
</style>
