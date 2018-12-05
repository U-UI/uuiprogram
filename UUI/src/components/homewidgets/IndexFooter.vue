<template>
  <div class="fot_one">
    <div class="fot_tow">
      <index-footerleft></index-footerleft>
      <index-footerright></index-footerright>
    </div>
  </div>
</template>

<script>
    import IndexFooterleft from "./IndexFooterleft";
    import IndexFooterright from "./IndexFooterright";
    export default {
        name: "IndexFooter",
      components: {IndexFooterright, IndexFooterleft}
    }
</script>

<style scoped>
  .fot_one{
    width:100%;
    height:282px;
    margin-top: 20px;

  }
  .fot_tow{
    width:calc(100% - 40px);
    height:282px;
    margin: 0 auto;

  }
  .fot_tow div{
    float:left;
  }

  .fot_a img{
    float:left
  }
  .span1{
    width:350px;
    height:47px;
    display: inline-block;
    float:left;
    line-height: 47px;
    margin-left: 5px;
  }
  .span2{
    width:90px;
    height:47px;
    line-height: 47px;

  }

</style>
