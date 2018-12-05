<template>
  <div class="compontSection">
    <!--左部分sectionleft-->

    <div class="sectionLeft">
      <!--进度条-->
      <div class="ProgressBarsBox">
        <h4><img src="../../assets/img/ico2.png" alt="">Progress Bars</h4>
        <p class="title">General</p>
        <div class="processBar1">
          <p>
            <span></span><span></span>
          </p>

        </div>
        <div>
          <p class="processBar2">
            <span></span><span></span>
          </p>

        </div>
        <div>
          <p class="processBar3">
            <span></span><span></span>
          </p>
        </div>
        <div>
          <p class="processBar4">
            <span></span><span></span>
          </p>
        </div>
        <p class="title">Animated</p>
        <div class="processBar1">
          <p>
            <span></span><span></span>
          </p>

        </div>
        <div>
          <p class="processBar2">
            <span></span><span></span>
          </p>

        </div>
        <div>
          <p class="processBar3">
            <span></span><span></span>
          </p>
        </div>
        <div>
          <p class="processBar4">
            <span></span><span></span>
          </p>
        </div>

        <p class="title">Stacked</p>
        <div>
          <p class="processBar7">
            <span></span><span></span><span></span><span></span>
          </p>
        </div>
      </div>
      <!--tab切换-->
      <div class="tabsBox">

        <ul>
          <p><img src="../../assets/img/ico4.png" alt=""><span>Tabs</span></p>
          <li v-for="(item,index) in tabs" @click="tab(index)"
              :class="{ red:changeRed == index}"
          ><span :class="{active:index == num}">{{item}}</span></li>
        </ul>
        <div class="tabCon">
          <div v-for='(itemCon,index) in tabContents' v-show=" index == num"

          >
            <p>{{itemCon.title}}</p>
            <br> <span>{{itemCon.cont}}</span>
          </div>
        </div>

      </div>
      <!--table-->
      <div class="tableBox">
        <p><img src="../../assets/img/ico5.png" alt=""><span>Labels</span></p>
        <div v-for="(t,i) in table" :key="i">
          <p><span>{{t.title}}</span><span>{{t.h1}}</span></p>
          <p>
            <span v-for="(s,i) in t.spanCon" :style="getColor(i)">{{s}}</span>
          </p>
        </div>
      </div>
      <!--Tooptip-->
      <div class="toopTipBox">

        <tool-tip></tool-tip>
        <tool-tip></tool-tip>

      </div>

      <!--Modal部分-->

      <div class="modelBox">
        <p><img src="../../assets/img/ico7.png" alt=""><span>Modal</span></p>
        <div>
          <p><span>bootsrapModel</span><span>grrhth</span></p>
        </div>
      </div>


    </div>

    <!--右部分sectionright-->
    <div class="sectionRight">

      <!--slider部分-->
      <div class="sliderBox">
        <h4><img src="../../assets/img/ico8.png" alt="">Sliders</h4>
        <slider-process></slider-process>
        <slider-process></slider-process>
        <slider-process></slider-process>
      </div>

      <!--alert部分-->

      <div class="alertsBox">
        <h4><img src="../../assets/img/ico3.png" alt="">Alert</h4>

        <p class="span1" v-for="(a,index) in alert">
          <span>{{a.con}}</span>
          <span>{{a.num}}</span>
          <span class="spanDel" @click="del"></span>
        </p>
      </div>

      <!--Accordion部分-->


      <div class="accordionBox">

        <p><img src="../../assets/img/ico12.png" alt=""><span>Accordion</span></p>
        <div v-for="(a,index) in accordData">
            <p><span>{{a.title}}</span><span @click="showToogle(index)" class="title"  :class="{ bg:changeBg == index}"></span></p>

            <!--content-->
            <div class="show">
            <accord-content :con="a.content"></accord-content>
            </div>

        </div>

      </div>


      <!--page部分-->
      <div class="PaginationBox">
        <p><img src="../../assets/img/ico8.png" alt=""><span>page</span></p>
        <div class="pageBox">
          <div class="page_left">
            <p>
              <span></span>
              <span :class="{blue:changeBlue==index}" @click="blues(index)"
                    v-for="(p,index) in pageData">{{p.page}}</span>

              <span></span>
            </p>
            <p>
              <span></span>
              <span v-for="(p,index) in pageData" :class="{blue:changeB==index}"
                    @click="blucolor(index)">{{p.page}} </span>
              <span></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import $ from "jQuery"
  import ToolTip from "./ToolTip";
  import AccordContent from "./AccordContent";
  import SliderProcess from "./SliderProcess";
  import index from "../../router";

  $(function () {
    //初始时让其隐藏
    let titleList = $(".title");
    let showList = $(".show");

    showList.each(function () {
      showList.css("display", "none")
    })
    titleList.click(function () {
      $(this).parent().next().slideToggle()
    })

  })

  export default {
    name: "ComSection",
    components: {SliderProcess, AccordContent, ToolTip},
    props: ["tabs", "tabContents", "alert",
      "num", "table",
      "changeRed"
      , "index"
    ],
    data() {
      return {
        accordData:[
          {title:"1.webkcome", content:{"h1":"gtrh","span":"dftryhyfegtreyhtyh6judgrvfdthyjuui"}},
          {title:"2.Trkcome", content:{"h1":"gtrhdfrg","span":"dftryhyfegtreyvvvvvgghtyh6judgrvfdthyjuui"}},
          {title:"3.Summsry And Ques",content:{"h1":"fdvfbf,oogtrh","span":"dftrfdrgtytyyhyfegtreyhtyh6judgrvfdthyjuui"}},

        ],
        pageData: [{"page": "1"}, {"page": "2"}, {"page": "3"}, {"page": "4"}, {"page": "5"}],
        changeBlue: 0,
        changeB: 0,
        da: [],
        colorData: ["#999999", "#007aff", "#60c560", "#f0ad4e", "#d9534f", "#5bc0de"],
        isActive:false,

        changeBg:""
      }
    },
    methods: {
      //箭头显示
      showToogle(index){
        this.isActive=!this.isActive,
          this.changeBg=index
      },
      //label变色
      getColor(k) {
        return `background:${this.colorData[k]}`
      },
      blucolor: function (index) {
        this.changeB = index
      },
      blues: function (index) {
        this.changeBlue = index
      },

      tab(index) {
        this.$emit("tab", index);
        this.changeRed = index;
      },

      del: function () {
        this.$emit("watch", this.index)
      },
    },
  }
