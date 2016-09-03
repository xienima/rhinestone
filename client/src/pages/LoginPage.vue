<script>
  import {doUserLogin} from './../components/User/userActions'

  export default {
    data () {
      return {
        login: {username: 'amitavroy@gmail.com', password: 'password'},
        submit: false
      }
    },
    methods: {
      handleLoginSubmit () {
        this.submit = true
        if (this.$login.valid) {
          this.submit = false
          this.doUserLogin(this.login)
        }
      }
    },
    vuex: {
      actions: {
        doUserLogin
      }
    }
  }
</script>

<template lang="html">
  <div id="login-wrapper">
    <div class="row">
      <div class="col-md-4 col-md-push-4">
        <h1>Login</h1>
        <div class="panel panel-default">
          <div class="panel-heading">Login <i class="fa fa-sign-in pull-right"></i></div>
          <div class="panel-body">
            <validator name="login">
              <form v-on:submit.prevent="handleLoginSubmit()" novalidate>
                <div class="form-group">
                  <label>Username</label>
                  <input type="text"
                    v-model="login.username"
                    id="username"
                    class="form-control"
                    autocomplete="off"
                    placeholder="Enter your username"
                    v-validate:username="{required: { rule: true, message: 'required you username !!' }}">
                    <span v-if="$login.username.required && submit">{{ $login.username.required }}</span>
                </div>

                <div class="form-group">
                  <label>Password</label>
                  <input type="password"
                    v-model="login.password"
                    id="password"
                    class="form-control"
                    autocomplete="off"
                    placeholder="Enter your password"
                    v-validate:password="{required: { rule: true, message: 'required you password !!' }}">
                    <span v-if="$login.password.required && submit">{{ $login.password.required }}</span>
                </div>

                <button class="btn btn-primary">
                  <i class="fa fa-sign-in"></i> Login
                </button>
              </form>
            </validator>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
@import './../assets/css/app.scss'
#login-wrapper
  margin-top: 40px;
  .form-group
    span
      color: $error-color;
</style>
