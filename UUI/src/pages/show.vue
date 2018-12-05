<template>
    <div class="showBox">
      <header-component></header-component>
      <div class="section">
        <menu-component :menuinfo="menuinfo" :clicks="changeSrc"></menu-component>
        <con-component :idxs="ind" :coninfo = "menuinfo"></con-component>
        <right-component :parentmethods="changeSrc" :idxs="ind" :rightinfo="menuinfo"></right-component>
      </div>
    </div>
</template>

<script>
    import HeaderComponent from "../components/HeaderComponent";
    import MenuComponent from "../components/MenuComponent";
    import ConComponent from "../components/ConComponent";
    import RightComponent from "../components/RightComponent";
    export default {
        name: "show",
      components: {RightComponent, ConComponent, MenuComponent, HeaderComponent},
      data(){
          return{
            ind:'0',
            menuinfo:[
              {title:"介绍",src:"a1",
                pointer:["import { Button } from 'vant';","Vue.use(Button);"],
                codeShow:[
                  "<van-button type='default'>默认按钮1</van-button>",
                  "<van-button type='primary'>主要按钮</van-button>",
                  "<van-button type=\"warning\">警告按钮</van-button>"
                ]
              },
            ]
          }
      },
      methods:{
          changeSrc(i){
            this.ind = i
            console.info(i)
          }
      },
      created(){
        fetch("/static/data.json").then(res=>{
          res.json().then(data=>{
            // console.info(data)
            this.menuinfo = data;
          })
        })
      }
    }

</script>

<style scoped>
  .showBox{
    height:100%;
    overflow: hidden;
    background-color: #f0f0f0;
  }
  .section{
    overflow: hidden;
    width: 100%;
    height: 100%;
    /*display: flex;*/
  }

</style>
