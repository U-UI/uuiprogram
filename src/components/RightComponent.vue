<template>
  <div class="rightBox">
    <div class="show">
      <iframe class="iframe" name="showiframe" src="/static/mobile/mobile.html"></iframe>
    </div>
  </div>
</template>

<script>

    export default {
        name: "RightComponent",
      props:["rightinfo","idxs","parentmethods"],
      methods:{
          // gosrc(i){
          //   for (let j=0;j<this.rightinfo.length;j++){
          //     if(j==this.idxs){
          //       return this.rightinfo[j].src
          //     }
          //   }
          // }
      }
    }
</script>

<style scoped>
  .rightBox{
    width: 30%;
    float: left;
    height: 100%;
    background: #fff;
  }
  .show{
    margin: 50px auto;
    width: 300px;
    height: 540px;
    /*background: #eee;*/
  }
  .iframe{
    width: 300px;
    height: 540px;
    border: 2px solid #eee;
  }
  .iframe::-webkit-scrollbar{
    display: none;
  }
</style>
