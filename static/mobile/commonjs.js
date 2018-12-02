(function () {
  //============导航波动组件=======
  var NavComponent=Vue.component("NavComponent",{
    props:["nav"],
    template:`<div class="navBox" ><h1 class="title nav">导航波动组件</h1><div class="all-sort-nav sell-good-book"><a href="javascript:;" v-for="i in nav">{{i}}</a></div></div>`
  })
  new Vue({
    el:"#app",
    data:{
      navData:["推荐","VIP","小说","直播","广播","其它","VIP","爱情言情","田园"],
    }
  })
})()