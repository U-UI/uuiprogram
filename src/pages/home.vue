<template>
  <div>
    <!--<all-public-header :userface="info.userface" :username="info.username" :color="info.color" :nav="info.nav"></all-public-header>-->
    <!--<index-header></index-header>-->
    <!--<index-section></index-section>-->
    <!--<index-weather></index-weather>-->
    <!--<index-line></index-line>-->
    <!--<index-footer></index-footer>-->
    <all-public-header :userface="info.userface" :username="info.username" :color="info.color" :nav="info.nav"></all-public-header>
    <index-header></index-header>
    <index-section></index-section>
    <index-weather></index-weather>
    <index-line></index-line>
    <index-footer></index-footer>
  </div>
</template>

<script>
  // import IndexSection from "../components/IndexSection";
  // import IndexWeather from "../components/IndexWeather";
  // import IndexLine from "../components/IndexLine";
  // import IndexFooter from "../components/IndexFooter";
  // import IndexHeader from "../components/IndexHeader";
  // import AllPublicHeader from "../components/AllPublicHeader";
  import AllPublicHeader from "../components/social/AllPublicHeader";
  import IndexHeader from "../components/homewidgets/IndexHeader";
  import IndexSection from "../components/homewidgets/IndexSection";
  import IndexWeather from "../components/homewidgets/IndexWeather";
  import IndexLine from "../components/homewidgets/IndexLine";
  import IndexFooter from "../components/homewidgets/IndexFooter";
  export default {
    name: "Index",
    components: {IndexFooter, IndexLine, IndexWeather, IndexSection, IndexHeader, AllPublicHeader},
    data(){
      return{
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
        }
      }
    },
    // components: {IndexHeader, AllPublicHeader,  IndexFooter, IndexLine, IndexWeather, IndexSection}
  }
</script>

<style scoped>

</style>
