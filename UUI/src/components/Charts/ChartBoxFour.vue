<template>
  <div class="chart_box_four">
    <div class="chart_seven_eight">
      <p class="chart_title">Bar Charts</p>
      <div class="graph_seven"></div>
    </div>
    <div class="chart_seven_eight">
      <p class="chart_title">Donut Chart</p>
      <div class="graph_eight"></div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
    export default {
        name: "ChartBoxFour",
        props:["chartfour"],
      methods:{
        _bindTouchEvent(){
          window.addEventListener("resize",function(){
            myChart7.resize();
            myChart8.resize();
          });
        }
      },
      mounted(){
            let myChart7=echarts.init(document.querySelector(".graph_seven"));
            let myChart8=echarts.init(document.querySelector(".graph_eight"));
            let option7 = {
              xAxis:{
                type:"category",
                data:["ioPhone","ioPhone 3G","ioPhone 3GS","ioPhone4","ioPhone 4S","ioPhone 5"],
                axisTick:{
                  show:false
                },
                axisLine:{
                  show:false
                },
                splitLine:{
                  show:false
                },
                axisLabel: {
                  interval: 0,
                  rotate: 30
                },
              },
              yAxis:
                {
                  type:"value",
                  min:0,
                  max:2000,
                  interval:500,
                  axisTick:{
                    show:false
                  },
                  axisLine:{
                    show:false
                  },
                  splitLine:{
                    show:true
                  },
                },
              series:[{
                type:"bar",
                data:[136,137,275,380,655,1571],
                barWidth:'50%',
                itemStyle:{
                  color:'#8fdbda'
                },
              }],
            };
            let option8 = {
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          series: [
            {
              type:'pie',
              radius: ['70%', '90%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '25',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data:[
                {value:40, name:'Sale & MarKeting'},
                {value:25, name:'Development'},
                {value:10, name:'Human Resources'},
                {value:25, name:'User Experience'}
              ]
            }
          ]
        };
            option7.series[0].data=this.chartfour.chart1.data1;
            option8.series[0].data=this.chartfour.chart2.data1;
            myChart8.setOption(option8);
            myChart7.setOption(option7);
        window.addEventListener("resize",function(){
          myChart7.resize();
          myChart8.resize();
        });
            // this._bindTouchEvent();
      }
    }
</script>

<style scoped>
  .chart_box_four{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 28px;
  }
  .chart_seven_eight{
    width: 49%;
    background: #fff;
  }
  .chart_title{
    font-size: 16px;
    color: #007aff;
    padding: 15px;
  }
  .graph_seven,.graph_eight{
    height: 370px;
    width: 100%;
  }
</style>
