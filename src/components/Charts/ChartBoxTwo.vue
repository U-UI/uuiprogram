<template>
  <div class="chart_box_two">
    <div class="chart_three_four">
      <p class="chart_title">Donut Chart</p>
      <div class="graph_three">
        <div class="donut_chart"></div>
        <div class="donut_chart"></div>
        <div class="donut_chart"></div>
      </div>
    </div>
    <div class="chart_three_four">
      <p class="chart_title">Pie Chart</p>
      <div class="graph_four" id="special_chart"></div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
    export default {
        name: "ChartBoxTwo",
      props:["charttwodata"],
      mounted(){
          let myChart3_1=echarts.init(document.querySelectorAll(".donut_chart")[0]);
          let myChart3_2=echarts.init(document.querySelectorAll(".donut_chart")[1]);
          let myChart3_3=echarts.init(document.querySelectorAll(".donut_chart")[2]);
          let myChart4=echarts.init(document.getElementById("special_chart"));
          console.log(myChart4)
          let option3_1={
            animation: false,
            graphic:{
              type:'text',
              left:'center',
              top:'100',
              style:{
                text:'87%',
                fontSize:'50',
                fill:'#bbbbbb'
              }
            },
            series: [
              {
                type:'pie',
                radius: ['80%', '90%'],
                color:['#81e970','#f2f2f2'],
                avoidLabelOverlap: false,
                label: {
                  normal: {
                    show: false,
                    position: 'center'
                  },
                  emphasis: {
                    show:false
                  }
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                data:[],
              }
            ]
          };
          let option3_2={
          animation: false,
          graphic:{
            type:'text',
            left:'center',
            top:'100',
            style:{
              text:'26%',
              fontSize:'50',
              fill:'#bbbbbb'
            }
          },
          series: [
            {
              type:'pie',
              radius: ['80%', '90%'],
              color:['#f46f50 ','#f2f2f2'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show:false
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data:[],
            }
          ]
        };
          let option3_3={
          animation: false,
          graphic:{
            type:'text',
            left:'center',
            top:'100',
            style:{
              text:'54%',
              fontSize:'50',
              fill:'#bbbbbb'
            }
          },
          series: [
            {
              type:'pie',
              radius: ['80%', '90%'],
              color:['#fab43b','#f2f2f2'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show:false
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data:[],
            }
          ]
        };
          let option4={
            animation: false,
            series: [
              {
                type:'pie',
                animation: false,
                radius: [0, '75%'],
                color:['#f5af50','#f46f50','#a0eeed','#81e970'],
                avoidLabelOverlap: false,
                label: {
                  normal: {
                    formatter: '{b}：{c}%',
                    show: false
                  },
                  emphasis: {
                    show:false
                  }
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                data:[]
              }
            ]
          };
          option3_1.series[0].data=this.charttwodata.data1;
          option3_2.series[0].data=this.charttwodata.data2;
          option3_3.series[0].data=this.charttwodata.data3;
          option4.series[0].data=this.charttwodata.data4;
          myChart3_1.setOption(option3_1);
          myChart3_2.setOption(option3_2);
          myChart3_3.setOption(option3_3);
          myChart4.setOption(option4);
          window.addEventListener("resize",function(){
          myChart3_1.resize();myChart3_3.resize();myChart3_2.resize();
          myChart4.resize();
        });
      }
    }
</script>

<style scoped>
  .chart_box_two{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 28px;
  }
  .donut_chart{
    width: 33.33%;
    height: 100%;
  }
  .chart_three_four:nth-of-type(1){
    width: 60%;
    background-color: #fff;
  }
  .chart_three_four:nth-of-type(2){
    width: 39%;
    background-color: #fff;
  }
  .chart_title{
    font-size: 16px;
    color: #007aff;
    padding: 15px;
  }
  .graph_three,.graph_four{
    display: flex;
    width: 100%;
    height: 250px;
  }
</style>
