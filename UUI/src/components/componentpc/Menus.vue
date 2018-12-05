<template>
  <div class="filtersContentLeft">
    <div class="leftList">
      <div class="title">
        <div class="titleTxt">Date Range</div>
        <span class="triangle">
            <span  class="triangleTop"></span>
          <!--<span  class="triangleBottom"></span>-->
        </span>
      </div>
      <div class="list" >
        <div  class="listDetail" v-for="(p,index) in radios"  :key="index" >
          <input :type="p.type" class="listInput listInput1" name="listOnly"/><span>{{p.txt}}</span>
        </div>
      </div>
    </div>
    <div class="leftList">
      <div class="title" >
        <div class="titleTxt">Special Dates</div>
        <span class="triangle ">
            <span  class="triangleTop"></span>
          <!--<span  class="triangleBottom"></span>-->
        </span>
      </div>
      <div class="list" >
        <div class="listDetail" v-for="(m,index) in checkboxs" :key="index">
          <input :type="m.type" class="listInput listInput2" /><span>{{m.txt}}</span>
        </div>
      </div>
    </div>
    <div class="leftList">
      <div class="title" >
        <div class="titleTxt">Departments</div>
        <span class="triangle ">
            <span  class="triangleTop"></span>
          <!--<span  class="triangleBottom"></span>-->
        </span>
      </div>
      <div class="listLast" >
        <div  class="listLable " v-for="(n,index) in listfont" :key="index" :class="n.class1">
          <i class="iconfont " :class="n.iconClass" ></i> {{n.text}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import $ from "jquery";
    export default {
        name: "Menus",
        data(){
        return {
          radios:[
            {type:"radio",txt:"Past Day"},
            {type:"radio",txt:"Past Week"},
            {type:"radio",txt:"Past Month"},
            {type:"radio",txt:"Past Year"},
          ],
          checkboxs:[
            {type:"checkbox",txt:"Blue Light Sale"},
            {type:"checkbox",txt:"Christmas"},
            {type:"checkbox",txt:"Annual Aale"},
            {type:"checkbox",txt:"Easter"},
          ],
          listfont:[
            {class1:"listColor1",iconClass:"icon-tingzhenqi",text:"Health"},
            {class1:"listColor2",iconClass:"icon-kafei",text:"Office"},
            {class1:"listColor3",iconClass:"icon-youxi",text:"Electronice"},
            {class1:"listColor4",iconClass:"icon-liwu",text:"Crafts"},
            {class1:"listColor5",iconClass:"icon-jiangbei",text:"Fitness"}
          ],

        }
      }

    }
  $(function(){
    // 点击收缩展开，箭头旋转
    $(".title").on("click",function(){
      console.log("sadewd");
      if($(this).next().height()!=0){
        $(this).next().slideUp("slow");
        $(this).next().height(0);
        $(this).find(".triangleTop").css("transform","rotate(180deg)");
      }else{
        if($(this).next().hasClass("listLast")){
          $(this).next().height(230);
        }else{
          $(this).next().height(120);
        }
        $(this).next().slideDown("slow");
        $(this).find(".triangleTop").css("transform","rotate(0deg)");

      }

    });
    // 滑过变色
    $(".listColor1").hover(function(){
      $(this).css({backgroundColor:"#5bc0de",color:"#ffffff"});
    },function (){
      $(this).css({backgroundColor:"#ffffff",color:"#5bc0de"});
    });
    $(".listColor2").hover(function(){
      $(this).css({backgroundColor:"#60c560",color:"#ffffff"});
    },function (){
      $(this).css({backgroundColor:"#ffffff",color:"#60c560"});
    });
    $(".listColor3").hover(function(){
      $(this).css({backgroundColor:"#f0ad4e",color:"#ffffff"});
    },function (){
      $(this).css({backgroundColor:"#ffffff",color:"#f0ad4e"});
    });
    $(".listColor4").hover(function(){
      $(this).css({backgroundColor:"#d9534f",color:"#ffffff"});
    },function (){
      $(this).css({backgroundColor:"#ffffff",color:"#d9534f"});
    });

    $(".listColor5").hover(
      function(){
        $(this).css({backgroundColor:"#d94084",color:"#ffffff"});
      },
      function (){
        $(".listColor5").click(function(){
          $(this).css({"background-color":"#d94084",color:"#ffffff"})

        });
        $(this).css({backgroundColor:"#ffffff",color:"#d94084"});

      })


  });
</script>

<style  lang="scss" scoped>
  .filtersContentLeft{
    width:350px;
    height:550px;
    margin-left: 20px;
  .leftList{
    width:100%;
  .title{
    width:100%;
    height:35px;
    border-top:2px solid #ededed;
    border-bottom:2px solid #ededed;
    background: #f8f8f8;
    display: flex;
    justify-content: space-between;
    align-content: center;
  .titleTxt{
    font-size: 12px;
    color:#828587 ;
    line-height: 35px;
    margin-left: 14px;
  }
  .triangle{
    width:6px;
    height:6px;
    margin-right: 14px;
    position: relative;
    margin-top: 10px;
  .triangleTop{
    width:0;
    height:0;
    border:6px solid transparent;
    border-bottom-color:#9b9b9b ;
    position: absolute;
    top:0;
    left:0;
    transition:all 0.5s linear;
    transform: rotate(0deg);
    /*display: none;*/
  }
  .triangleBottom{
    width:0;
    height:0;
    border:6px solid transparent;
    border-top-color:#9b9b9b ;
    position: absolute;
    top:6px;
    left:0;
    display: none;
  }
  }
  }
  .list{
    width:100%;
    background: #ffffff;
  .listDetail{
    width:100%;
    height:30px;
    display: flex;
    justify-items: flex-start;
    align-items: center;
  .listInput{
    width:16px;
    height:16px;
    display: inline-block;
    margin-left: 16px;
    margin-right: 10px;
  }
  .listInput1:checked{
    -webkit-appearance: none;
    border-radius: 50%;
    /*padding: 4px;*/
    /*border: 1px solid #d6d6d6;*/
    background: #007aff;
  }
    .listInput2:checked{
      -webkit-appearance: none;
      border-radius: 5%;
      /*padding: 4px;*/
      /*border: 1px solid #d6d6d6;*/
      background: #007aff;
    }
  span{
    font-size:10px ;
    color:#666666 ;
    line-height: 30px;
  }
  }
  }
  .listLast{
    width:100%;
    padding-top: 15px;
    padding-bottom: 15px;
    background: #ffffff;
  .listLable{
    /*width:260px;*/
    width:90%;
    height:36px;
    border-radius:4px;
    margin-bottom: 10px;
    margin-left: 5%;
    margin-right: 5%;
    font-size: 16px;
    line-height: 36px;
  .iconfont{
    margin-left: 15px;
    margin-right: 20px;
  }
  }
  .listColor1{
    border:1px solid #5bc0de;
    color:#5bc0de;
  }
  .listColor2{
    border:1px solid #60c560;
    color: #60c560;
  }
  .listColor3{
    border:1px solid #f0ad4e;
    color: #f0ad4e;
  }
  .listColor4{
    border:1px solid #d9534f;
    color: #d9534f;
  }
  .listColor5{
    border:1px solid #d94084;
    color: #d94084;
  }
  }
  }
  }
</style>