</script>

<style scoped lang="scss">

  //label变色

  .bg{
    background: url('../../assets/img/ic.png') no-repeat -45px -5px!important;
  }

  @media screen and (max-width: 746px) {

    .compontSection {
      display: -webkit-flex;
      -webkit-flex-direction: column;
      -webkit-flex-direction: column;
      -webkit-flex-direction: column;
      -moz-flex-direction: column;
      -ms-flex-direction: column;
      -o-flex-direction: column;
      flex-direction: column;

    }

    .sectionRight {
      width: 100% !important;
    }
    .sectionLeft {
      width: 100% !important;
    }
    .toopTip {
      width: 100% !important;
      margin-bottom: 2%;

    }
    .toopTipBox {
      padding-right: 0 !important;
      padding-left: 0 !important;
      padding-bottom: 0 !important;
      display: -webkit-flex;
      -webkit-flex-direction: column;
      -webkit-flex-direction: column;
      -webkit-flex-direction: column;
      -moz-flex-direction: column;
      -ms-flex-direction: column;
      -o-flex-direction: column;
      flex-direction: column;
    }

  }

  .sliderBox {

    padding-left: 2%;
    padding-right: 2%;
    background: #ffffff;
    padding-bottom: 4%;
    border-bottom: 1px solid #f2f2f2;
    overflow: hidden;
    margin-bottom: 2%;

  }

  .processBar1 {
    position: relative;
  }

  .sliderBox img {
    width: 14px;
    height: 16px;
    margin-right: 1%;
  }

  .sliderBox h4 {
    color: #007aff;
    line-height: 43px;
  }

  /**

  ===================accordionBox部分
   */

  .accordionBox {
    background: #fff;
    padding-bottom: 4%;
    margin-bottom: 2.5%;
    p {
      padding-left: 1.5%;
      padding-right: 1%;
      font-size: 16px;
      color: #007aff;
      line-height: 50px;

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
          background: url("../../assets/img/ic.png") no-repeat -10px -5px;
        }
      }
    }
  }

  .compontSection {
    /*height: 500px;*/
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

  /*---------进度条*/

  .ProgressBarsBox {
    padding-left: 2%;
    padding-right: 2%;
    background: #ffffff;
    padding-bottom: 4%;
    border-bottom: 1px solid #f2f2f2;
    overflow: hidden;
    margin-bottom: 2%
  }

  .ProgressBarsBox img {
    width: 14px;
    height: 16px;
    margin-right: 1%;
  }

  .ProgressBarsBox h4 {
    color: #007aff;
    line-height: 43px;
  }

  .ProgressBarsBox p {
    line-height: 35px;
  }

  .ProgressBarsBox p:nth-of-type(2) {
    line-height: 24px;
  }

  .ProgressBarsBox p:nth-of-type(2) span:nth-of-type(1) {
    margin-right: 12%;
  }

  .ProgressBarsBox span {
    color: #999999;
    font-size: 14px;
  }

  .ProgressBarsBox p:nth-of-type(1) span {
    height: 12px;
    display: inline-block;
  }

  .ProgressBarsBox p:nth-of-type(1) span:nth-of-type(1) {
    width: 50%;
    background: #007aff;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  .ProgressBarsBox p:nth-of-type(1) span:nth-of-type(2) {
    width: 50%;
    background: #e1e1e1;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  .processBar2 span:nth-of-type(1) {
    width: 50%;
    background: #60c560 !important;
  }

  .processBar2 span:nth-of-type(2) {
    width: 50%;
  }

  .processBar3 span:nth-of-type(1) {
    width: 30%;
    background: #f0ad4e !important;
  }

  .processBar3 span:nth-of-type(2) {
    width: 70%;
  }

  .processBar4 span:nth-of-type(1) {
    width: 70%;
    background: #d9534f !important;
  }

  .processBar4 span:nth-of-type(2) {
    width: 30%;
  }

  .processBar7 span:nth-of-type(1) {
    width: 30% !important;
    background: #60c560 !important;
  }

  .processBar7 span:nth-of-type(2) {
    width: 20% !important;;
    background: #f0ad4e !important;
    border-top-right-radius: 0px;
  }

  .processBar7 span:nth-of-type(3) {
    width: 30% !important;
    height: 10px;
    background: #d9534f !important;
  }

  .processBar7 span:nth-of-type(4) {
    width: 20% !important;;
    background: #e1e1e1 !important;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  /*====tab切换*/

  .red {
    color: #666a91;
    background: #fff;
    border: 1px solid #e6e6e6;
    border-bottom: 0;
    cursor: pointer;

  }

  .tabsBox p {
    font-size: 16px;
    color: #007aff;
    line-height: 50px;
    margin-right: 15%;

  }

  .tabsBox ul {
    color: #007aff;
    display: -webkit-flex;
    display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox; /* TWEENER - IE 10 */
    display: -webkit-flex; /* NEW - Chrome */
    display: flex;
    position: relative;
    p {
      margin-left: 1%;
    }
    li {
      line-height: 50px;
      width: 25%;
      text-align: center;
      &:hover {
        cursor: pointer;
      }
    }
  }

  .tabCon {
    background: #fff;
    padding-left: 1.5%;
    padding-right: 1%;
    padding-bottom: 4%;
    margin-bottom: 2.5%;
    div {

      p {
        font-size: 18px !important;
        color: #6a6666;
        border-top: 1px solid #e6e6e6;
        padding-top: 1%;
      }
      span {
        display: inline-block;
        font-size: 14px;
        color: #666666;
        line-height: 24px;
      }
    }
  }

  /**
  ============lable
   */

  .tableBox {
    background: #fff;
    padding-left: 1.5%;
    padding-right: 1%;
    padding-bottom: 4%;
    margin-bottom: 2.5%;
    p {
      font-size: 16px;
      color: #007aff;
      line-height: 50px;

    }

    div {
      text-align: center;
      p:nth-of-type(1) {

        span:nth-of-type(1) {
          color: #666666;
          font-size: 18px;
        }
        span:nth-of-type(2) {
          line-height: 39px;
          height: 39px;
          color: #fff;
          font-size: 16px;
          display: inline-block;
          padding-left: 1%;
          padding-top: 0%;
          padding-bottom: 0%;
          padding-right: 1%;
          background: #007aff;
          margin-left: 2%;
        }
      }
      p:nth-of-type(2) {
        font-size: 12px;

        span {
          padding: 1%;
          color: #fff;
          margin-right: 2%;
        }
        /*span:nth-of-type(1){*/
        /*background: #999999;*/
        /*}*/
        /*span:nth-of-type(2){*/
        /*background: #007aff;*/
        /*}*/
        /*span:nth-of-type(3){*/
        /*background: #60c560;*/
        /*}*/
        /*span:nth-of-type(4){*/
        /*background: #f0ad4e;*/
        /*}*/
        /*span:nth-of-type(5){*/
        /*background: #d9534f;*/
        /*}*/
        /*span:nth-of-type(6){*/
        /*background: #5bc0de;*/
        /*}*/

      }

    }
  }

  /**
  =============tooptoopTipBox
   */

  .toopTipBox {

    padding-left: 1.5%;
    padding-right: 1%;
    padding-bottom: 4%;
    margin-bottom: 2.5%;
    display: -webkit-flex;
    display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox; /* TWEENER - IE 10 */
    display: -webkit-flex; /* NEW - Chrome */
    display: flex;
    -webkit-justify-content: space-between;

  }

  .toopTip {
    background: #fff;
  }

  /**
  ======model部分
   */

  .modelBox {
    background: #fff;
    padding-left: 1.5%;
    padding-right: 1%;
    padding-bottom: 4%;
    margin-bottom: 2.5%;
    p {
      font-size: 16px;
      color: #007aff;
      line-height: 50px;

    }

    div {
      text-align: center;
      p:nth-of-type(1) {
        line-height: 38px;
        span {

          width: 25%;
          color: #fff;
          border-radius: 5px;
          &:hover {
            cursor: pointer;
          }
        }
        span:nth-of-type(1) {
          font-size: 14px;
          display: inline-block;
          background: #007aff;
          &:hover {
            background: #fff;
            color: #007aff;
            border: 1px solid #007aff;
          }
        }
        span:nth-of-type(2) {
          color: #fff;
          font-size: 14px;
          display: inline-block;
          padding-left: 1%;
          padding-right: 1%;
          background: #bbbbbb;
          margin-left: 2%;
          &:hover {
            background: #fff;
            color: #acc;
            border: 1px solid #acc;
          }
        }
      }
    }
  }

  /**
  ====slider部分
   */

  /**
  ===========Alerts and Badges
   */

  .alertsBox {
    background: #ffffff !important;
    padding-bottom: 4%;
    border-bottom: 1px solid #f2f2f2;
    overflow: hidden;
    padding-left: 2%;
    padding-right: 2%;
    font-size: 14px;
    vertical-align: middle;
    h4 {
      color: #007aff !important;
      line-height: 43px;
      vertical-align: middle;
      img {
        display: inline-block;
        vertical-align: middle;

      }

      span {
        display: inline-block;
        vertical-align: middle;

      }

    }
  }

  .alertsBox p {
    img {
      display: inline-block;
      vertical-align: middle;

    }

    vertical-align: middle;
    padding-right: 2%;
    margin: 2% auto;
    line-height: 48px;
    text-indent: 2%;
    border-radius: 4px;
    position: relative;
    span:nth-of-type(2) {
      position: absolute;
      top: 19%;
      right: 8%;
      margin-left: 12%;
      display: inline-block;
      background: #aaaaaa;
      color: #fff;
      padding-right: 1%;
      border-radius: 10px;
      line-height: 23px;
      vertical-align: middle;
      text-align: center;
    }
    span:nth-of-type(3) {
      position: absolute;
      cursor: pointer;
      display: inline-block;
      width: 25px;
      height: 25px;
      top: 22%;
      right: 1%;
      background: url("../../assets/img/ic.png") no-repeat right top;

    }
  }

  .alertsBox p:nth-of-type(1) {
    border: 1px solid #d6e9c6;
    color: #3c8584;
    background: #f2dede;

  }

  .alertsBox p:nth-of-type(2) {
    border: 1px solid #bce8f1;
    color: #8fc5f1;
    background: #d9edf7;
  }

  .alertsBox p:nth-of-type(3) {
    border: 1px solid #faebcc;
    color: #93713b;
    background: #fcf8e3;
  }

  .alertsBox p:nth-of-type(4) {
    border: 1px solid #dff0d8;
    color: #b0446e;
    background: #dff0d8;
  }

  /**
  ======page部分
   */

  .blue {
    background: #007aff;
    color: #fff;
  }

  .PaginationBox {
    margin-top: 2.5%;
    background: #fff;
    padding-left: 2%;

    h4 {
      color: #007aff;
      line-height: 43px;
    }
    p {
      font-size: 16px;
      color: #007aff;

      vertical-align: middle;
      padding-top: 1%;
      img {
        display: inline-block;
        vertical-align: middle;

      }

      span {
        display: inline-block;
        vertical-align: middle;

      }
    }
  }

  .pageBox {

    display: -webkit-flex;
    margin-right: 12px;
    text-align: center;

  }

  .page_left {

    -webkit-flex: 1;
    padding-left: 17px;
    text-align: center;
  }

  .page_left p:nth-of-type(1) {
    text-align: center;
    margin-top: 36px;
    margin-left: 24%;
  }

  .page_left p {
    margin-left: 28%;
    display: -webkit-flex;
    color: #4b92c5;
    font-size: 12px;
    text-align: center;
    line-height: 47px;
    margin-bottom: 47px;
  }

  .page_left p span {
    width: 43px;
    height: 47px;
  }

  .page_left p span {
    border-left: 1px solid #dddddd;
    border-right: 1px solid #dddddd;
    border-top: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
  }

  .page_left p span:nth-of-type(1) {
    background: url("../../assets/img/ico9.png") no-repeat center center;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  .page_left p span:nth-of-type(7) {
    background: url("../../assets/img/ico10.png") no-repeat center center;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  .page_left p:nth-of-type(2) span {
    width: 33px;
    heigth: 35px;
  }

  .page_left p:nth-of-type(3) span {
    width: 27px;
    heigth: 27px;
  }


</style>
