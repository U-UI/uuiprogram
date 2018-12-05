<template>
  <div class="header">
    <img src="/static/img/logo.png" alt="">
    <span class="webname" @click="goto('index')">U-UI</span>
    <span class="nav"><a href="/static/about/about.html" style="color:black">关于我们</a></span>
    <span class="nav orginNav" >文档
      <ul>
          <li @click="goto('show')">webapp</li>
          <li @click="goto('showpc')">后台</li>
          <li @click="goto('home')">案例</li>
      </ul>
    </span>
  </div>
</template>

<script>
    export default {
        name: "HeaderComponent",
        methods:{
          goto(i){
            if (i=="index"){
              this.$router.push('/')
            }else if(i=='show'){
              this.$router.push('/show')
            }else if (i=='showpc'){
              this.$router.push('/showpc')
            }else if(i=='home'){
              this.$router.push('/home')
            }
          }
        }
    }
</script>

<style scoped>
  .header{
    width: 100%;
    height: 70px;
    background: #ffffff;
    border-bottom: 1px solid #eeeeee;
    /*position: fixed;*/
  }
  .header img{
    width: 50px;
    height: 50px;
    margin: 10px;
    float: left;
  }
  .header .webname{
    font-size: 32px;
    float: left;
    margin-top: 20px;
    cursor: pointer;
  }
  .header .nav{
    float: right;
    padding: 0 50px;
    display: block;
    height: 70px;
    line-height: 70px;
    border-bottom: 1px solid transparent;
    cursor: pointer;
  }
  .header .nav:hover{
    background: #f9f9f9;
    /*border-bottom-color: blue;*/
  }
  .header .orginNav{
    position: relative;
  }
  .header .orginNav ul{
    display: none;
    padding: 0 50px;
    color: #000;
    background: #f9f9f9;
    position: absolute;
    top: 70px;
    left: 0px;
    z-index: 100;
  }
  .header .orginNav:hover ul{
    display: block;
  }
</style>
