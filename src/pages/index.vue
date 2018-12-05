<template>
  <div class="boxWrap">
    <div class="topBox">
      <header-component></header-component>
      <div class="text">拥抱世界,面向未来</div>
    </div>
    <div class="bottomBox">
      <div class="minBox">
        <h3>返璞归真</h3>
        <div class="textcon">身处在前端社区的繁荣之下，我们都在有意或无意地追逐。而 uui 偏偏回望当初，奔赴在返璞归真的漫漫征途，自信并勇敢着，追寻于原生态的书写指令，试图以最简单的方式诠释高效。
        </div>
      </div>
      <div class="minBox">
        <h3>双面体验</h3>
        <div class="textcon">拥有双面的不仅是人生，还有 uui。一面极简，一面丰盈。极简是视觉所见的外在，是开发所念的简易。丰盈是倾情雕琢的内在，是信手拈来的承诺。一切本应如此，简而全，双重体验。</div>
      </div>
      <div class="minBox">
        <h3>星辰大海</h3>
        <div class="textcon">如果眼下还是一团零星之火，那运筹帷幄之后，迎面东风，就是一场烈焰燎原吧，那必定会是一番尽情的燃烧。待，秋风萧瑟时，散作满天星辰，你看那四季轮回，正是 uui 不灭的执念。</div>
      </div>
    </div>
    <div class="footer">
      <p class="p1">本网站由 前端同创协会(COA)创作维护</p>
    </div>
  </div>
</template>

<script>
  import HeaderComponent from "../components/HeaderComponent";

  export default {
    name: "index",
    components: {HeaderComponent}
  }
</script>

<style scoped>
  .topBox {
    height: 570px;
    background: url("/static/img/banner.jpg") no-repeat center;
  }

  .text {
    height: 500px;
    text-align: center;
    line-height: 500px;
    font-size: 48px;
    cursor: pointer;
    color: rgb(100, 92, 168);
    /*margin-top:70px;*/
  }

  .bottomBox {
    height: 300px;
    padding: 30px;
    display: flex;
    justify-content: space-around;
    background:rgb(237,237,237);
  }

  .minBox {
    width: 360px;
    height: 260px;
    border: 1px solid #cccccc;
    cursor: pointer;
  }

  .minBox h3 {
    font-weight: normal;
    text-align: center;
    line-height: 80px;
    color: #444;
    height: 80px;
  }
  .textcon{
    margin: 0 20px;
    color: #555;
  }
  .footer{
    height: 100px;
    background: #EEEEEE;
    line-height: 100px;
  }
  .footer .p1{
    font-size: 22px;
    text-align: center;
    color: #666;
  }
</style>
