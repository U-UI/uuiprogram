<template>
    <div class="boxWrap">
        <all-public-header :userface="info.userface" :username="info.username" :color="info.color" :nav="info.nav" ></all-public-header>
        <div class="section">
           <social-box :fold="fold" :saying="saying" :userface="info.userface" :username="info.username"  :card="m" :keys="idx" :key="idx" v-for="(m,idx) in info.card"></social-box>
        </div>
    </div>
</template>

<script>
    import AllPublicHeader from "../components/social/AllPublicHeader";
    import SocialBox from "../components/social/SocialBox";
    export default {
        name: "social",
      components: {SocialBox, AllPublicHeader},
      data(){
          return{
              info:{
                username:["靳迎","陈思洋","李小强","郭倩","程晓燕","肖雨"],
                userface:"/static/img/logo2.png",
                color:["orange","red","purple","skyblue"],
                nav:[
                  {icon:"icon-shouye",name:"home"},
                  {icon:"icon-wujiaoxing",name:"social"},
                  {icon:"icon-z",name:"widgets"},
                  {icon:"icon-pages",name:"filters"},
                  {icon:"icon-table2",name:"components"},
                  {icon:"icon-chartbar",name:"charts"}
                ],
                card:[
                  {
                    hostname:"mrxiao",
                    hostface:"/static/img/face1.jpg",
                    hosttime:"2 day ago",
                    hosttext:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
                    othersay:[
                      {othername:"mrli",otherface:"/static/img/face2.jpg",othertext:"hello",othertime:"2 day ago"},
                      {othername:"mrli",otherface:"/static/img/logo2.png",othertext:"hello",othertime:"2 day ago"}
                    ]
                  },
                  {
                    hostname:"mrxiao",
                    hostface:"/static/img/face2.jpg",
                    hosttime:"2 day ago",
                    hosttext:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
                    othersay:[
                      {othername:"mrli",otherface:"/static/img/logo2.png",othertext:"hello",othertime:"2 day ago"},
                      {othername:"mrli",otherface:"/static/img/face5.jpg",othertext:"hello",othertime:"2 day ago"}
                    ]
                  },
                  {
                    hostname:"mrxiao",
                    hostface:"/static/img/face3.jpg",
                    hosttime:"2 day ago",
                    hosttext:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
                    othersay:[
                      {othername:"mrli",otherface:"/static/img/logo2.png",othertext:"hello",othertime:"2 day ago"},
                      {othername:"mrli",otherface:"/static/img/face1.jpg",othertext:"hello",othertime:"2 day ago"}
                    ]
                  },
                  {
                    hostname:"mrxiao",
                    hostface:"/static/img/face4.jpg",
                    hosttime:"2 day ago",
                    hosttext:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
                    othersay:[
                      {othername:"mrli",otherface:"/static/img/face3.jpg",othertext:"hello",othertime:"2 day ago"},
                      {othername:"mrli",otherface:"/static/img/logo2.png",othertext:"hello",othertime:"2 day ago"}
                    ]
                  },
                  {
                    hostname:"mrxiao",
                    hostface:"/static/img/face5.jpg",
                    hosttime:"2 day ago",
                    hosttext:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
                    othersay:[
                      {othername:"mrli",otherface:"/static/img/logo2.png",othertext:"hello",othertime:"2 day ago"},
                      {othername:"mrli",otherface:"/static/img/face3.jpg",othertext:"hello",othertime:"2 day ago"}
                    ]
                  },
                  {
                    hostname:"mrxiao",
                    hostface:"/static/img/face4.jpg",
                    hosttime:"2 day ago",
                    hosttext:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
                    othersay:[
                      {othername:"mrli",otherface:"/static/img/face4.jpg",othertext:"hello",othertime:"2 day ago"},
                      {othername:"mrli",otherface:"/static/img/face5.jpg",othertext:"hello",othertime:"2 day ago"}
                    ]
                  }
                ]
              }
          }
      },
      methods:{
          saying(i,k){
            let timecurr = new Date().toLocaleTimeString()
            this.info.card[i].othersay.push({othername:this.info.username,otherface:this.info.userface,othertext:k,othertime:timecurr})
          },
          fold(k){
            let cards = document.querySelectorAll('.sbox')[k];
            // cards.style.transform = 'scaleY(0)'
            cards.style.display = 'none'
            console.info(cards)
          }
      }
    }
</script>

<style scoped>
  .boxWrap{
    background: rgb(231,231,231);
    /*height: 100%;*/
    /*height: 1000px;*/
  }
  .section{
    padding-top: 120px;
    overflow: hidden;
  }


</style>
