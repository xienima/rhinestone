<script>
  import {setUserDataFromLocalStorage, doUserLogout} from './User/userActions'

  export default {
    created () {
      if (this.userStore.authUser === null) {
        // this.$router.go('dashboard')
        const authUser = JSON.parse(window.localStorage.getItem('authUser'))
        if (authUser) {
          this.setUserDataFromLocalStorage(authUser)
        } else {
          this.$router.go('/')
        }
      }
    },
    methods: {
      doLogout () {
        window.localStorage.removeItem('authUser')
        this.doUserLogout()
        this.$router.go('/')
      }
    },
    vuex: {
      getters: {
        userStore: state => state.userStore
      },
      actions: {
        setUserDataFromLocalStorage, doUserLogout
      }
    }
  }
</script>
<template>
  <!-- <pre>{{ userStore | json }}</pre> -->
  <nav class="navbar navbar-default" v-if="userStore.authUser">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" v-link="{name: 'dashboard'}">Rhinestone</a>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li><a v-link="{name: 'dashboard'}">Dashboard</a></li>
          <li><a v-link="{name: 'forum'}">Forum</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              {{userStore.authUser.name}} <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="javascript:void(0)" v-on:click="doLogout()">Logout</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style lang="scss">
  .navbar-default .navbar-nav > li > a.v-link-active {
    color: #333333;
  }
</style>
