<template>
  <div class="formCheckBox">
    <p>
      用&nbsp;&nbsp;户&nbsp;&nbsp;名：<input @check="checkname" type="text" v-model="name" placeholder="请输入用户名">
      <span>{{msgame}}</span>
    </p>
    <p>
      邮&nbsp;&nbsp;箱&nbsp;&nbsp;号：<input @change="checkemail" type="text" v-model="email" placeholder="请输入邮箱">
      <span>{{msgmail}}</span>
    </p>
    <p>
      电话号码：<input @change ="checkphone" type="text" v-model = "phone" placeholder="手机" id="phone">
      <span>{{msgphone}}</span>
    </p>
    <p>
      密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：<input @change="checkpassword" type="password" v-model="password" placeholder="密码" id="test">
      <span>{{msgpassword}}</span>
    </p>
    <p>
      重复密码：<input @change="checkpwd" type="password" v-model="pwd" placeholder="重复密码" id="test1">
      <span>{{msgpwd}}</span>
    </p>
    <div class="box">
      <p class="focus">
        性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：
      </p>
      <div class="sexBox">
        <span v-for="item,index in sex">
            <input type="radio" name="sex" :value="index">{{item}}
        </span>
      </div>
    </div>
    <p>
      年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄：<input @change="checkage" type="number" v-model="age" placeholder="年龄">
      <span>{{msgage}}</span>
    </p>
    <p>
      个人介绍：
      <textarea v-model="desc"></textarea>
    </p>
    <p>
      出生年月：<input type="datetime-local" v-model="birthday">
    </p>
    <p>
      家庭地址：<select >
      <option :value="index" v-for="item,index in city">{{item}}</option>
    </select>
    </p>
  </div>
</template>

<script>
    export default {
        name: "FormCheck",
      data(){
        return{
          msgame:'',
          msgmail:'',
          msgpassword:'',
          msgpwd:'',
          msgage:'',
          msgphone:'',
          name:'',
          email:'',
          password:'',
          pwd:"",
          phone:"",
          age:"",
          desc:"hello",
          birthday:"",
          sex:{
            girl:"女",
            boy:"男",
          },
          city:{
            "sz":"宿州",
            "cz":"滁州",
            "la":"六安",
            "hn":"淮南",
          }
        }
      },
      methods:{
        checkname:function(){
          if(this.name=""){
            this.msgame = "用户名不能为空";
          }else{
            this.msgame ="";
          }
        },
        checkemail:function(){
          var regEmail=/^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
          if(this.email==''){
            this.msgmail="请输入邮箱";
          }else if(!regEmail.test(this.email)){
            this.msgmail="邮箱格式不正确";
          }
        },
        checkpassword:function(){
          var pwdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;//
          var value = $('#test').val();
          if(this.password==""){
            this.msgpassword = "密码不能为空"
          }else if(!pwdReg.test(value)){
            this.msgpassword = "密码不合法";
          }else{
            this.msgpassword = "密码合法";
          }
        },

        checkpwd:function(){
          if(this.pwd==""){
            this.msgpassword ="密码不能为空"
          }else if(this.pwd !=this.password){
            this.msgpwd = "输入密码保持一致"
          }else{
            this.msgpwd ="输入密码正确"
          }
        },
        checkphone:function(){
          var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
          if(this.phone==""){
            this.msgphone="手机号不能为空";
          }else if(!myreg.test($("#phone").val())){
            this.msgphone="请输入有效的手机号码";
          }else{
            this.msgphone="输入正确"
          }
        },
        checkage:function(){
          if(this.age==""){
            this.msgage = "年龄不能为空"
          }else{
            this.msgage="输入正确"
          }
        },
      }
    }
</script>

<style scoped lang="scss">
  .box{
    display: -webkit-flex;
    display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox; /* TWEENER - IE 10 */
    display: -webkit-flex; /* NEW - Chrome */
    display: flex;
  }
  .sexBox{
    display: inline-block!important;
    width: 200px!important;
    margin-left: 30%;
    padding-top: 1%;
    span{
      margin-left: 5%;
    }
  }
  .focus{
    width: 40px!important;
  }
  .formCheckBox{

    width: 360px;
    max-height: 600px;
    background:#fff;
    overflow: hidden;
    padding-left: 1%;

    p{

      display: -webkit-flex;
      display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
      display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
      display: -ms-flexbox; /* TWEENER - IE 10 */
      display: -webkit-flex; /* NEW - Chrome */
      display: flex;
      /*-webkit-justify-content:space-around;*/
      font-size: 16px;
      line-height: 40px;
      color: #000;


      input,textarea{
        text-indent: 2%;
        width: 56%;
        margin-left:20%;
        height: 30px;
        font-size: 12px;
        color: #666666;

      }
      textarea{
        height:100px;
      }
      select{
        margin-left: 20%;
      }
    }
  }
  .focus{
    display: -webkit-flex;
    display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox; /* TWEENER - IE 10 */
    display: -webkit-flex; /* NEW - Chrome */
    display: flex;
    line-height: 60px;
    span{
      margin-left: 20%;
      input{
        height: 30px;
        display: inline-block!important;
      }
    }
  }
</style>
