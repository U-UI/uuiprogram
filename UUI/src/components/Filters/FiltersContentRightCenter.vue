<template>
  <table class="rightCenter" cellspacing="0">
    <tr class="tableTr">
      <th align="left" class="tableTh">Dept</th>
      <th align="left" class="tableTh">Vendor</th>
      <th align="left" class="tableTh">Total</th>
      <th align="left" class="tableTh">Contant</th>
      <th align="center" class="tableTh">Growth</th>
      <th align="left" class="tableTh">%change</th>
    </tr>
    <tr class="tableTr" v-for="(p,index) in allData" :key="index">
      <td class="tableTd" :style="getColor()">
        <i class="iconfont  " :class="p.icons" ></i>
        <span class="tableTdTriangle"></span>
      </td>
      <td class="tableTd">{{p.txt}}</td>
      <td class="tableTd">{{p.total}}</td>
      <td class="tableTd">{{p.contact}}</td>
      <td class="tableTd" >
          <filters-echarts :item="p.counts" :id="p.ids"></filters-echarts>
      </td>
      <td class="tableTd " :class="{tablRed:tabRed(index)}">{{p.change}}</td>
    </tr>
  </table>
</template>

<script>
    import FiltersEcharts from "./FiltersEcharts";
    export default {
        name: "FiltersContentRightCenter",
        components: {FiltersEcharts},
        data(){
          return{
            allData:[
              {
                icons:"icon-tingzhenqi",
                txt:"Star Organization Co.",
                total:"$435",
                contact:"James Brown",
                ids:"myLine1",
                counts:[50,55,60,40,30,35,30,20,25,30,40,20,15],
                change:"12%"
              },
              {
                icons:"icon-kafei",
                txt:"Star Organion Co.",
                total:"$45",
                contact:"Jdefews Brown",
                ids:"myLine2",
                counts:[50,24,23,34,45,24,34,35,25,45,24,21,15],
                change:"-2%"
              },
              {
                icons:"icon-weibiaoti-",
                txt:"Staion Co.",
                total:"$123",
                contact:"wdwqes ",
                ids:"myLine3",
                counts:[50,35,30,33,30,35,45,20,25,22,33,45,15],
                change:"12%"
              },
              {
                icons:"icon-youxi",
                txt:"StarCo.",
                total:"$45",
                contact:"James Brtrghtn",
                ids:"myLine4",
                counts:[50,66,54,40,22,35,44,55,25,30,11,20,15],
                change:"+12%"
              },
              {
                icons:"icon-gift-box",
                txt:"Aization Co.",
                total:"$4785",
                contact:"James",
                ids:"myLine5",
                counts:[50,55,45,40,60,35,10,20,34,30,50,20,15],
                change:"23%"
              },
              {
                icons:"icon-jiangbei",
                txt:"Sization Co.",
                total:"$435",
                contact:"James Brown",
                ids:"myLine6",
                counts:[40,55,5,40,35,35,45,20,56,30,40,20,15],
                change:"2%"
              },
              {
                icons:"icon-kafei",
                txt:"Star Organin Co.",
                total:"$5425",
                contact:"JBrown",
                ids:"myLine7",
                counts:[30,55,40,5,36,35,40,20,49,20,48,60,15],
                change:"-32%"
              },
              {
                icons:"icon-youxi",
                txt:"Star Organiz.",
                total:"$4350",
                contact:"James Desl",
                ids:"myLine8",
                counts:[47,27,40,30,30,35,20,20,6,30,35,20,15],
                change:"-6%"
              },
              {
                icons:"icon-tingzhenqi",
                txt:"Star Orga Co.",
                total:"$435",
                contact:"Jaregfrown",
                ids:"myLine9",
                counts:[34,55,40,40,30,12,30,46,25,37,40,39,15],
                change:"+8%"
              },
              {
                icons:"icon-kafei",
                txt:"Star Organon Co.",
                total:"$4535",
                contact:"James Blpn",
                ids:"myLine10",
                counts:[34,55,60,40,34,35,50,20,21,30,30,39,15],
                change:"1.2%"
              },
              {
                icons:"icon-jiangbei",
                txt:"Sta nization Co.",
                total:"$9340",
                contact:"Aqwes Brown",
                ids:"myLine11",
                counts:[53,45,30,65,12,35,56,79,35,50,25,20,15],
                change:"13%"
              },
              {
                icons:"icon-kafei",
                txt:"Staization Co.",
                total:"$9240",
                contact:"Jackson Yee",
                ids:"myLine12",
                counts:[30,55,40,44,30,4,30,25,25,50,40,30,19],
                change:"12%"
              },
              {
                icons:"icon-liwu",
                txt:"Sization Co.",
                total:"$90",
                contact:"JBrown",
                ids:"myLine13",
                counts:[57,26,64,46,15,35,30,24,25,30,30,30,16],
                change:"+1%"
              },
              {
                icons:"icon-youxi",
                txt:"Star Co.",
                total:"$9240",
                contact:"James Brown",
                ids:"myLine14",
                counts:[40,20,40,30,20,10,15,20,35,30,20,20,55],
                change:"12%"
              },
            ]
          }
        },
        methods:{
          getColor(){
            var str="#";
            for(var i=0;i<6;i++){
              str+=(parseInt(Math.random()*16)).toString(16);
            }
            return `background:${str}`;
          },
          tabRed(idx){
            if(idx==0){
              return true;
            }
            if(idx==1){
              return true;
            }
            if(idx==5){
              return true;
            }
            if(idx==6){
              return true;
            }
            if(idx==10){
              return true;
            }
            if(idx==13){
              return true;
            }
          }
        }
    }
</script>
<style lang="scss" scoped>
  .rightCenter{
    margin-top: 15px;
    width:100%;
  .tableTr{
    background: #ffffff;
    border-bottom: 2px solid #dddddd;
  .tableTh{
    font-size:12px ;
    color: #666666;
    line-height: 36px;
    height:36px;
    border-bottom: 1px solid #dddddd;

  }
  .tableTh:nth-child(1){
    width:8%;
  }
  .tableTh:nth-child(2){
    width:24%;
  }
  .tableTh:nth-child(3){
    width:8%;
  }
  .tableTh:nth-child(4){
    width:16%;
  }
  .tableTh:nth-child(5){
    width:32%;
  }
  .tableTh:nth-child(6){
    width:8%;
  }
  }
  .tableTd{
    height:40px;
  }
  .tableTd:nth-child(1){
    position: relative;
  i{
    font-size: 18px;
    color: #ffffff;
    margin-left: 24px;
    line-height: 40px;
  }
  span{
    position: absolute;
    top:15px;
    right:1px;
    display: inline-block;
    width:0;
    height:0;
    border:6px solid transparent;
    border-right-color: #ffffff;
  }
  }
  .tableTd:nth-child(2),.tableTd:nth-child(3),.tableTd:nth-child(4),.tableTd:nth-child(5),.tableTd:nth-child(6){
    font-size: 12px;
    color: #666666;
    line-height: 40px;
  }
    .tableTd:nth-child(6){
      color:#60c560;
    }
    .tableTr .tablRed{
      color: #d9534f;
    }

  }

</style>
