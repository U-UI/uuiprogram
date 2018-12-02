<template>
    <div class="rightBox">
      <component v-bind:is="currentView"></component>
    </div>
</template>

<script>
    import Demo from "../componentpc/demo";
    import Demo2 from "../componentpc/demo2";
    export default {
        name: "RightShowpc",
      components: {Demo2, Demo},
      props:["menuinfo","currentView"]
    }
</script>

<style scoped>
  .rightBox{
    width: 30%;
    float: left;
    height: 100%;
    background: #fff;
  }
</style>
