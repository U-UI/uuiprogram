<template>
  <div class="rightBox">
    <div class="show">
      <div class="top">
      </div>
      <iframe class="iframe" name="showiframe" src="/static/mobile/mobile.html"></iframe>
      <div class="bottom"></div>
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
  .top{
    width: 100px;
    height: 11px;
    border-radius: 40px;
    border: 1px solid black;
  }
  .bottom{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border:1px solid gray;
  }
  .rightBox{
    width: 30%;
    float: left;
    height: 100%;
    /*background: #fff;*/
    /*background-color: deeppink;*/
  }
  .show{
    margin: 50px auto;
    width: 400px;
    height: 780px;
    /*background: #eee;*/
    background-color: white;
    display: -webkit-flex;
    flex-direction: column;
    -webkit-align-items: center;
    -webkit-justify-content: space-around;
    border-radius: 38px;
  }
  .iframe{
    width: 360px;
    height: 650px;
    border: 2px solid #eee;
  }
  .iframe::-webkit-scrollbar{
    display: none;
  }
</style>
