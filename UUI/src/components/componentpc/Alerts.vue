<template>

  <div class="alertsBox">
    <h4><img src="../../../static/img/ico3.png" alt="">Alert</h4>

    <p class="span1" v-for="(a,index) in alertData">
      <span>{{a.con}}</span>
      <span>{{a.num}}</span>
      <span class="spanDel" @click="del"></span>
    </p>
  </div>
</template>

<script>
    export default {
        name: "Alerts",
      data () {
        return {
          alertData:[
            {
              "con":"Well! Youthis important alert message.",
              "num":"12"
            },
            {
              "con":"dg done! Youthis important alert message.",
              "num":"125"
            },
            {
              "con":"dne! Youthis important alert message.",
              "num":"15"
            },
            {
              "con":" done! Youthis important alert message.",
              "num":"156"
            }
          ]
        }
      },
      methods:{
        del(i){
          this.alertData.splice(this.i,1)
        }

      }
    }
</script>

<style scoped lang="scss">

  .alertsBox {
    max-width: 360px;
    max-height: 600px;
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
      line-height: 70px;
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

      display: inline-block;
      background: #aaaaaa;
      color: #fff;
      border-radius: 10px;
      line-height: 23px;
      vertical-align: middle;
      text-align: center;
    }
    span:nth-of-type(3) {
      position: absolute;
      cursor: pointer;
      display: inline-block;
      width: 24px;
      height: 24px;
      top: 22%;
      right: 1%;
      background: url("../../../static/img/ic.png") no-repeat right top;

    }

    margin-bottom: 10%;
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

</style>
