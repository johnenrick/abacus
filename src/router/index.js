import Vue from 'vue'
import Router from 'vue-router'
import AUTH from 'services/auth'
import ModuleRoutes from './module_routes'

global.jQuery = require('jquery')
require('bootstrap/dist/css/bootstrap.min.css')
require('bootstrap')
require('font-awesome/css/font-awesome.css')
Vue.use(Router)

AUTH.checkAuthentication()

export default new Router({
  routes: ModuleRoutes.routes
})
