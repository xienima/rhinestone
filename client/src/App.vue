<template>
  <div class="container-fluid content-wrapper">
    <menu></menu>
    <router-view></route-view>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  components: {
    Hello
  }
}
</script>

<style lang="sass">
@import './assets/css/bootstrap.css'
@import './assets/css/font-awesome.min.css'
@import './assets/css/ionicons.min.css'
@import './assets/css/box.scss'
@import './assets/css/app.scss'
</style>
