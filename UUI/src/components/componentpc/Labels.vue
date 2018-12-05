<template>
  <div class="tableBox">
    <p><img src="../../../static/img/ico5.png" alt=""><span>Labels</span></p>
    <div v-for="(t,i) in tableData" :key="i">
      <p><span>{{t.title}}</span><span>{{t.h1}}</span></p>
      <p>
        <span v-for="(s,i) in t.spanCon" :style="getColor(i)">{{s}}</span>
      </p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Labels",
      data () {
        return {
          colorData: ["#999999", "#007aff", "#60c560", "#f0ad4e", "#d9534f", "#5bc0de"],
          tableData: [
            {
              "title":"Example heading",
              "h1":"New",
              "spanCon":[
                "Label1","Label2","Label3","Label4", "Label5","Label6",
              ]
            },
          ],

        }

      },
      methods:{
        getColor(k) {
          return `background:${this.colorData[k]}`
        },
      }
    }
</script>

<style scoped lang="scss" >
  .tableBox {
    background: #fff;
    padding-left: 1.5%;
    padding-right: 1%;
    padding-bottom: 4%;
    margin-bottom: 2.5%;
    p {
      font-size: 22px;
      color: #007aff;
      line-height: 80px;

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

      }

    }
  }
</style>
