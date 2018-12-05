<template>
  <div class="componentBox">
    <div class="tabs">
      <ul>
        <li v-for="(m,idx) in tabs" @click="selectfun(idx)">{{m}}</li>
      </ul>
      <div class="pages">{{pagesText}}</div>
    </div>
    <div class="tabs">
      <ol>
        <li v-for="(m,idx) in tabs2" @click="selectfun2(idx)">{{m}}</li>
      </ol>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Tabs",
      data(){
          return{
            pagesText:'',
            tabs:['用户管理','配置管理','角色管理','定时任务补偿'],
            tabs2:['选项一','选项二','选项三','选项四','选项五']
          }
      },
      methods:{
          selectfun(idx){
            this.pagesText = this.tabs[idx]
            let h = document.querySelectorAll('.tabs ul li');
            for(let i=0;i<h.length;i++){
              h[i].style.borderBottomColor = '#eeeeee'
              h[i].style.backgroundColor = '#f7f7f7'
            }
            h[idx].style.borderBottomColor = 'transparent'
            h[idx].style.backgroundColor = 'transparent'
          },
          selectfun2(idx){
            let w = document.querySelectorAll('.tabs ol li');
            for (let j=0;j<w.length;j++ ){
              w[j].style.borderRightColor = '#eeeeee'
              w[j].style.backgroundColor = '#f7f7f7'
              w[j].style.color = '#999999'
            }
            w[idx].style.borderRightColor = 'transparent'
            w[idx].style.backgroundColor = 'transparent'
            w[idx].style.color = 'skyblue'
          }
      }
    }
</script>

<style scoped>
  .componentBox{
    padding: 30px 0 0 0;
    max-width: 360px;
    max-height: 600px;
  }
  .tabs{
    width: 100%;
    text-align: center;
  }
  .tabs ul{
    width: 100%;
    overflow: hidden;
  }
  .tabs ul li{
    float: left;
    padding: 5px 8px;
    border: 1px solid #EEEEEE;
    background: #f7f7f7;
    color: skyblue;
    cursor: pointer;
    font-size: 14px;
  }
  .tabs .pages{
    height: 100px;
    line-height: 100px;
    color: #999999;
  }
  .tabs ol{
    width: 100%;
  }
  .tabs ol li{
    font-size: 14px;
    color: #999999;
    cursor: pointer;
    background: #f7f7f7;
    border: 1px solid #EEEEEE;
    width: 70px;
    padding: 5px;
  }
  .tabs ol li:first-child{
    color: skyblue;
    background-color: transparent;
    border-right-color: transparent;
  }
</style>
