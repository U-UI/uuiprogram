<template>
  <div class="header">
    <img src="/static/img/logo.png" alt="">
    <span class="webname">U-UI</span>
    <span class="nav">关于我们</span>
    <span class="nav">文档</span>
  </div>
</template>

<script>
    export default {
        name: "HeaderComponent"
    }
</script>

<style scoped>
  .header{
    width: 100%;
    height: 70px;
    background: #ffffff;
    border-bottom: 1px solid #eeeeee;
    position: fixed;
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
  }
  .header .nav{
    float: right;
    padding: 0 30px;
    display: block;
    height: 70px;
    line-height: 70px;
    border-bottom: 1px solid transparent;
    cursor: pointer;
  }
  .header .nav:hover{
    color: blue;
    font-size: 20px;
    border-bottom-color: blue;
  }
</style>
