<template>
  <div class="PaginationBox">
    <p><img src="../../../static/img/ico8.png" alt=""><span>page</span></p>
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
</template>

<script>
    export default {
        name: "Pages",
      data () {
        return {
          pageData: [{"page": "1"}, {"page": "2"}, {"page": "3"}, {"page": "4"}, {"page": "5"}],
          changeB: 0,
          changeBlue: 0,
        }
      },
      methods:{
        blucolor: function (index) {
          this.changeB = index
        },
        blues: function (index) {
          this.changeBlue = index
        },

      }

    }
</script>

<style scoped lang="scss">
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
    background: url("../../../static/img/ico9.png") no-repeat center center;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  .page_left p span:nth-of-type(7) {
    background: url("../../../static/img/ico10.png") no-repeat center center;
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
