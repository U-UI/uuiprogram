<template>
    <div class="brother">
      <task-list-brother-con v-for="p in list"></task-list-brother-con>
    </div>
</template>

<script>
    import TaskListBrotherCon from "./TaskListBrotherCon";
    export default {
        name: "TaskListBrother",
      components: {TaskListBrotherCon},
      data(){
          return{
            list:[1,1,1,1,1,1,1,1,1,1,1,1]
          }
      }
    }
</script>

<style lang="scss" scoped>
    .brother{
      height: 350px;
      background-color: white;
      padding:0 20px 0 13px;
      overflow-y: auto;
      overflow-x: hidden;
    }
</style>
