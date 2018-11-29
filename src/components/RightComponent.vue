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
      props:["rightinfo","idxs"],
      methods:{
          gosrc(i){
            for (let j=0;j<this.rightinfo.length;j++){
              if(j==this.idxs){
                return this.rightinfo[j].src
              }
            }
          }
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
    margin: 90px auto;
    width: 250px;
    height: 500px;
    /*background: #eee;*/
  }
  .iframe{
    width: 250px;
    height: 500px;
    border: 2px solid #eee;
  }
</style>
