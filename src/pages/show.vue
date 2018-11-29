<template>
    <div class="showBox">
      <header-component></header-component>
      <div class="section">
        <menu-component :menuinfo="menuinfo" :clicks="changeSrc"></menu-component>
        <con-component :idxs="ind" :coninfo = "menuinfo"></con-component>
        <right-component :idxs="ind" :rightinfo="menuinfo"></right-component>
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
              {title:"介绍",src:"a1",pointer:["import { Button } from 'vant';","Vue.use(Button);"],codeShow:["<van-button type='default'>默认按钮1</van-button>","<van-button type='primary'>主要按钮</van-button>","<van-button type=\"warning\">警告按钮</van-button>"]},
              {title:"UI-1",src:"a2",pointer:["import { Button } from 'vant';","Vue.use(Button);"],codeShow:["<van-button type='default'>默认按钮2</van-button>","<van-button type='primary'>主要按钮</van-button>","<van-button type=\"warning\">警告按钮</van-button>"]},
              {title:"UI-2",src:"a3",pointer:["import { Button } from 'vant';","Vue.use(Button);"],codeShow:["<van-button type='default'>默认按钮3</van-button>","<van-button type='primary'>主要按钮</van-button>","<van-button type=\"warning\">警告按钮</van-button>"]},
              {title:"UI-3",src:"a4",pointer:["import { Button } from 'vant';","Vue.use(Button);"],codeShow:["<van-button type='default'>默认按钮4</van-button>","<van-button type='primary'>主要按钮</van-button>","<van-button type=\"warning\">警告按钮</van-button>"]},
              {title:"UI-4",src:"a5",pointer:["import { Button } from 'vant';","Vue.use(Button);"],codeShow:["<van-button type='default'>默认按钮5</van-button>","<van-button type='primary'>主要按钮</van-button>","<van-button type=\"warning\">警告按钮</van-button>"]},
              {title:"UI-5",src:"a6",pointer:["import { Button } from 'vant';","Vue.use(Button);"],codeShow:["<van-button type='default'>默认按钮6</van-button>","<van-button type='primary'>主要按钮</van-button>","<van-button type=\"warning\">警告按钮</van-button>"]},
              {title:"UI-6",src:"a7",pointer:["import { Button } from 'vant';","Vue.use(Button);"],codeShow:["<van-button type='default'>默认按钮7</van-button>","<van-button type='primary'>主要按钮</van-button>","<van-button type=\"warning\">警告按钮</van-button>"]},
            ]
          }
      },
      methods:{
          changeSrc(i){
            this.ind = i
            console.info(i)
          }
      }
    }
</script>

<style scoped>
  .showBox{
    height:100%;
    overflow: hidden;
  }
  .section{
    overflow: hidden;
    width: 100%;
    height: 100%;
    /*display: flex;*/
  }

</style>
