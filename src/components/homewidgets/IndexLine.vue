<template>
  <div class="fut_one">
    <div class="fut_tow">
     <index-lineleft></index-lineleft>
     <index-lineright></index-lineright>
    </div>
  </div>
</template>

<script>
    import IndexLineleft from "./IndexLineleft";
    import IndexWeatherright from "./IndexWeatherright";
    import IndexLineright from "./IndexLineright";
    export default {
        name: "IndexLine",
      components: {IndexLineright, IndexWeatherright, IndexLineleft}
    }
</script>

<style scoped>
  .fut_one{
    width:100%;
    height:427px;
    margin-top: 20px;
    box-sizing: border-box;
  }
  .fut_tow{
    width:calc(100% - 40px);
    height:427px;
    margin: 0 auto;
    box-sizing: border-box;

  }


</style>
