<template>
  <div class="leftBox">
    <h2 class="h2title">开发指南</h2>
    <ul class="uls">
      <li class="lis" @click="fun1(idx)"  v-for="(m,idx) in menuinfo"><a href="#">{{m.title}}</a></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "MenuShowpc",
      props:["menuinfo","clicks","changeView"],
      methods:{
        fun1(idx){
          // showiframe.window.fun(p)
          this.changeView(this.menuinfo[idx].src)
          this.clicks(idx)
        }
      }
    }
</script>

<style scoped>
  .leftBox{
    width: 20%;
    float: left;
    height: 100%;
    overflow: auto;
  }
  .leftBox::-webkit-scrollbar{
    width: 8px;
    background: #ddd;
    height: 8px;
    border-radius:5px;
  }
  .h2title{
    margin:100px 10px 10px;
    font-size: 18px;
    text-align: center;
  }
  .uls{
    border-right: 1px solid #eee;
  }
  .lis{
    margin: 10px;
    text-align: center;
  }
  .lis a{
    color: rgb(68,68,68);
  }
  .lis a:hover{
    color: #0086b3;
  }
</style>
