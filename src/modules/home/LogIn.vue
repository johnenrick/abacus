<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 col-sm-offset-3">
        <div class="panel panel-primary">
          <div class="panel-heading">Welcome to Abacus Point of Sale System!</div>
          <div class="panel-body">
            <form class="form-horizontal">
              <div class="form-group">
                <label  class="col-md-2 control-label">Username</label>
                <div class="col-md-10">
                  <input v-model="username" type="text" class="form-control"  placeholder="Username">
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-2 control-label">Password</label>
                <div class="col-md-10">
                  <input v-model="password"  type="password" class="form-control" placeholder="Password">
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-12">
                  <button @click="signIn" type="button" class="btn btn-primary pull-right">Sign in</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ROUTER from '../../router'
import AUTH from '../../services/auth'
export default {
  name: 'LogIn',
  data(){
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signIn(){
      AUTH.authenticate(this.username, this.password)
      ROUTER.go('/')
      // if(AUTH.user.type === 1){
      //   ROUTER.go('/admin')
      // }else{
      //   ROUTER.go('/cashier')
      // }
    }
  }
}
</script>
<style>
</style>
