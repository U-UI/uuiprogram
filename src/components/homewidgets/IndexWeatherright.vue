<template>
  <div class="ko_right">
    <!-- ECharts图表测试 -->

      <div class="top">
        <div class="icon_first">
          <i class="iconfont icon-fanli"></i>
          Chat Widget
        </div>
        <div class="icon_last">
          <i class="iconfont icon-smiling" style="color:#007aff"></i>
        </div>
      </div>

    <div id="myChar" style="width:80%;height:180px;background: #fff;margin-left: 10%;"></div>

  </div>
</template>

<script>
  import  echarts from 'echarts'
    export default {
        name: "IndexWeatherright",
      data () {
        return {
          msg: 'Welcome to Your Vue.js App'
        }
      },
      mounted(){
        this.drawLine();
      },
      methods: {
        drawLine(){
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById('myChar'))
          window.addEventListener("resize",function () {
            myChart.resize()
          })
          // 绘制图表
          myChart.setOption({
            xAxis:[
              {
                type: 'category',
                data: ['1', '2', '3', '4','5', '6', '7', '8','9', '10', '11', '12','13', '14'],
                boundaryGap:true,
                axisLine:{
                  lineStyle:{
                    width:0,

                  }
                },

              },

            ],
            yAxis: [
              {
                type: 'value',
                gridIndex: 0,
                show: false
              },
              {
                type: 'value',
                gridIndex: 1,
                show: false
              },
              {
                type: 'value',
                gridIndex: 2,
                show: false
              },
            ],
            series: [{
              data: [200, 300, 400, 800,780,900,120,300,70,250,230,80,150,50],
              type: 'bar',
              //配置样式
              itemStyle: {
                //通常情况下：
                normal:{
                  //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                  color: function (params){
                    var colorList = ['#b6b6b6','#b6b6b6','#b6b6b6','#b6b6b6'];
                    return colorList[params.dataIndex];
                  }
                },
                //鼠标悬停时：
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: '#5bc0de'
                }
              },
              //设置柱子的宽度
              barWidth : 15,
            }]

          });
        }
      }
    }
</script>

<style scoped>

  .ko_tow div{
    float: left;

  }
  .ko_right{
    height:200px;
    width:calc(33.3333333% - 20px);
    margin-left: 20px;
    background: #fff;
    box-sizing: border-box;
  }

.top{
  /*width:100%;*/
  height:10px;

  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  box-sizing: border-box;
  z-index: 1;
  position: absolute;

}
  .icon_first{

    margin-left: 10px;
    color:#007aff;
  }
  .icon_last {
     margin-left:250px;
  }
  @media screen and (max-width: 1000px){
    .ko_right{
      width:100%;
      margin-top: 20px;
      margin-left: 0px;
    }

  }
</style>
