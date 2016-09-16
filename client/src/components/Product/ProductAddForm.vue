<script>
  import {saveNewMobile} from './productActions'

  export default {
    data () {
      return {
        product: {
          name: '',
          brand: '',
          os: '',
          price: '',
          features: [],
          specs: ''
        }
      }
    },
    methods: {
      addProduct () {
        if (this.$addproduct.valid) {
          this.saveNewMobile(this.product)
        }
      }
    },
    vuex: {
      actions: {
        saveNewMobile
      }
    }
  }
</script>

<template>
  <!-- <pre>{{ $data | json }}</pre> -->
  <div class="panel panel-default">
    <div class="panel-heading">Add a new Product <i class="fa fa-product-hunt pull-right"></i></div>
    <div class="panel-body">
      <validator name="addproduct">
        <form v-on:submit.prevent="addProduct()">
          <div class="form-group">
            <label>Product name</label>
            <input
              type="text"
              class="form-control"
              id="title"
              placeholder="Enter Product name"
              v-model="product.name"
              v-validate:title="{required: {rule: true, message: 'Title is required for a Post'}}"
            >
          </div>

          <div class="form-group">
            <label>Select brand</label>
            <select class="form-control" v-model="product.brand">
              <option value="" selected>SELECT</option>
              <option value="Samsung">Samsung</option>
              <option value="Mi">Mi</option>
              <option value="Lenovo">Lenovo</option>
            </select>
          </div>

          <div class="form-group">
            <label>Select OS</label>
            <select class="form-control" v-model="product.os">
              <option value="" selected>SELECT</option>
              <option value="Android">Android</option>
              <option value="iOS">iOS</option>
              <option value="Windows">Windows</option>
            </select>
          </div>

          <div class="form-group">
            <label>Product price</label>
            <input
              type="text"
              class="form-control"
              id="price"
              placeholder="Enter Product price"
              v-model="product.price"
              v-validate:price="{required: {rule: true, message: 'Product price is required'}}"
            >
          </div>

          <button class="btn btn-primary">
            <i class="fa fa-save"></i> Save
          </button>
        </form>
      </validator>
    </div>
  </div>
</template>
