<template>

  <div class="accordionBox">

    <p><img src="/static/img/ico12.png" alt=""><span>Accordion</span></p>
    <div v-for="(a,index) in accordData">
      <p><span>{{a.title}}</span><span @click="showToogle(index)" class="title"  :class="{ bg:changeBg == index}"></span></p>

      <!--content-->
      <div class="show" v-show="isShow">
        <div class="tabCon">
            <p>{{a.content.h1}}</p>
            <br> <span>{{a.content.span}}</span>
          </div>

      </div>

    </div>

  </div>
</template>

<script>


  $(function () {
      //初始时让其隐藏
      let titleList = $(".title");
      let showList = $(".show");

      showList.each(function () {
        showList.css("display","none")
      })
      titleList.click(function () {
        $(this).parent().next().slideToggle()
      })

  })
    export default {
        name: "Accordion",
      data () {
        return {
          accordData:[
            {title:"1.webkcome", content:{"h1":"主题一","span":"dftryhyfegtreyhtyh6judgrvfdthyjuui"}},
            {title:"2.Trkcome", content:{"h1":"主题二","span":"dftryhyfegtreyvvvvvgghtyh6judgrvfdthyjuui"}},
            {title:"3.Summsry And Ques",content:{"h1":"主题三","span":"dftrfdrgtytyyhyfegtreyhtyh6judgrvfdthyjuui"}},

          ],
          isActive:false,
          changeBg:"",
          isShow:false
        }
      },
      methods:{
        showToogle(index){
          this.isActive=!this.isActive,
            // this.isShow=!this.isShow
            this.changeBg=index
        },
      }
    }

</script>

<style scoped lang="scss">

  .bg{
    background: url('../../../static/img/ic.png') no-repeat -45px -5px!important;
  }
  .accordionBox {
    max-width: 360px;
    max-height: 600px;
    background: #fff;
    padding-bottom: 4%;
    margin-bottom: 2.5%;
    p {
      padding-left: 1.5%;
      padding-right: 1%;
      font-size: 16px;
      color: #007aff;
      line-height: 80px;

    }

    div {

      p {
        border: 1px solid #ebebeb;
        background: #f8f8f8;
      }
      p:nth-of-type(1) {
        padding-left: 1.5%;
        padding-right: 1%;
        line-height: 38px;
        display: -webkit-flex;
        display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
        display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
        display: -ms-flexbox; /* TWEENER - IE 10 */
        display: -webkit-flex; /* NEW - Chrome */
        display: flex;
        -webkit-justify-content: space-between;
        font-size: 14px;

        span {
          margin-right: 2%;
          color: #666666;
          border-radius: 5px;
        }
        span:nth-of-type(1) {
          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        }

        span:nth-of-type(2) {
          cursor: pointer;
          display: inline-block;
          width: 25px;
          height: 25px;
          background: url("../../../static/img/ic.png") no-repeat -10px -5px;
        }
      }
    }
  }

  .compontSection {

    display: -webkit-flex;
    display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox; /* TWEENER - IE 10 */
    display: -webkit-flex; /* NEW - Chrome */
    display: flex;
    overflow: hidden;
  }

  .sectionLeft {
    width: 49.5%;
    overflow: hidden;
    margin-right: 1.5%;
  }

  .sectionRight {
    width: 49.5%;
    overflow: hidden;

  }

  .title {
    font-size: 12px;
    color: #667aa3;
  }



  .tabCon {
    background: #fff;
    padding-left: 1.5%;
    padding-right: 1%;
    padding-bottom: 4%;
    margin-bottom: 2.5%;
      p {
        color: #6a6666;
        background: #fff!important;

        border: 0!important;
        padding-top: 1%;
        text-indent: 8%;
        line-height: 20%;
      }
      span {
        text-indent:4%;
        display: inline-block;
        font-size: 13px;
        color: #666666;
        line-height: 24px;
      }
  }
</style>
