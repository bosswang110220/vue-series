import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HChart from '@/components/HChart'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/hChart',
      name: 'HChart',
      component: HChart
    },{
      path: '/login',
      name: 'Login',
      component: Login
    },

  ]
})
