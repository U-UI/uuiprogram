<template>
  <div class="conBox">
    <div class="mainBox">
      <h3 >{{coninfo[idxs].title}}</h3>
      <h4>使用指南</h4>
      <ul class="pointer">
        <li v-for="(m,i) in coninfo[idxs].pointer">{{m}}</li>
      </ul>
      <h4>代码演示</h4>
      <ul class="codeShow" >
        <li v-for="(m2,k) in coninfo[idxs].codeShow">{{m2}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ConComponent",
      props:["coninfo","idxs"]
    }
</script>

<style scoped>
  .conBox{
    width: 50%;
    float: left;
    height: 100%;
    /*background: #eee;*/
    overflow-y: auto;
  }
  .conBox::-webkit-scrollbar{
    width: 8px;
    background: #ddd;
    height: 8px;
    border-radius:5px;
  }
  .conBox::-webkit-scrollbar-thumb{
    background: #aaaaaa;
    border-radius: 5px;
  }
  .mainBox{
    overflow-y: auto;
    margin: 100px 30px 30px;
  }
  h3{
    margin: 20px 0;
  }
  h4{
    margin: 10px 0;
  }
  .pointer{
    background: rgb(240,243,247);
    color: #666;
    line-height: 30px;
  }
  .codeShow{
    background: rgb(240,243,247);
    color: #666;
    line-height: 30px;
    margin-bottom: 100px;
  }
</style>
