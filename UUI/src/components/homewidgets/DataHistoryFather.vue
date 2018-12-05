<template>
    <div class="history">
      <task-list></task-list>
      <data-history></data-history>
    </div>
</template>

<script>
    import TaskList from "./TaskList";
    import DataHistory from "./DataHistory";
    export default {
        name: "DataHistoryFather",
      components: {DataHistory, TaskList}
    }
</script>

<style lang="scss" scoped>
  .history{
    width: calc(50% - 10px);
    float: left;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  @media  screen and (max-width: 1200px){
    .history{
      width: 100%;
      float: none;
      min-width: 500px;
    }
  }
</style>
