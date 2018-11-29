import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import show from '../pages/show'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: show
    },
  ]
})
