<template>
    <div class="brother">
        <recent-son-con :imgpath="p" v-for="p in list"></recent-son-con>
    </div>
</template>

<script>
    import RecentSonCon from "./RecentSonCon";
    export default {
        name: "RecentSon",
      components: {RecentSonCon},
      data(){
          return{
            list:[{"imgpath":"/static/image/p1.jpg"},
              {"imgpath":"/static/image/p2.png"},
              {"imgpath":"/static/image/p3.png"},
              {"imgpath":"/static/image/p4.jpg"},
              {"imgpath":"/static/image/p5.png"},
            ]
          }
      }
    }
</script>

<style scoped>
  .brother{
    height: 350px;
    background-color: white;
    padding:0 20px 0 13px;
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>
