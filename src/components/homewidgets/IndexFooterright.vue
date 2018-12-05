<template>
  <div class="fot_right">
    <filters-content-right-center></filters-content-right-center>
  </div>
</template>

<script>
    import FiltersContentRightCenter from "./FiltersContentRightCenter";
    export default {
        name: "IndexFooterright",
      components: {FiltersContentRightCenter},
      methods:{

          aa(){
            console.log(1)
            window.onresize=function () {
              console.log(screenX)
            }
          }
      },
      created(){
       this.aa()
      }

    }
</script>

<style scoped>

  .fot_tow div{
    float:left;
  }

  .fot_right{
    width:calc(58.3333333336% - 20px);
    margin-left: 20px;
    height:282px;
    box-sizing: border-box;
  }


  .fot_a img{
    float:left
  }


  @media screen and (max-width: 1000px){
    .fot_right{
      width:100%;
      margin-top: 20px;
      margin-bottom: 20px;
      margin-left: 0;


    }

  }
</style>
