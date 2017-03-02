<template>
  <div id="app">

      <nav class="navbar navbar-default " v-bind:class="user.type === 2? 'navbar-fixed-top half-width push-half-right' : ''">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Abacus</a>
          </div>
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-clipboard" aria-hidden="true"></i> Product <i class="fa fa-caret-down" aria-hidden="true"></i>
                </a>
                <ul class="dropdown-menu">
                  <li><a href="#"><i class="fa fa-newspaper-o" aria-hidden="true"></i> Product Management</a></li>
                  <li><a href="#"><i class="fa fa-tag" aria-hidden="true"></i> Units</a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-list-alt" aria-hidden="true"></i> Inventory <i class="fa fa-caret-down" aria-hidden="true"></i>
                </a>
                <ul class="dropdown-menu">
                  <li><a href="#"><i class="fa fa-tasks" aria-hidden="true"></i> Stock Adjustment</a></li>
                  <li><a href="#"><i class="fa fa-truck" aria-hidden="true"></i> Supplier</a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-table" aria-hidden="true"></i> Reports <i class="fa fa-caret-down" aria-hidden="true"></i>
                </a>
                <ul class="dropdown-menu">
                  <li><a href="#"><i class="fa fa-file-text-o" aria-hidden="true"></i> X - Reading</a></li>
                  <li><a href="#"><i class="fa fa-file-text-o" aria-hidden="true"></i> Z - Reading</a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-bar-chart" aria-hidden="true"></i> Analytics <i class="fa fa-caret-down" aria-hidden="true"></i>
                </a>
                <ul class="dropdown-menu">
                  <li><a href="#"><i class="fa fa-line-chart" aria-hidden="true"></i> Supply - Demand</a></li>
                  <li><a href="#"><i class="fa fa-line-chart" aria-hidden="true"></i> Inventory Flow</a></li>
                  <li><a href="#"><i class="fa fa-line-chart" aria-hidden="true"></i> Sales Flow</a></li>
                  <li><a href="#"><i class="fa fa-calendar" aria-hidden="true"></i> Activity Calendar</a></li>
                </ul>
              </li>

            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li v-if="user.userID" class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Hi <span class="text-uppercase">{{user.username}}</span>! <i class="fa fa-caret-down" aria-hidden="true"></i></a>
                <ul class="dropdown-menu">
                  <li><a href="#"><i class="fa fa-user" aria-hidden="true"></i> Profile Settings</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a  @click="logOut" ><i class="fa fa-power-off" aria-hidden="true"></i> Log Outs</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="container-fluid">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ROUTER from './router'
import AUTH from './services/auth'
export default {
  name: 'app',
  mounted(){
  },
  data(){
    return {
      user: AUTH.user,
      currentRoute: ROUTER.currentRoute.name
    }
  },
  methods: {
    logOut(){
      AUTH.deaunthenticate()
      ROUTER.go('/')
    }
  }
}
</script>

<style scoped>
.half-width{
  width: 50%
}
.push-half-right{
  margin-left: 50%
}
.nav a{
  font-size: 15px
}
.dropdown-menu li a{
  padding: 10px;
}
</style>
