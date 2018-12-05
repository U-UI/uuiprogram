<template>
  <div class="tabCon">
    <div>
      <p>{{con.h1}}</p>
      <br> <span>{{con.span}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AccordContent",
    props:["con"]
  }
</script>

<style scoped lang="scss">
  .tabCon {
    background: #fff;
    padding-left: 1.5%;
    padding-right: 1%;
    padding-bottom: 4%;
    margin-bottom: 2.5%;
    div {

      p {
        color: #6a6666;
        border-top: 1px solid #e6e6e6;
        padding-top: 1%;
      }
      span {
        display: inline-block;
        font-size: 13px;
        color: #666666;
        line-height: 24px;
      }
    }
  }
</style>
