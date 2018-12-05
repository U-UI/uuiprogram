<template>
    <div class="brothercon">
      <div class="checkboxi">
        <input type="checkbox">
        <span>create new myself thanks world</span>
      </div>
      <div class="approved">
          apprived
      </div>
    </div>
</template>

<script>
    export default {
        name: "TaskListBrotherCon"
    }
</script>

<style lang="scss" scoped>
  .brothercon{
    height: 40px;
    background-color: white;
    border-bottom: 1px solid #ebebeb;
    overflow: hidden;
    position: relative;
    .checkboxi{
      float: left;
      line-height: 40px;
    }
    .approved{
      float: right;
      line-height: 22px;
      text-align: center;
      padding:0 5px;
      font-size: 12px;
      color:white;
      background-color: #60c560;
      position: absolute;
      right: 0;
      top:10px;
      margin:auto 0;
    }
  }
</style>
