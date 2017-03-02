import AUTH from 'services/auth'
import LogIn from 'modules/home/LogIn'
import AdminHome from 'modules/home/AdminHome'
import Cashier from 'modules/cashier/Cashier'

let beforeEnter = (to, from, next) => {
  if(AUTH.user.userID){
    next()
  }else{
    if(to.name !== 'login'){
      next({
        path: '/'
      })
    }else{
      next()
    }
  }

}
export default{
  routes: [
    {
      path: '/',
      name: 'login',
      component: LogIn,
      beforeEnter: (to, from, next) => {
        if(AUTH.user.userID){
          let path = '/cashier'
          if(AUTH.user.type === 1){ // admin
            path = '/admin'
          }
          next({
            path: path
          })
        }else{
          next()
        }
      }
    }, {
      path: '/admin',
      name: 'admin',
      component: AdminHome,
      beforeEnter: beforeEnter
    },
    {
      path: '/cashier',
      name: 'cashier',
      component: Cashier,
      beforeEnter: beforeEnter
    }
  ]
}
