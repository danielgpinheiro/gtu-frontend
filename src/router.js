import Vue from 'vue'
import Router from 'vue-router'
import {
  Auth
} from './views'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/auth' },
    {
      path: '/auth',
      name: 'auth',
      component: Auth
    }
  ]
})
