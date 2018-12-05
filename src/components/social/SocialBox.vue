<template>
    <div class="sboxWraps">
        <div class="box sbox" >
            <div class="headinfo">
              <img :src="card.hostface" alt="">
              <div class="rightinfo">
                  <h3>{{card.hostname}} <i @click="fold(keys)" class="iconfont icon-sanjiao1"></i></h3>
                  <p>{{card.hosttime}}</p>
              </div>
            </div>
            <div class="text">
              {{card.hosttext}}
            </div>
            <div class="zai">
                <i @click="zan" class="iconfont icon-zan"></i>
                <i class="iconfont icon-fenxiang"></i>
            </div>
          <ul class="otherpersonWrap">
            <li class="otherperson" v-for="(m,idx2) in card.othersay">
              <div class="headinfo">
                <img :src="m.otherface" alt="">
                <div class="rightinfo">
                  <h3>{{m.othername}}</h3>
                  <p>{{m.othertime}}</p>
                </div>
              </div>
              <div class="text">
                {{m.othertext}}
              </div>
            </li>

          </ul>
          <div class="inputBox">
            <input placeholder="Add a commentt.." type="text"/>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SocialBox",
        props:["userface","username","card","saying","fold","keys"],
        data(){
          return{
            statusZai:false
          }
        },
        methods:{
            zan(){
              let shou = document.querySelectorAll('.icon-zan')[this.keys];
              if(this.statusZai==false){
                shou.style.transform = 'scale(1.4)'
                shou.style.top = '0px'
                shou.style.color = 'red'
                shou.style.opacity = 0;
                setTimeout(function () {
                  shou.style.top = '20px'
                },800)
                setTimeout(function () {
                  shou.style.opacity = 1;
                },1200)
              }else{
                shou.style.color = '#999'
              }
              this.statusZai = !this.statusZai
            }
        },
        mounted() {
          let tt = document.querySelectorAll('.sboxWraps .inputBox');
          for(let j=0;j<tt.length;j++){
            tt[j].onkeydown =  (e)=> {
                if(e.keyCode==13){
                  let texts = document.querySelectorAll('.sboxWraps .inputBox input')[j].value
                  document.querySelectorAll('.sboxWraps .inputBox input')[j].value = ''
                  this.saying(j,texts)
                }
            }
          }
        }
    }
</script>

<style scoped>
  .sboxWraps{
    width: 20%;
    float: left;
    transition: all 1s;
  }
  .box{
    margin: 20px;
    background: #fff;
    min-height: 200px;
    overflow: hidden;
  }
  .headinfo{
    height: 70px;
    overflow: hidden;
  }
  .headinfo img{
    width: 50px;
    height: 50px;
    float: left;
    border-radius:50%;
    margin: 10px;
  }
  .headinfo .rightinfo{
    float: left;
    overflow: hidden;
  }
  .rightinfo h3{
    font-weight: 100;
    line-height: 40px;
    color:rgb(69,150,251);
  }
  .rightinfo h3 i{
    margin-left: 20px;
    cursor: pointer;
  }
  
  .rightinfo p{
    font-size: 12px;
    color: #aaa;
  }
  .text{
    color: #999;
    font-size: 14px;
    padding: 0 15px;
  }
  .zai{
    color: #999;
    font-size: 16px;
    padding: 10px 15px;
    height: 36px;
    position: relative;
  }
  .zai i{
    margin: 0 5px;
    cursor: pointer;
    transition: all 1s;
    position: absolute;
  }
  .zai .icon-zan{
    top: 20px;
  }
  .zai .icon-fenxiang{
    margin: 10px 60px;
  }
  .otherpersonWrap{
    max-height: 200px;
    min-height: 200px;
    overflow-y: auto;
  }
  .otherperson{
    background: rgb(245,245,245);
  }
  .inputBox{
    height: 72px;
    text-align: center;
  }
  .inputBox input{
    height: 36px;
    width: 80%;
    margin-top: 15px;
    border: 1px solid #ccc;
    border-radius:5px;
    text-indent: 20px;
    color: #bbb;
    background: #fff;


  }
  .inputBox input::-webkit-input-placeholder{
    color: #bbb;
  }

  @media screen and (max-width: 1700px) {
    .sboxWraps{
      width: 24%;
    }
  }
  @media screen and (max-width: 1400px){
    .sboxWraps{
      width: 33%;
    }
  }
  @media screen and (max-width: 1080px) {
    .sboxWraps{
      width: 50%;
    }
  }
  @media screen and (max-width: 666px){
    .sboxWraps{
      width: 100%;
    }
  }

</style>
