<template>
  <div class="soncons">
    <div class="john">
      <div class="john_left">
        <img :src="obj.imgpath" alt="">
        <span>Jhon Simth</span>
        <span>on 13/08/2013</span>
      </div>
      <ul>
        <li><img src="/static/image/star.jpg" alt=""></li>
        <li><img src="/static/image/star.jpg" alt=""></li>
        <li><img src="/static/image/star.jpg" alt=""></li>
        <li><img src="/static/image/star.jpg" alt=""></li>
        <li><img src="/static/image/star.jpg" alt=""></li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
      name: "RollodexSon",
      props:["idx","obj"],
      methods:{
        _emits(){
          console.log("son")
         this.$emit("test")
        }
      },
      mounted(){
        console.log("李小强")
          this._emits()
      }
    }
</script>

<style lang="scss" scoped>
  .soncons{
    border-bottom: 1px solid #ebebeb;
    .john{
      display: -webkit-flex;
      -webkit-justify-content: space-between;
      -webkit-align-items: center;
      height: 46px;
      .john_left{
        display: -webkit-flex;
        -webkit-align-items: center;
        span{
          display: block;
        }
        span:nth-of-type(1){
          color: #007aff;
          font-size: 24px;
          margin-left: 10px;
        }
        span{
          color: #b0c5de;
          margin-left: 10px;
        }
        img{
          width: 30px;
          height: 30px;
        }
      }
      ul{
        display: -webkit-flex;
        li{
          display: -webkit-flex;
          img{
            width:20px;
            height: 20px;
          }
        }
      }
    }
  }
</style>
