<template>
    <div class="task">
      <div class="task_left">
        <i class="iconfont icon-list"><span>task list</span></i>
      </div>
      <div class="task_right">
        <i class="iconfont icon-jiahao"></i>
      </div>
    </div>
</template>

<script>
    export default {
        name: "TaskList"
    }
</script>

<style lang="scss" scoped>
  .task{
    height: 52px;
    line-height: 52px;
    padding:0 13px;
    font-size: 12px;
    background-color: white;
    color:#007aff;
    overflow: hidden;
    .task_left{
      float: left;
      span{
        margin-left: 10px;
      }
      /*display: -webkit-flex;*/
    }
    .task_right{
      float: right;
    }
    /*display: -webkit-flex;*/
  }
</style>
