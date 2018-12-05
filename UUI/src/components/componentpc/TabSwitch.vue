<template>
  <div class="tabsBox">

    <ul>
      <p><img src="../../../static/img/ico4.png" alt=""><span>Tabs</span></p>
      <li v-for="(item,index) in tabData" @click="tab(index)"
          :class="{ red:changeRed == index}"
      ><span :class="{active:index == num}">{{item}}</span></li>
    </ul>
    <div class="tabCon">
      <div v-for='(itemCon,index) in tabContentData' v-show="index==num"

      >
        <p>{{itemCon.title}}</p>
        <br> <span>{{itemCon.cont}}</span>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "TabSwitch",
    data () {
      return {
        tabData: ["选项一", "选项二","选项三"],
        tabContentData: [
          {"title":"主题一","cont":"Lorem ipsum dolor sit amet, consectetur adipiscing"},
          {"title":"主题二","cont":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet auctor purus non. Phasellus pretium rutrum elit in cursus. Donec ullamcorper nec massa vel mattis. "},
          {"title":"主题三","cont":"Curabitur eros metus, dapibus quis est et, dapibus imperdiet dolor. adipiscing"}
        ],
        num:1,
        changeRed:1
      }
    },
    methods:{
      tab(index) {
        this.num=index;
        this.changeRed = index;

      },

    }
  }
</script>

<style scoped lang="scss">
  .red {
    color: #666a91;
    background: #fff;
    border: 1px solid #e6e6e6;
    border-bottom: 0;
    cursor: pointer;

  }

  .tabsBox{
    max-width: 360px;
    max-height: 600px;
  }
  .tabsBox p {
    font-size: 14px;
    color: #007aff;
    line-height: 50px;
    margin-right: 2%;

  }
  .tabsBox ul {
    color: #007aff;
    display: -webkit-flex;
    display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox; /* TWEENER - IE 10 */
    display: -webkit-flex; /* NEW - Chrome */
    display: flex;
    position: relative;
    p {
      margin-left: 1%;
    }
    li {
      line-height: 50px;
      width: 27%;
      text-align: center;
      &:hover {
        cursor: pointer;
      }
    }
  }

  .tabCon {
    background: #fff;
    padding-left: 1%;
    padding-right: 1%;
    padding-bottom: 4%;
    margin-bottom: 2.5%;
    div {

      p {
        font-size: 18px !important;
        color: #6a6666;
        border-top: 1px solid #e6e6e6;
        padding-top: 22%;
      }
      span {
        display: inline-block;
        font-size: 14px;
        color: #666666;
        line-height: 34px;
      }
    }
  }

</style>
