<template>
  <div class="ko_one">
    <div class="ko_tow">
      <div style="width:100%;box-sizing: border-box">
          <index-weatherleft></index-weatherleft>
          <index-weatherright></index-weatherright>
      </div>
    </div>
  </div>
</template>

<script>
    import IndexWeatherright from "./IndexWeatherright";
    import IndexWeatherleft from "./IndexWeatherleft";
    export default {
        name: "IndexWeather",
        components: {IndexWeatherleft, IndexWeatherright},

    }
</script>

<style scoped>
  .ko_one{
    /*width:100%;*/
    height:200px;
    margin-top: 20px;

  }
  .ko_tow{
    width:calc(100% - 40px);
    height:200px;
    margin: 0 auto;

  }
  .ko_tow div{
    float: left;

  }

  .weatch_left div{
    box-sizing: border-box;
  }


</style>
