// var CheckBox=Vue.component("CheckBox",{
//     template:`<div class="checkboxBig"><div :class="'checkbox '+CheckName" :checked="iScheck" @click="dis"><i class="iconfont icon-xuanzhong"></i></div><span class="checkTitle">{{title}}</span>
//   </div>`,
//   props:["title"],
//     data(){
//       return {
//         title:"复选框",
//         iScheck:false,
//         CheckName:'uncheck'
//       }
//     },
//     methods:{
//       dis(){
//         if(this.iScheck){
//           this.iScheck=false
//         }else{
//           this.iScheck=true
//         }
//       }
//     },
//     watch:{
//       'iScheck':function(n,o){
//         if(n){
//           this.CheckName='check'
//         }else{
//           this.CheckName='uncheck'
//         }
//       }
//     }
// })

//         var Check=Vue.component("Check",{
//             template:`<div><check-box v-for="p in ListInfo" :title="p"></check-box></div>`,
//             components: {CheckBox},
//             data(){
//             return {
//                 ListInfo:["复选框a","复选框b","复选框c","复选框d"]
//             }
//             }
//         })
var testHtml=Vue.component("test",{
    template:`<h1>我来测试</h1>`
})
var testHtml2=Vue.component("test2",{
    template:`<h1>我来测试2</h1>`
})
var a1=Vue.component("a1",{
    template:`<h1>a1</h1>`
})
var a2=Vue.component("a2",{
    template:`<h1>a2</h1>`
})
var a3=Vue.component("a3",{
    template:`<h1>a3</h1>`
})
var a4=Vue.component("a4",{
    template:`<h1>a4</h1>`
})
var a5=Vue.component("a5",{
    template:`<h1>a5</h1>`
})
var a6=Vue.component("a6",{
    template:`<h1>a6</h1>`
})
var a7=Vue.component("a7",{
    template:`<h1>a7</h1>`
})
var a8=Vue.component("a8",{
    template:`<h1>a8</h1>`
})
var a9=Vue.component("a9",{
    template:`<h1>a9</h1>`
})