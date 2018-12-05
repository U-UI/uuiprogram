<template>
    <div class="father">
      <task-list></task-list>
      <task-list-brother></task-list-brother>
    </div>
</template>

<script>
    import TaskList from "./TaskList";
    import TaskListBrother from "./TaskListBrother";
    export default {
        name: "TaskListFather",
      components: {TaskListBrother, TaskList}
    }
</script>

<style scoped>
    .father{
      width: calc(50% - 10px);
      min-width: 500px;
      float: left;
      margin-bottom: 20px;
      margin-top: 20px;
    }
    @media  screen and (max-width: 1200px){
      .father{
        width: 100%;
        float: none;
      }
    }
</style>
