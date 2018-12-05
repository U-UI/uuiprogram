<template>
    <div class="map">
      <task-list></task-list>
      <global-map-brother></global-map-brother>
    </div>
</template>
<script>
    import TaskList from "./TaskList";
    import GlobalMapBrother from "./GlobalMapBrother";
    export default {
        name: "GlobalMap",
      components: {GlobalMapBrother, TaskList}
    }
</script>

<style lang="scss" scoped>
  .map{
    width: calc(50% - 10px);
    margin-bottom: 20px;
    float: left;
  }
  @media  screen and (max-width: 1200px){
    .map{
      width: 100%;
      float: none;
      min-width: 500px;
    }
  }
</style>
