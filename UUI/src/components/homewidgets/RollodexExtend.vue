<template>
  <div class="roll">
    <task-list></task-list>
    <rollodex-con></rollodex-con>
  </div>
</template>

<script>
    import TaskList from "./TaskList";
    import RollodexCon from "./RollodexCon";
    export default {
        name: "RollodexExtend",
      mounted(){
          console.log("ffff")
      },
      components: {RollodexCon, TaskList}
    }
</script>
<style lang="scss" scoped>
  .roll{
    width: calc(50% - 10px);
    margin-bottom: 20px;
    float: right;
  }
  @media  screen and (max-width: 1200px){
    .roll{
      width: 100%;
      float: none;
      min-width: 500px;
    }
  }
</style>
