<template>
  <div class="filtersContentRight">
    <div class="rightTop">
      <div class="rightTopList">
        <span class="rightTopListSpan">Past Week</span><img src="/static/image/1.jpg" alt="">
      </div>
      <div class="rightTopList">
        <span class="rightTopListSpan">All Departments</span><img src="/static/image/1.jpg" alt="">
      </div>
      <div class="rightTopList">
        <span class="rightTopListSpan">Ages 25-32</span><img src="/static/image/1.jpg" alt="">
      </div>
    </div>
    <filters-content-right-center></filters-content-right-center>
    <div class="rightBottom">Load more</div>
  </div>
</template>

<script>
    import FiltersContentRightCenter from "./FiltersContentRightCenter";
    export default {
        name: "FiltersContentRight",
        components: {FiltersContentRightCenter},
    }
    $(function(){
      $(".rightBottom").hover(function(){
          $(this).css({backgroundColor:"#dadada",color:"#ffffff"});
      },function (){
          $(this).css({backgroundColor:"#e8e8e8",color:"#999b9c"});
      });
    })
</script>

<style lang="scss"  scoped>
  .filtersContentRight{
    width:72%;
    /*height:650px;*/
    /*background: lightcoral;*/
  }
  .rightTop{
    width:100%;
    height:45px;
    background: #dadada;
    border-radius: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .rightTopList{
      font-size:10px ;
      color: #ffffff;
      background: #999999;
      padding:5px;
      margin-left: 10px;
      .rightTopListSpan{
        margin-right: 10px;
      }
    }
  }
  .rightBottom{
    width:100%;
    height:43px;
    border: 1px solid #c9c9c9;
    margin-top: 20px;
    margin-bottom:30px;
    /*background: red;*/
    font-size: 14px;
    color: #999999;
    line-height: 43px;
    border-radius: 6px;
    text-align: center;
  }

  @media screen and (max-width: 1000px) {

    .filtersContentRight {
      width: 100%;
    }

  }
</style>
