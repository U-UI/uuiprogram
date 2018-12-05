<template>
  <div class="rollcon">
    <div class="brother_loop" v-for="(p,index) in list" v-if="p.son.length != 0">
      <p ref="pWord">{{p.word}}</p>
      <rollodex-son  :idx="index" :obj="i" ref="roll_border" v-for="i in p.son"></rollodex-son>
    </div>

    <div class="brother_loop" v-for="(p,index) in list" v-if="p.son.length == 0">
      <p style="border-bottom: 1px solid red" ref="pWord">{{p.word}}</p>
      <rollodex-son  :idx="index" :obj="p.word" ref="roll_border" v-for="i in p.son"></rollodex-son>
    </div>
  </div>
</template>

<script>
    import RollodexSon from "./RollodexSon";
    export default {
      name: "RollodexCon",
      components: {RollodexSon},
      methods:{

      },
      data(){
          return{
            list:[
              {word:"A",son:[
                {"imgpath":"../../static/image/p2.png"},
                  {"imgpath":"../../static/image/p3.png"},
                  {"imgpath":"../../static/image/p5.png"}]},
              {word:"B",son:[{"imgpath":"../../static/image/p2.png"},
                  {"imgpath":"../../static/image/p2.png"},
                  {"imgpath":"../../static/image/p3.png"}]},
              {word:"C",son:[{"imgpath":"../../static/image/p2.png"},
                  {"imgpath":"../../static/image/p3.png"},
                  ]},
              {word:"D",son:[{"imgpath":"../../static/image/p2.png"},
                  {"imgpath":"../../static/image/p3.png"},
                  {"imgpath":"../../static/image/p5.png"},
                  {"imgpath":"../../static/image/p2.png"},
                  {"imgpath":"../../static/image/p3.png"},
                  {"imgpath":"../../static/image/p5.png"}]},
              {word:"E",son:[{"imgpath":"../../static/image/p2.png"},
                  {"imgpath":"../../static/image/p3.png"},
                  {"imgpath":"../../static/image/p5.png"},
                  {"imgpath":"../../static/image/p2.png"},
                ]},
              {word:"F",son:[{"imgpath":"../../static/image/p2.png"},
                  {"imgpath":"../../static/image/p3.png"},
                  {"imgpath":"../../static/image/p2.png"}]},
              {word:"G",son:[1]},
              {word:"H",son:[]},
              {word:"K",son:[]},
              {word:"L",son:[]},
              {word:"M",son:[]},
              {word:"N",son:[{"imgpath":"../../static/image/p2.png"},
                  {"imgpath":"../../static/image/p3.png"},
                  {"imgpath":"../../static/image/p5.png"}]}]
          }
          },
      mounted(){

          }
    }
</script>

<style lang="scss" scoped>
    .rollcon{
      height: 350px;
      background-color: white;
      padding:0 20px 0 13px;
      overflow-y: auto;
      overflow-x: hidden;
      .brother_loop{
        p{
          text-align: center;
          font-size: 20px;
          color: #8bb0c7;
          background-color: #efefef;
        }
      }
    }
</style>
