<template>
      <div class="indexs">
        <div class="lineright">
          <div class="line_one">
            <div class="lineright_top">
              <div class="icon_first">
                <i class="iconfont icon-xiaoxi"></i>
                Chat Widget
              </div>
              <div class="icon_last">
                <i class="iconfont icon-xie" style="color:#007aff"></i>
              </div>
            </div>
            <div class="line_tow">
              <div class="lineKw">
                <img src="/static/image/avatar-male.jpg">
                <div class="lineKe">
                  <a class="user-name" href="#">John Smith</a>
                  <p class="message">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                  </p>
                  <p class="time">
                    <strong>Today </strong>3:53 pm
                  </p>
                </div>
              </div>
              <div class="lineKs">
                <img src="/static/image/avatar-female.jpg">
                <div class="lineKk">
                  <a class="user-name" href="#">John Smith</a>
                  <p class="message">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                  </p>
                  <p class="time">
                    <strong>Today </strong>3:53 pm
                  </p>
                </div>
              </div>
              <div class="lineKw">
                <img src="/static/image/avatar-male.jpg">
                <div class="lineKe">
                  <a class="user-name" href="#">John Smith</a>
                  <p class="message">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                  </p>
                  <p class="time">
                    <strong>Today </strong>3:53 pm
                  </p>
                </div>
              </div>
              <div class="lineKw">
                <img src="/static/image/avatar-male.jpg">
                <div class="lineKe">
                  <a class="user-name" href="#">John Smith</a>
                  <p class="message">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                  </p>
                  <p class="time">
                    <strong>Today </strong>3:53 pm
                  </p>
                </div>
              </div>
            </div>
            <div class="lineright_footer">
              <input type="text" placeholder="Write your message here..."/>
              <input type="submit" value="Send"/>
            </div>
          </div>
        </div>
      </div>

</template>

<script>
    export default {
        name: "IndexLineright"
    }
</script>

<style lang="scss" scoped>
  .indexs{
    width: calc(50% - 10px);
    float: right;
  }
  .lineright{
    height:400px;
    background: #fff;
    margin-top: 20px;

  }
  .line_one{
    width:100%;
  }
  .lineright_top{
    width:100%;
    height:50px;
    background:#fff;
    line-height: 50px;

  }
  .lineright_top div:first-child{
    float: left;
    color:#007aff;
  }
  .lineright_top div:last-child{
    float: right;
  }
  .icon_first{
    margin-left: 10px;
  }
  .icon_last{
    margin-right: 10px;
  }
  .line_tow{
    width:100%;
    height:300px;

    overflow-y: scroll;
  }
  .lineKw{
    width:100%;
    height:136px;
    position: relative;
    padding-left: 40px;
    padding-right: 80px;
    box-sizing: border-box;
  }
  .lineKw img{
    float:left;
    position: absolute;
    bottom:-2px;
    left:0;
  }
  .lineKe{
    padding: 12px 15px;
    border-radius: 15px;
    background: #e5e5ea;
    position: relative;
  }

  .lineKk{
    padding: 12px 15px;
    border-radius: 15px;
    background: #007aff;
    position: relative;
  }
  .lineKs{
    width:100%;
    height:136px;
    position: relative;
    padding-left: 80px;
    padding-right: 40px;
    box-sizing: border-box;
    color:#fff;
  }
  .lineKs img{
    float:left;
    position: absolute;
    bottom:-2px;
    right:0;
  }
  .message{
    height:54px;
    width:90%;
  }
  .line_tow img{
    border-radius:50%;
    width:30px;
    height:30px;
  }

.lineright_footer{
  width:100%;
  height:52px;
  background: #f2f2f2;
  border-top:1px solid #ccc;

}
  .lineright_footer input:first-child{
    height:35px;
    width:80%;
    margin-left: 20px;
   margin-top: 5px;
  }
  .lineright_footer input:last-child{
    height:35px;
    border:none;
    color:#007aff ;
  }

  @media  screen and (max-width: 1200px){
    .indexs{
      width: 100%;
      float: none;
      min-width: 500px;
    }
  }
</style>
