<template>
    <div class="header">
        <div class="headerTop">
          <img class="logo" src="/static/img/logo.png" alt="">
          <p class="inputSpan"><i class="iconfont icon-fangdajing"></i><input placeholder="search" type="text" /></p>
          <div class="user">
              <div class="faceBox">
                <img class="face" :src="userface" alt="">
                <div class="username">{{username}}</div>
              </div>
          </div>
          <div class="shezhi">
            <i class="iconfont icon-shezhi"></i>
            <ul>
              <li v-for="(m,idx) in color"><span :style="bgcolor(m)"></span>{{m}}</li>
            </ul>
          </div>
          <div class="youxiang"><i class="iconfont icon-youxiang"></i></div>
        </div>
        <div class="headerBottom">
            <div class="nav" v-for="(m,idx) in nav" @click="goto(idx)">
              <i :class="iconfun(m.icon)"></i>
              <span>{{m.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AllPublicHeader",
      props:["username","userface","color","nav"],
      // data(){
      //     return{
      //       username:"MrChen",
      //       userface:"/static/img/logo2.png",
      //       color:["orange","red","purple","skyblue"],
      //       nav:[
      //         {icon:"icon-shouye",name:"home"},
      //         {icon:"icon-wujiaoxing",name:"social"},
      //         {icon:"icon-z",name:"widgets"},
      //         {icon:"icon-pages",name:"filters"},
      //         {icon:"icon-table2",name:"components"},
      //         {icon:"icon-chartbar",name:"charts"}
      //       ]
      //     }
      // },
      methods:{
          bgcolor(i){
            return `background:${i}`
          },
          iconfun(i){
            return `iconfont ${i}`
          },
          goto(i){
            if(i==1){
              this.$router.push('/social')
            }else if(i==0){
              this.$router.push('/home')
            }
            else if(i==2){
              this.$router.push('/widgets')
            }else if(i==3){
              this.$router.push('/filters')
            }
            else if(i==4){
              this.$router.push('/components')
            } else if(i==5){
              this.$router.push('/charts')
            }
          }
      },
      mounted() {
        window.addEventListener('scroll',function() {
          let header = document.querySelector('.header');
          let  scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          if(scrollTop>46){
            header.style.top = "-46px";
          }else{
            header.style.top = "0px";
          }
        })
      }
    }
</script>

<style scoped>
  .header{
    height: 112px;
    width: 100%;
    background: #ffffff;
    border-bottom: 1px solid #aaa;
    position: fixed;
    z-index: 100;
    transition: all 1s;
  }
  .header .headerTop{
    height: 46px;
    border-bottom: 1px solid #eeeeee;
  }
  .headerTop .logo{
    width: 46px;
    height: 46px;
    margin: 0 20px;
    float: left;
  }
  .inputSpan{
    margin: 8px;
    height:30px;
    float: left;
    position: relative;
  }
  .inputSpan input{
    height: 30px;
    border: 1px solid #ccc;
    border-radius:5px;
    width: 200px;
    box-sizing: content-box;
    text-indent: 30px;
  }
  .inputSpan .iconfont{
    position: absolute;
    top: 7px;
    left: 8px;
  }
  .user{
    float: right;
  }
  .faceBox{
    height: 46px;
    display: flex;
    align-items: center;
    margin: 0 20px;
  }
  .faceBox .face{
    width: 30px;
    height: 30px;
    border-radius:50%;
    overflow: hidden;
    float: left;
  }
  .username{
    float: left;
  }
  .shezhi{
    float: right;
    height: 46px;
    line-height: 46px;
    margin: 0 10px;
    position: relative;
    cursor: pointer;
  }
  .shezhi i{
    font-size: 34px;
    color: #ccc;
  }
  .youxiang{
    float: right;
    height: 46px;
    line-height: 46px;
    margin: 0 10px;
    cursor: pointer;
  }
  .youxiang i{
    font-size: 34px;
    color: #ccc;
  }
  .shezhi:hover ul{
    display: block;
  }
  .shezhi ul{
    position: absolute;
    width: 100px;
    top: 46px;
    left: -10px;
    background: #fff;
    display: none;
  }
  .shezhi ul li{
    height: 32px;
    width: 100px;
    font-size: 14px;
    color: #bbb;
    line-height: 28px;
    border-bottom: 1px solid #eee;
  }
  .shezhi ul li:hover{
    border-bottom-color: rgb(100,68,168);
  }
  .shezhi ul li span{
    display: inline-block;
    margin: 0 10px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
  }
  .headerBottom{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .headerBottom .nav{
    padding: 0 10px;
    height: 65px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .headerBottom .nav:hover{
    background: rgb(243,243,243);
  }
  .nav .iconfont{
    font-size: 26px;
  }
  .nav span{
    color: #666;
  }


</style>
