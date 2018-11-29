
var a1 = Vue.component("a1", {
    template: `<h1>a1</h1>`
})
//=======
/**
 * 换肤
 */
var changeContent=Vue.component("changeContent",{
    data(){
      return {
        shows2:true,
        shows:false,
      }
    },
    methods:{
      toggle(){
        this.shows = false
        this.shows2 = true
      },
      toggle2(){
        this.shows2 = false
        this.shows= true
      }
    },
    template:`<div class="plinks"><div class="top"><a href="javascript:;" @click="toggle()">a</a><a href="javascript:;" @click="toggle2()">b</a></div><div class="down" v-show="shows2"></div><div class="down2" v-show="shows"></div></div>`
  })
  