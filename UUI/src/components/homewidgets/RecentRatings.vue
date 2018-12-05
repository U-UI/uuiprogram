<template>
    <div class="recent">
      <task-list></task-list>
      <recent-son></recent-son>
    </div>
</template>

<script>
    import TaskList from "./TaskList";
    import RecentSon from "./RecentSon";
    export default {
      name: "RecentRatings",
      components: {RecentSon, TaskList}
    }
</script>

<style lang="scss" scoped>
    .recent{
      width: calc(50% - 10px);
      float: right;
      margin-bottom: 20px;
      margin-top: 20px;
    }
    @media  screen and (max-width: 1200px){
      .recent{
        width: 100%;
        float: none;
        min-width: 500px;
      }
    }
</style>
