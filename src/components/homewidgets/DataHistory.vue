<template>
    <div class="cale">
      <calendar class="calendar" v-on:choseDay="clickDay" v-on:changeMonth="changeDate" ref="Calendar">
      </calendar>
    </div>

</template>

<script>
  import Calendar from 'vue-calendar-component';
    export default {
      name: "DataHistory",
      data(){
        return {
          arr:[{date:'2018/4/1',className:"mark1"}, {date:'2018/4/13',className:"mark2"}]
        }
      },
      methods:{
        clickDay(data) {
          console.log(data); //选中某天
        },
        changeDate(data) {
          console.log(data); //左右点击切换月份
        },
        clickToday(data) {
          console.log(data); //跳到了本月
        }
      },
      mounted(){
        this.$refs.Calendar.PreMonth();  //调用方法实现转到上个月
       this.$refs.Calendar.NextMonth(); //调用方法实现转到下个月
       this.$refs.Calendar.ChoseMonth('2018-12-12'); //调用方法实现转到某个月
       this.$refs.Calendar.ChoseMonth('2018-12-12',false); //跳转到18年12月12日 但是不选中当天
      },
      components:{
        Calendar
      }
    }
</script>

<style lang="scss" scoped>
  .cale{
    .calendar{
      height: 350px;
      background-color: white;
      padding:0 20px 0 13px;
      max-width: 100%;
      .wh_container{
        max-width: 100%;
        padding:0;
      }
      .wh_content_all{
        max-width: 100%;
        padding:0;
      }
    }
  }
</style>
