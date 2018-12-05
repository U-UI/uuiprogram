<template>
    <div :id="id" :style="{width:'100%',height:'40px'}"></div>
</template>

<script>
    export default {
      name: "FiltersEcharts",
      props:['item','id'],
      methods:{

        drawEcharts(){
          console.log(this.item);
          console.log(this.id);
          let chart= this.$echarts.init(document.getElementById(this.id));
          chart.setOption({
            grid:{
              x:15,
              y:45,
              x2:5,
              y2:20,
              borderWidth:1
            },
              xAxis: {
                type: 'category',
                show:false,
                data: ['', '', '', '', '', '', '','', '', '', '', '', '']
              },
              yAxis: {
                type: 'value',
                show:false,
              },
              tooltip: {
                trigger: 'axis'
              },
              series: [{
                data: this.item,
                type: 'line',
                symbol: "none",//去掉折点
                // itemStyle : { normal: {label : {show: true}}},
                itemStyle : {
                  normal : {
                    lineStyle:{
                      //折线颜色
                      color:'#dadada'
                    }
                  }
                },
              }]
            });
          window.addEventListener("resize", function () {
            chart.resize();
          });
        },
      },
      mounted(){
        this.$nextTick(function(){
          this.drawEcharts();
        });

      }
    }
</script>
<style lang="scss" scoped>

</style>
