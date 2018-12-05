<template>
  <div>
    <all-public-header :userface="info.userface" :username="info.username" :color="info.color" :nav="info.nav"></all-public-header>
    <div class="box">
      <!--顶部-->
      <div class="headerBox"></div>
      <div class="headerTitle">Components</div>
      <div class="navUi">
        <img src="../assets/img/ico1.png" alt="">/ <span>UI</span>/<span> Components</span>
      </div>
      <!--主体部分-->
      <com-section :tabs="tabData" @watch="delCon1" :table="tableData"
                   @tab="tabb"
                   @del1="delCon1"
                   :num="Num"
                   :changeRed="changeR"
                   :tabContents="tabContentData"
                   :alert="alertData"
      ></com-section>


    </div>
  </div>

</template>

<script>
    import Public from "../assets/css/public.css"
    import ComSection from "../components/Component/ComSection";
    import AllPublicHeader from "../components/social/AllPublicHeader";
    export default {
        name: "ComPage",

      components: {AllPublicHeader, ComSection,Public},
      data () {
        return {
          info:{
            username:"MrChen",
            userface:"/static/img/logo2.png",
            color:["orange","red","purple","skyblue"],
            nav:[
              {icon:"icon-shouye",name:"home"},
              {icon:"icon-wujiaoxing",name:"social"},
              {icon:"icon-z",name:"widgets"},
              {icon:"icon-pages",name:"filters"},
              {icon:"icon-table2",name:"components"},
              {icon:"icon-chartbar",name:"charts"}
            ],
            chartone:{
              data1:[
                [0,120],[0.5,160],[1,240],[1.5,250],[2,280],[2.5,300],
                [3,250],[3.5,230],[4,200],[4.5,280],[5,380],[5.5,400],[6,360],
                [6.5,300],[7,220],[8,200],[8.5,150],[9,100],[9.5,100],[10,180],
                [10.5,180],[11,200],[11.5,160],[12,220]
              ],
              data2:[160,220,260,120,320,260,300,160,240,100,240,120]
            },
            charttwo:{
              data1:[87,13],
              data2:[26,13],
              data3:[54,46],
              data4:[25,25,15,15]
            },
            chartthree:{
              chart1:{
                data1:[100,220,260,120,320,260,300,160,240,100,240,120],
                data2:[100,280,150,180,220,180,130,180,180,280,260,260]
              },
              chart2:{
                data1:[100,280,150,180,220,180,130,200,180,280,260,160,200,
                  120,200,150,100,100,180,180,200,160,180,120],
                data2:[160,240,120,200,180,350,230,200,280,380,400,360,300,
                  220,200,150,40,70,180,110,200,160,200,220],
              }
            },
            chartfour:{
              chart1:{
                data1:[136,137,275,380,655,1571],
              },
              chart2:{
                data1:[
                  {value:40, name:'Sale & MarKeting'},
                  {value:25, name:'Development'},
                  {value:10, name:'Human Resources'},
                  {value:25, name:'User Experience'}
                ]
              }
            },
            chartfive:[]
          },
          tabData: ["Overview", "Profile","Attachments"],
          tabContentData: [
            {"title":"Overview","cont":"Lorem ipsum dolor sit amet, consectetur adipiscing"},
            {"title":"Profile","cont":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet auctor purus non. Phasellus pretium rutrum elit in cursus. Donec ullamcorper nec massa vel mattis. "},
            {"title":"Attachments","cont":"Curabitur eros metus, dapibus quis est et, dapibus imperdiet dolor. adipiscing"}
          ],
          tableData: [
            {
              "title":"Example heading",
              "h1":"New",
              "spanCon":[
                "drfert","drfert","drfert","drfdfert", "drf","drfert",
              ]
            },
          ],
          Num: 1,
          changeR:1,
          alertData:[
            {
              "con":"Well done! Youthis important alert message.",
              "num":"12"
            },
            {
              "con":"dgrgr done! Youthis important alert message.",
              "num":"125"
            },
            {
              "con":"dne! Youthis important alert message.",
              "num":"15"
            },
            {
              "con":"bhn done! Youthis important alert message.",
              "num":"156"
            }
          ]
        }
      },
      methods:{
        tabb(i) {
          this.Num = i;
        },
        delCon1(i){
          this.alertData.splice(this.i,1)
        }

      }
    }
</script>

<style scoped>
  .box{
    background: #e8e8e8;
    padding-left: 1%;
    padding-right: 1%;
    width: 100%;
    /*overflow: hidden;*/
  }

  .headerBox{
    height: 120px;
    background: #fff;
  }
.headerTitle{
  font-size: 28px;
  line-height: 90px;
  color: #5e5e5e;

}

  .navUi{
    padding-left: 1%;
      font-size: 16px;
      line-height: 41px;
      background: #fff;
      margin-bottom:1.5%;
    }
  .navUi img{
    margin-right: 0.5%;
    display: inline-block;
    width:16px;
    height: 11px;
  }
  .navUi span:nth-of-type(1){
    color: #007aff;
    margin-right: 1%;
    margin-left: 0.5%;
  }
  .navUi span:nth-of-type(2){
    color: #a5bbd8;
  }



</style>
