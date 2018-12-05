<template>
    <div class="toopTip">
      <p><img src="../../assets/img/ico6.png" alt=""><span>Tooltip</span></p>
     <div>
       <p>
         <span>top</span>
         <span>tooptip content</span>
         <span></span>
       </p>
       <p>

         <span>right</span>

         <span>left</span>
       </p>
       <p>
         <span>bottom</span>
         <span>tooptip content</span>
         <span></span>
       </p>
     </div>
  </div>

</template>

<script>
    export default {
        name: "ToolTip"
    }
</script>

<style scoped lang="scss">

  .toopTip{
    width: 48%;
    padding-bottom: 3%;
    p{
      font-size: 14px;
      color: #007aff!important;
      line-height: 40px;
      margin-bottom: 0;
    }
    div{
      width:100%;
      text-align: center;
      color: #fff;
      span{
        &:hover{
          cursor: pointer;
          display: inline-block;
          background: #fff;
          color: #acc;
          border:1px solid #acc;
        }
        color: #fff;
        border-radius: 5px;
      }
      p:nth-of-type(1){

        &:hover {
          span:nth-of-type(2) {
            display: block;
          }
          span:nth-of-type(3) {
            display: block;
          }
        }
        position: relative;
        span:nth-of-type(1){

          &:hover{
            background: #fff;
            color: #acc;
            border:1px solid #acc;
          }
          width:40%;
          background: #bbbbbb;
          display: inline-block;
        }

        span:nth-of-type(2){
          display: none;
          position: absolute;
          left:30%;
          top: -53px;
          color: #fff;
          background:#000;
          padding: 0.5%;
          padding-left: 2.5%;
          padding-right: 2.5%;
          text-align: center;

        }
        span:nth-of-type(3){
          display: none;

          position: absolute;
          left:47%;
          top: -12px;
          width: 0;
          height: 0;
          border:8px solid transparent;
          border-top-color: #000;
        }
        text-align: center;
      }
      p:nth-of-type(2){
        text-align: center;
        margin-bottom: 3%;

        margin-top: 3%;
        span{
          display: inline-block;
          width:40%;
          background: #bbbbbb;
          display: inline-block;
          &:hover{
            background: #fff;
            color: #acc;
            border:1px solid #acc;
          }
        }
        span:nth-of-type(1){
          margin-right: 3%;
        }
      }
      p:nth-of-type(3){
        &:hover{
          span:nth-of-type(2){
            display: block;
          }
          span:nth-of-type(3){
            display: block;
          }
        }
        position: relative;

        span:nth-of-type(1){
          &:hover{
            background: #fff;
            color: #acc;
            border:1px solid #acc;

          }
          width:40%;
          background: #bbbbbb;
          display: inline-block;

        }
        text-align: center;
        span:nth-of-type(2){
          position: absolute;
          left:30%;
          top: 50px;
          color: #fff;
          background:#000;
          padding: 0.5%;
          padding-left: 2.5%;
          padding-right: 2.5%;
          text-align: center;
          display: none;

        }
        span:nth-of-type(3){
          position: absolute;
          left:47%;
          top: 35px;
          width: 0;
          height: 0;
          border:8px solid transparent;
          border-bottom-color: #000;
          display: none;

        }
      }
    }
  }
</style>
