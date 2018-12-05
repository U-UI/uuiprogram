<template>
  <div class="slider">

    <p class="title">Basic slider</p>
    <div class="circle"></div>
    <div class="processBar1">
      <p>
        <span></span>
      </p>

    </div>
  </div>
</template>

<script>
    export default {
        name: "SliderProcess"
    }
</script>

<style scoped lang="scss">







  .slider {

    padding-left: 2%;
    padding-right: 2%;
    background: #ffffff;

    overflow: hidden;
    position: relative;
  }

  .processBar1{

  }
  .slider img{
    width: 14px;
    height: 16px;

    margin-right: 1%;
  }
  .slider h4{

    color: #007aff;
    line-height: 43px;
  }

  .slider p{

    line-height: 35px;
  }
  .slider p:nth-of-type(1){
    font-size: 12px;
    color: #667aa3;
    line-height: 35px;
  }



  .sliderBox p:nth-of-type(1) span {

    height: 3px;
    display: inline-block;
    background: #e8e8e8;
  }
  .sliderBox p:nth-of-type(1) span:nth-of-type(1) {
    width: 100%;
  }
  .circle{
    position: absolute;
    left:10%;
    top: 58%;
    width: 25px;
    height: 25px;
    background: #acc;
    border-radius: 50%;
    border:1px solid #e8e8e8;
    z-index: 1000;
  }


</style>
