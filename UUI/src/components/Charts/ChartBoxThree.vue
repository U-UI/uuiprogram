<template>
    <div class="chart_box_three">
      <div class="chart_five_six">
        <p class="chart_title">Composite Graph</p>
        <div class="graph_five"></div>
      </div>
      <div class="chart_five_six">
        <p class="chart_title">Composite Graph</p>
        <div class="graph_six"></div>
      </div>
    </div>
</template>

<script>
  import echarts from 'echarts'
    export default {
        name: "ChartBoxThree",
      props:["chartthreedata"],
      mounted(){
          let myChart5=echarts.init(document.querySelector(".graph_five"));
          let myChart6=echarts.init(document.querySelector(".graph_six"));
          let option5={
            xAxis:{
              type:"category",
              data:[1,2,3,4,5,6,7,8,9,10,11,12],
              show:false
            },
            yAxis:[
              {
              type:"value",
              min:0,
              max:320,
              show:false
            },
              {
                type:"value",
                min:0,
                max:280,
                show:false
              }
            ],
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
            series:[
              {
              type:"bar",
              data:[],
              barWidth:'50%',
              itemStyle:{
                color:'#8fdbda'
              },
            },
              {
                type:"line",
                data:[],
                itemStyle:{
                  color:'#bfe646'
                },
                xAxisIndex:0,
                yAxisIndex:1,
                areaStyle:{
                  color:'#f9fdf0'
                },
                lineStyle:{
                  width:2
                }
              },
            ],
        };
          let option6={
            xAxis:{
              type:"category",
              data:[],
              show:false
            },
            yAxis:[
              {
              type:"value",
              min:0,
              max:280,
              show:false
            },
              {
                type:"value",
                min:0,
                max:400,
                show:false
              }
            ],
            grid:{
              top:10,
              left:30,
              right:30,
              bottom:50,
              borderWidth:1
            },
            tooltip : {
              trigger: 'axis',
              formatter : function (params) {
                return params[0].value.toFixed(0);
              }
            },
            series:[
              {
                type:"line",
                data:[],

                areaStyle:{
                  color:'#f9fdf0'
                },
                itemStyle:{
                  color:'#d7f18d'
                },
                lineStyle:{
                  width:2
                },
                xAxisIndex:0,
                yAxisIndex:0,
              },
              {
                type:"line",
                data:[],

                areaStyle:{
                  color:'#f2fbff'
                },
                itemStyle:{
                  color:'#a6e1ff'
                },
                lineStyle:{
                  width:2
                },
                xAxisIndex:0,
                yAxisIndex:1,
              },
            ],
          };
          option5.series[0].data=this.chartthreedata.chart1.data1;
          option5.series[1].data=this.chartthreedata.chart1.data2;
          option6.series[0].data=this.chartthreedata.chart2.data1;
          option6.series[1].data=this.chartthreedata.chart2.data2;
        myChart5.setOption(option5);
        myChart6.setOption(option6);
        window.addEventListener("resize",function(){
          myChart6.resize();
          myChart5.resize();
        });
      }
    }
</script>

<style scoped>
  .chart_box_three{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 28px;
  }
  .chart_five_six{
    width: 49%;
    background: #fff;
  }
  .chart_title{
    font-size: 16px;
    color: #007aff;
    padding: 15px;
  }
  .graph_five,.graph_six{
    height: 320px;
    width: 100%;
  }
</style>
