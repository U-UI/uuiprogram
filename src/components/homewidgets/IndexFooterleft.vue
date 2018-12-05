<template>
  <div class="fot_left">
    <div class="top">
      <div class="icon_first">
        <i class="iconfont icon-fanli"></i>
        Chat Widget
      </div>
      <div class="icon_last">
        <i class="iconfont icon-smiling" style="color:#007aff"></i>
      </div>
    </div>

    <div id="fut" style="width:50%;height:232px"></div>
    <div id="fu" style="width:50%;height:232px;"></div>
  </div>
</template>

<script>
  import  echarts from 'echarts'
    export default {
        name: "IndexFooterleft",
      mounted(){
        this.drawLine();
        this.drawLine2();
      },
      methods: {
        drawLine(){
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById('fut'))
          window.addEventListener("resize",function () {
            myChart.resize()
          })
          // 绘制图表
          myChart.setOption({
            title: {
              text: '87%',
              x: 'center',
              y: 'center',
              textStyle: {
                fontWeight: 'normal',
                color: '#dddddd',
                fontSize: '42'
              }
            },
            color: ['#82e972'],
            legend: {
              show: true,
              itemGap: 12,
              data: ['', '']
            },

            series: [{
              name: 'Line 1',
              type: 'pie',
              clockWise: true,
              radius: ['98%', '90%'],
              itemStyle: {
                normal: {
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              },
              hoverAnimation: false,
              data: [{
                value: 3,
                name: '01',
                itemStyle: {
                  normal: {
                    color: { // 完成的圆环的颜色
                      colorStops: [{
                        offset: 0,
                        color: '#f0f0f0' // 0% 处的颜色
                      }, {
                        offset: 1,
                        color: '#f0f0f0' // 100% 处的颜色
                      }]
                    },
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              }, {
                name: '02',
                value: 20
              }]
            }]

          });
        },

        drawLine2(){
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById('fu'))
          // 绘制图表
          myChart.setOption({
            title: {
              text: '26%',
              x: 'center',
              y: 'center',
              textStyle: {
                fontWeight: 'normal',
                color: '#dddddd',
                fontSize: '30'
              }
            },
            color: ['#eeeeee'],
            legend: {
              show: true,
              itemGap: 12,
              data: ['', '']
            },

            series: [{
              name: 'Line 1',
              type: 'pie',
              clockWise: true,
              radius: ['98%', '90%'],
              itemStyle: {
                normal: {
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              },
              hoverAnimation: false,
              data: [{
                value: 3,
                name: '01',
                itemStyle: {
                  normal: {
                    color: { // 完成的圆环的颜色
                      colorStops: [{
                        offset: 0,
                        color: 'red' // 0% 处的颜色
                      }, {
                        offset: 1,
                        color: 'red' // 100% 处的颜色
                      }]
                    },
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              }, {
                name: '02',
                value: 20
              }]
            }]
          });
        }
      }
    }
</script>

<style scoped>

  .fot_tow div{
    float:left;
  }
  .fot_left{
    width:41.66666666666667%;
    height:282px;
    background: #fff;
  }
  .fot_a img{
    float:left
  }

  .top{
    width:100%;
    height:50px;
    line-height: 50px;
    display: flex;
    justify-content: space-between;

  }
  .icon_first{

    margin-left: 10px;
    color:#007aff;
  }
  .icon_last {
    margin-right: 10px;
  }
  @media screen and (max-width: 1000px){
    .fot_left{
      width:100%;
      margin-top: 20px;
      margin-bottom: 20px;


    }

  }
  @media screen and (max-width: 600px){
    .fot_left{
     height:500px;


    }
   #fut{
     width:100%;
     clear: both;
     margin-left: 60px;
   }
   #fu{
     width:100%;
     clear: both;
     margin-left: 60px;
   }
  }
</style>
