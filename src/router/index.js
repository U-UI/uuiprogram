import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import show from '../pages/show'
import index from  '../pages/index'
import showpc from '../pages/showpc'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path:'/show',
      component:show
    },
    {
      path:'/showpc',
      component:showpc
    }
  ]
})
