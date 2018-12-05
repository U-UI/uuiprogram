<template>
    <div class="chart_box_one">
      <div class="chart_one_two">
        <p class="chart_title">Line Chart</p>
        <div class="graph_one"></div>
      </div>
      <div class="chart_one_two">
        <p class="chart_title">Bar Chart</p>
        <div class="graph_two"></div>
      </div>
    </div>
</template>

<script>
  import echarts from 'echarts'
    export default {
        name: "ChartBoxOne",
      props:["chartonedata1","chartonedata2"],
        mounted(){
          let myChart1=echarts.init(document.querySelector(".graph_one"));
          let myChart2=echarts.init(document.querySelector(".graph_two"));
          let option1={
            xAxis:{
              type:"value",
              max:12,
              min:0,
              interval:1,
              axisTick:{
                show:false
              },
              axisLine:{
                show:false
              },
              splitLine:{
                show:false
              },
              // boundaryGap: ['0%','50%']
            },
            yAxis:{
              type:"value",
              min: 0,
              max:420,
              show:false
            },
            tooltip : {
              trigger: 'axis',
              formatter : function (params) {
                return params[0].value[1].toFixed(0);
              }
            },
            grid:{
              top:10,
              left:30,
              right:30,
              bottom:50,
              borderWidth:1
            },
            series:[{
              data:[
              ],
              type:"line",
              smooth:true,
              areaStyle:{
                color:'#f2fbff'
              },
              itemStyle:{
                color:'#a6e1ff'
              },
              lineStyle:{
                width:2
              }
            }]
          };
          let option2={
            xAxis:{
              type:"category",
              data:[1,2,3,4,5,6,7,8,9,10,11,12],
              show:false
            },
            yAxis:{
              type:"value",
              min:0,
              max:320,
              show:false
            },
            grid:{
              top:10,
              left:150,
              right:150,
              bottom:50,
              borderWidth:1
            },
            tooltip : {
              trigger: 'axis',
              formatter : function (params) {
                return params[0].value.toFixed(0);
              }
            },
            series:[{
              type:"bar",
              data:[],
              barWidth:'50%',
              itemStyle:{
                color:'#8fdbda'
              },
            }],
          };
          option1.series[0].data = this.chartonedata1;
          option2.series[0].data = this.chartonedata2;
          myChart1.setOption(option1);
          myChart2.setOption(option2);
          window.addEventListener("resize",function(){
            myChart1.resize();
            myChart2.resize();
          });
        }
    }
</script>

<style scoped>
.chart_box_one{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
}
.chart_one_two{
  width: 49%;
  background-color: #fff;
}
  .chart_title{
    font-size: 16px;
    color: #007aff;
    padding: 15px;
  }
  .graph_one,.graph_two{
    width: 100%;
    height: 270px;
  }
</style>
