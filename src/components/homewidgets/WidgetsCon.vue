<template>
  <div class="con">
    <widgets-header></widgets-header>
    <task-list-father></task-list-father>
    <recent-ratings></recent-ratings>
    <global-map></global-map>
    <rollodex-extend></rollodex-extend>
    <data-history-father></data-history-father>
    <index-lineright></index-lineright>
  </div>

</template>

<script>
    import WidgetsHeader from "./WidgetsHeader";
    import TaskListFather from "./TaskListFather";
    import RecentRatings from "./RecentRatings";
    import GlobalMap from "./GlobalMap";
    import RollodexExtend from "./RollodexExtend";
    // import DataHistory from "./DataHistory";
    import DataHistoryFather from "./DataHistoryFather";
    import IndexLineright from "./IndexLineright";
    export default {
        name: "WidgetsCon",
      methods:{
          res(){
            window.resize(function(){
              if(document.documentElement.clientHeight<=700){
                alert("aa");
                window.resizeTo(document.body.clientHeight,300);
              }
            });
          }
      },
      mounted(){
       this.res()
      },
      components: {
        IndexLineright,
        DataHistoryFather, RollodexExtend, GlobalMap, RecentRatings, TaskListFather, WidgetsHeader}
    }
</script>

<style scoped>
    .con{
      padding:0 20px;
    }
</style>
