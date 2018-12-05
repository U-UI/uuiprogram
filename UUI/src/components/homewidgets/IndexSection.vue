<template>
  <div class="index_a">
    <div class="index_b">
      <div class="index_c">
        <div class="index_p">
          <div class="pic_1"></div>
          <div class="ind_f">86%</div>
        </div>
        <div class="index_y">Overall growth</div>
      </div>
      <div class="index_c">
        <div class="index_p">
          <div class="pic_2"></div>
          <div class="ind_f">613</div>
        </div>
        <div class="index_y">Unique visitors</div>
      </div>
      <div class="index_c">
        <div class="index_p">
          <div class="pic_3"></div>
          <div class="ind_f">$924</div>
        </div>
        <div class="index_y">Sales</div>
      </div>
      <div class="index_h">
        <div class="index_p">
          <div class="pic_4"></div>
          <div class="ind_f">325</div>
        </div>
        <div class="index_y">New followers</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "IndexSection"
    }
</script>

<style scoped>
  .index_a{
    width:100%;
    height:120px;
    margin-top: 20px;
  }
  .index_b{
    width:calc(100% - 20px);
    height:120px;
    margin: 0 auto;

  }

  .index_c{
    border-right:1px solid #e6e6e6;
    box-sizing: border-box;
    float:left;
    background:#fff;
    width:25%;
    height:120px;

  }
  .index_h{
    float:left;
    width:25%;
    height:120px;
    background: #fff;

  }
  .index_p{
    text-align: center;
    height:87px;
  }
  .ind_f{
    color:#007aff;
    font-size:54px;
    display: inline-block;
    line-height: 87px;
  }
  .pic_1{
    background: url(/static/image/info-data-sprite.png) no-repeat left top;
    width: 50px;
    height: 38px;
    display: inline-block;
    vertical-align: top;
    margin: 24px 14px 0 0;

  }
  .pic_2{
    background: url(/static/image/info-data-sprite.png) no-repeat ;
    background-position: -50px 0;
    width: 50px;
    height: 38px;
    display: inline-block;
    vertical-align: top;
    margin: 24px 14px 0 0;

  }
  .pic_3{
    background: url(/static/image/info-data-sprite.png) no-repeat ;
    background-position: -100px 0;
    width: 50px;
    height: 38px;
    display: inline-block;
    vertical-align: top;
    margin: 24px 14px 0 0;

  }
  .pic_4{
    background: url(/static/image/info-data-sprite.png) no-repeat right top;
    width: 50px;
    height: 38px;
    display: inline-block;
    vertical-align: top;
    margin: 24px 14px 0 0;

  }
  .index_y{
    text-align: center;
    height:20px;
    color:#999;
    font-weight: 300;
  }

  @media screen and (max-width: 1000px){
.index_c,.index_h{
  width:calc(100% - 20px);
  border-bottom: 1px solid #ccc;
  margin-left: 10px;
}
 .index_a{
   margin-bottom: 20px;
   height:484px;
 }

  }
</style>
