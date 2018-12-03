<template>
    <div class="componentBox">
        <div class="inputBox">
          <span class="head">http://</span>
          <input class="input1" type="text" placeholder="请输入..." />
        </div>
        <div class="inputBox">
          <input class="input2" type="text" placeholder="请输入内容..." />
          <span class="head2">.com</span>
        </div>
        <div class="inputBox">
          <span class="selectValue">
            <span class="currValue">{{currValue}}</span>
            <ul>
              <li @click="selectfun(idx)" v-for="(m,idx) in selectArr">{{m}}</li>
            </ul>
          </span>
          <input class="input3" type="text" v-model="currValue"/>
          <span class="head3">搜索</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "InputSelect",
        data(){
          return{
            currValue:'请选择',
            selectArr:["搜索项1","搜索项2","搜索项3"]
          }
        },
        methods:{
          selectfun(idx){
            this.currValue = this.selectArr[idx]
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
  .inputBox{
    margin: 30px 3px;
    height: 40px;
    background: #eee;
    border-radius:8px;
    display: flex;
    align-items: center;
    /*overflow: hidden;*/
  }
  .head{
    width: 20%;
    color: #aaaaaa;
    font-size: 14px;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
  .head:hover{
    color: #999999;
    background: #dfdfdf;
    cursor: pointer;
  }
  .inputBox .input1{
    width: 80%;
    height: 38px;
    /*box-sizing: content-box;*/
    border-radius: 0 8px 8px 0;
    border: 1px solid #ccc;
    text-indent: 20px;
  }
  .inputBox input::-webkit-input-placeholder{
    color: #dddddd;
  }
  .head2{
    width: 20%;
    color: #aaaaaa;
    font-size: 14px;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
  .head2:hover{
    color: #999999;
    background: #dfdfdf;
    cursor: pointer;
  }
  .inputBox .input2{
    width: 80%;
    height: 38px;
    border-radius: 8px 0 0 8px;
    border: 1px solid #ccc;
    text-indent: 20px;
  }
  .selectValue{
    width: 20%;
    color: #aaaaaa;
    font-size: 14px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    position: relative;
  }
  .selectValue ul{
    position: absolute;
    top: 40px;
    left: 0px;
    display: none;
  }
  .selectValue ul li{
    text-align: center;
    text-indent: 15px;
    cursor: pointer;
  }
  .selectValue:hover ul{
    display: block;
  }
  .input3{
    width: 70%;
    height: 38px;
    border: 1px solid #ccc;
    text-indent: 20px;
  }
  .head3{
    width: 10%;
    color: #aaaaaa;
    font-size: 14px;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
</style>
