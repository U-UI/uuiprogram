<template>
    <div class="rightBox">
      <component v-bind:is="currentView"></component>

    </div>
</template>

<script>
    import Demo from "../componentpc/demo";
    import Demo2 from "../componentpc/demo2";
    import InputSelect from "../componentpc/InputSelect";
    import Tabs from "../componentpc/Tabs";
    export default {
        name: "RightShowpc",
      components: {Tabs, InputSelect, Demo2, Demo},
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
