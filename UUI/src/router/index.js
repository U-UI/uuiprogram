import Vue from 'vue'
import Router from 'vue-router'
import show from '../pages/show'
import index from  '../pages/index'
import showpc from '../pages/showpc'
import social from '../pages/social'
import Charts from '../pages/Charts'
import Filters from '../pages/Filters'
import Components from '../pages/ComPage'
import home from "../pages/home"
import widgets from "../pages/widgets"
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
    },
    {path:'/social',component:social},
    {path:'/charts',component:Charts},
    {path:'/filters',component:Filters},
    {path:'/components',component:Components},
    {path:'/home',component:home},
    {path:'/widgets',component:widgets}
  ]
})
