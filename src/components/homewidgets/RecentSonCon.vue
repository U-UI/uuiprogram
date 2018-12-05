<template>
    <div class="soncons">
      <div class="john">
        <div class="john_left">
          <img :src="imgpath.imgpath" alt="">
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
      <p>
        thank you very much this world would you like this world ,the address is my hourse
        thank you very much this world would you like this world ,the address is my hourse
        thank you very much this world would you
      </p>
    </div>
</template>

<script>
    export default {
        name: "RecentSonCon",
      props:["imgpath"],
      mounted(){
          console.log(55)
          console.log(this.imgpath)
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
      p{
        color: #66668f;
        padding:15px 0 20px 0;
      }
    }
</style>
