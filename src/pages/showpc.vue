<template>
  <div class="showBox">
    <header-component></header-component>
    <div class="section">
      <menu-showpc  :menuinfo="menuinfo" :changeView="changeView" :clicks="changeSrc"></menu-showpc>
      <con-component :idxs="ind" :coninfo = "menuinfo"></con-component>
      <right-showpc :currentView="currentView" :menuinfo="menuinfo"></right-showpc>
    </div>
  </div>
</template>

<script>
    import HeaderComponent from "../components/HeaderComponent";
    import MenuShowpc from "../components/showpc/MenuShowpc";
    import ConComponent from "../components/ConComponent";
    import RightShowpc from "../components/showpc/RightShowpc";
    export default {
        name: "showpc",
      components: {RightShowpc, ConComponent, MenuShowpc, HeaderComponent},
      data(){
        return{
          ind:'0',
          currentView:'demo',
          menuinfo:[
            {
              "title": "hello",
              "src": "demo",
              "pointer": [
                "点击左侧的导航开始探索",
                "点击右侧的视图进行体验"
              ],
              "codeShow": [
                "<van-button type='default'>默认按钮1</van-button>",
                "<van-button type='primary'>主要按钮</van-button>",
                "<van-button type=\"warning\">警告按钮</van-button>"
              ]
            },
            {
              "title": "ui组件1",
              "src": "demo2",
              "pointer": [
                "import { Button } from 'vant';",
                "Vue.use(Button);"
              ],
              "codeShow": [
                "<van-button type='default'>默认按钮2</van-button>",
                "<van-button type='primary'>主要按钮</van-button>",
                "<van-button type=\"warning\">警告按钮</van-button>"
              ]
            },
            {
              "title": "ui组件2",
              "src": "demo2",
              "pointer": [
                "import { Button } from 'vant';",
                "Vue.use(Button);"
              ],
              "codeShow": [
                "<van-button type='default'>默认按钮3</van-button>",
                "<van-button type='primary'>主要按钮</van-button>",
                "<van-button type=\"warning\">警告按钮</van-button>"
              ]
            },
            {
              "title": "ui组件3",
              "src": "demo",
              "pointer": [
                "import { Button } from 'vant';",
                "Vue.use(Button);"
              ],
              "codeShow": [
                "<van-button type='default'>默认按钮4</van-button>",
                "<van-button type='primary'>主要按钮</van-button>",
                "<van-button type=\"warning\">警告按钮</van-button>"
              ]
            },
            {
              "title": "ui组件4",
              "src": "demo2",
              "pointer": [
                "import { Button } from 'vant';",
                "Vue.use(Button);"
              ],
              "codeShow": [
                "<van-button type='default'>默认按钮5</van-button>",
                "<van-button type='primary'>主要按钮</van-button>",
                "<van-button type=\"warning\">警告按钮</van-button>"
              ]
            },
            {
              "title": "ui组件5",
              "src": "demo",
              "pointer": [
                "import { Button } from 'vant';",
                "Vue.use(Button);"
              ],
              "codeShow": [
                "<van-button type='default'>默认按钮6</van-button>",
                "<van-button type='primary'>主要按钮</van-button>",
                "<van-button type=\"warning\">警告按钮</van-button>"
              ]
            },
            {
              "title": "ui组件6",
              "src": "demo2",
              "pointer": [
                "import { Button } from 'vant';",
                "Vue.use(Button);"
              ],
              "codeShow": [
                "<van-button type='default'>默认按钮7</van-button>",
                "<van-button type='primary'>主要按钮</van-button>",
                "<van-button type=\"warning\">警告按钮</van-button>"
              ]
            },
            {
              "title": "ui组件7",
              "src": "demo",
              "pointer": [
                "import { Button } from 'vant';",
                "Vue.use(Button);"
              ],
              "codeShow": [
                "<van-button type='default'>默认按钮7</van-button>",
                "<van-button type='primary'>主要按钮</van-button>",
                "<van-button type=\"warning\">警告按钮</van-button>"
              ]
            },
            {
              "title": "ui组件8",
              "src": "demo2",
              "pointer": [
                "import { Button } from 'vant';",
                "Vue.use(Button);"
              ],
              "codeShow": [
                "<van-button type='default'>默认按钮7</van-button>",
                "<van-button type='primary'>主要按钮</van-button>",
                "<van-button type=\"warning\">警告按钮</van-button>"
              ]
            },
            {
              "title": "ui组件9",
              "src": "demo",
              "pointer": [
                "import { Button } from 'vant';",
                "Vue.use(Button);"
              ],
              "codeShow": [
                "<van-button type='default'>默认按钮7</van-button>",
                "<van-button type='primary'>主要按钮</van-button>",
                "<van-button type=\"warning\">警告按钮</van-button>"
              ]
            }
          ]

        }
      },
      methods:{
        changeSrc(i){
          this.ind = i
          console.info(i)
        },
        changeView(j){
          this.currentView = j
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
