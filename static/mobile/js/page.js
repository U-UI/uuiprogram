
//===============
/**首页start */
  var dangdangindex = Vue.component("ddindex",{
    data(){
        return{
            info:{
                "nav":["导航1","导航2","导航3","导航4","导航5","导航6","导航7","导航8","导航9","导航10","导航11","导航12"],
                "list":[
                    {"name":"榜单1","pic":"img/n1.jpg","name1":"nav1","pic1":"img/n6.jpg"},
                    {"name":"榜单2","pic":"img/n2.jpg","name1":"nav2","pic1":"img/n7.jpg"},
                    {"name":"榜单3","pic":"img/n3.jpg","name1":"nav3","pic1":"img/n8.jpg"},
                    {"name":"榜单4","pic":"img/n4.jpg","name1":"nav4","pic1":"img/n9.jpg"},
                    {"name":"榜单5","pic":"img/n5.jpg","name1":"nav5","pic1":"img/n10.jpg"}
                ],
                "goods1":[
                    {
                        "name":"product-name",
                        "pic":"img/public-product.jpg",
                        "now":0.01,
                        "old":65.00
                    },
                    {
                        "name":"product-name",
                        "pic":"img/public-product.jpg",
                        "now":0.01,
                        "old":65.00
                    },
                    {
                        "name":"product-name",
                        "pic":"img/public-product.jpg",
                        "now":0.01,
                        "old":65.00
                    },
                    {
                        "name":"product-name",
                        "pic":"img/public-product.jpg",
                        "now":0.01,
                        "old":65.00
                    },
                    {
                        "name":"product-name",
                        "pic":"img/public-product.jpg",
                        "now":0.01,
                        "old":65.00
                    },
                    {
                        "name":"product-name",
                        "pic":"img/public-product.jpg",
                        "now":0.01,
                        "old":65.00
                    },
                    {
                        "name":"product-name",
                        "pic":"img/public-product.jpg",
                        "now":0.01,
                        "old":65.00
                    },
                    {
                        "name":"product-name",
                        "pic":"img/public-product.jpg",
                        "now":0.01,
                        "old":65.00
                    },
                    {
                        "name":"",
                        "pic":"img/h9.png",
                        "now":"",
                        "old":""
                    }
                ],
                "goods2":[
                    {
                        "name":"折扣分类1",
                        "discount":"5折封顶",
                        "pic":"img/public-product.jpg"
                    },
                    {
                        "name":"折扣分类2",
                        "discount":"下单6折",
                        "pic":"img/public-product.jpg"
                    },
                    {
                        "name":"折扣分类3",
                        "discount":"每满150减50",
                        "pic":"img/public-product.jpg"
                    },
                    {
                        "name":"折扣分类4",
                        "discount":"每满150减50",
                        "pic":"img/public-product.jpg"
                    },
                    {
                        "name":"折扣分类5",
                        "discount":"每满150减50",
                        "pic":"img/public-product.jpg"
                    },
                    {
                        "name":"折扣分类6",
                        "discount":"每满150减50",
                        "pic":"img/public-product.jpg"
                    },
                    {
                        "name":"折扣分类7",
                        "discount":"每满150减50",
                        "pic":"img/public-product.jpg"
                    },
                    {
                        "name":"折扣分类8",
                        "discount":"5折封顶",
                        "pic":"img/public-product.jpg"
                    },
                    {
                        "name":"折扣分类9",
                        "discount":"下单6折",
                        "pic":"img/public-product.jpg"
                    }
                ],
                "goods3":  [
                    {
                        "name":"喜好推荐1",
                        "price":22.5,
                        "pic":"img/public-product.jpg",
                        "isSs":true,
                        "pinkage":true
                    },
                    {
                        "name":"喜好推荐2",
                        "price":21.00,
                        "pic":"img/public-product.jpg",
                        "isSs":true,
                        "pinkage":true
                    },
                    {
                        "name":"喜好推荐3",
                        "price":22.5,
                        "pic":"img/public-product.jpg",
                        "isSs":true,
                        "pinkage":false
                    },
                    {
                        "name":"喜好推荐4",
                        "price":39.5,
                        "pic":"img/public-product.jpg",
                        "isSs":true,
                        "pinkage":true
                    },
                    {
                        "name":"喜好推荐5",
                        "price":22.5,
                        "pic":"img/public-product.jpg",
                        "isSs":true,
                        "pinkage":false
                    },
                    {
                        "name":"喜好推荐6",
                        "price":22.5,
                        "pic":"img/public-product.jpg",
                        "isSs":true,
                        "pinkage":false
                    },
                    {
                        "name":"喜好推荐7",
                        "price":22.5,
                        "pic":"img/public-product.jpg",
                        "isSs":true,
                        "pinkage":true
                    },
                    {
                        "name":"喜好推荐8",
                        "price":22.5,
                        "pic":"img/public-product.jpg",
                        "isSs":true,
                        "pinkage":true
                    },
                    {
                        "name":"喜好推荐9",
                        "price":22.5,
                        "pic":"img/public-product.jpg",
                        "isSs":true,
                        "pinkage":false
                    },
                    {
                        "name":"喜好推荐10",
                        "price":22.5,
                        "pic":"img/public-product.jpg",
                        "isSs":true,
                        "pinkage":true
                    }
                ],
                "swiper1":[
                    "img/1.jpg",
                    "img/2.jpg",
                    "img/3.jpg",
                    "img/4.jpg",
                    "img/5.jpg",
                    "img/6.jpg",
                    "img/7.jpg",
                    "img/8.jpg"
                ],
                "swiper2":[
                    {"name":"广告位1","title":"特卖"},
                    {"name":"广告位2","title":"热卖"},
                    {"name":"广告位3","title":"限时购"},
                    {"name":"广告位4","title":"满减"},
                    {"name":"广告位5","title":"热卖"},
                    {"name":"广告位6","title":"热卖"}
                ],
                "swiper3":[
                    "Adidas",
                    "NIKE",
                    "Lining"
                ]
            }

        }
    },
    template:`
    <div class="boxwrap">

      <header class="dd_ind_header">
  <div class="hd_top">
  <a href="">
  <i class="iconfont icon-caidan"></i>
  </a>
  <a href="javascript:0;">
  <p>
    <i class="iconfont icon-sousuo"></i>
    搜索  种类/产品
  </p>
  <i class="iconfont icon-richscan_icon"></i>
  </a>
  <a href="">
  <i class="iconfont icon-xiaoxi"></i>
  </a>
  </div>
  <div class="hd_bottom">
  <div class="hd_bot_left">
  <a href="javascript:0;" v-for="p in info.nav">{{p}}</a>
  </div>
  <div class="hd_bot_right">
  <i class="iconfont icon-youjiantou"></i>
  </div>
  </div>
  </header>

  <div class="section">
  <div class="swiper swiper1">
  <div class="swiper-wrapper">
  <div class="swiper-slide" v-for="p in info.swiper1">
  <img :src="p" alt="">
  </div>
  </div>
  </div>
  <a class="title_img" href="javascript:0;">
  <img src="img/9.jpg" alt="">
  </a>

  <ul class="nav_ul">
  <li class="nav_li" v-for="p in info.list">
  <a href="javascript:0;">
  <img :src="p.pic" alt="">
  <span>{{p.name}}</span>
  </a>
  <a href="javascript:0;">
  <img :src="p.pic1" alt="">
  <span>{{p.name1}}</span>
  </a>
  </li>
  </ul>

  <div class="ad">
  <img src="img/logo1.jpg" alt="">
  <div class="swiper swiper2">
  <div class="swiper-wrapper">
  <div class="swiper-slide" v-for="p in info.swiper2">
    <span>{{p.title}}</span>
    {{p.name}}
  </div>
  </div>
  </div>
  <a class="ad_more" href="javascript:0;">更多</a>
  </div>

  <div class="brand">
    <img class="brand_title" src="img/l1.jpg" alt=""><div class="swiper swiper3">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="p in info.swiper3">{{p}}</div>
    </div>
    </div>
  </div>

  <div class="sale">
  <div class="sale_title">
  <a href="#">
  <img src="img/logo2.jpg" alt="">
  </a>
  <a href="#" class="time">
  <span>0</span>
  <span>0</span>
  &nbsp;时&nbsp;
  <span>0</span>
  <span>0</span>
  &nbsp;分&nbsp;
  <span>0</span>
  <span>0</span>
  &nbsp;秒
  </a>
  </div>
  <ul class="sale_ul">
  <li class="sale_li" v-for="(p,idx) in info.goods1">
  <a href="#">
  <img :src="p.pic" alt="">
  <p class="goods_name">
    {{p.name}}
  </p>
  <p class="goods_price">
    <span>{{shown(idx)}}</span>
    <span>{{showo(idx)}}</span>
  </p>
  </a>
  </li>
  </ul>
  </div>

    <a href="#" class="acti">
  <img src="img/a1.jpg" alt="">
  </a>

  <div class="sort">
  <div class="sort_title">
  <div class="sort_title_top">
  <img src="img/t1.jpg" alt="">
  <p class="sort_refe">
  <a href="#">
    书城&nbsp;
    <span><i class="iconfont icon-youjiantou"></i></span>
  </a>
  <a href="#">电子书&nbsp;
    <span><i class="iconfont icon-youjiantou"></i></span></a>
  <a href="#">网络文学&nbsp;
    <span><i class="iconfont icon-youjiantou"></i></span></a>
  </p>
  </div>
  <a class="sort_ad" href="#">
  <img src="img/k1.jpg" alt="">
  </a>
  </div>
  <ul class="sort_ul">
  <li class="sort_li" v-for="p in info.goods2"><a href="#">
  <b>{{p.name}}</b>
  <span>
  {{p.discount}}
  </span>
  <img :src="p.pic" alt="">
  </a></li>
  </ul>
  </div>

  <div class="cap">
  <p class="cap_title">
  <b>√</b>
  猜您喜欢
  </p>
  <ul class="cap_ul">
  <li class="cap_li" v-for="(p,idx) in info.goods3">
  <a href="#">
  <img :src="p.pic" alt="">
  <p class="cap_name">
    {{p.name}}
  </p>
  <p class="cap_state">
    <span v-show="p.isSs">自营</span>
    <span v-show="p.pinkage">包邮</span>
  </p>
  <strong>{{p.price}}</strong>
  </a>
  </li>
  </ul>
  </div>
  </div>
  </div>
    `
    ,
    methods:{

    },
    mounted(){
        let s1 = new Swiper('.swiper1',{
            autoplay:{
                delay:3000,
                disableOnInteraction:false
            },
            loop:true,
            speed:200,
        })
        let s2 = new Swiper('.swiper2',{
            direction: 'vertical',
            autoplay: {
                delay: 1500
            },
            speed: 500
        })
        let s3 = new Swiper('.swiper3',{
            autoplay:{
                delay:2000,
                disableOnInteraction:false
            },
            loop:true,
            speed:200,
        })
        window.addEventListener('scroll', function () {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop>=150){
                document.querySelectorAll("header")[0].style = "position:fixed;z-index:100;background:red;color:#fff"
            }else{
                document.querySelectorAll("header")[0].style = "position:static;background:#fff;color:#333"
            }
        })

    },
    computed:{
        shown(i){
            return function(i){
                if(this.info.goods1[i].name==''){
                    return ''
                }else{
                    return `￥${this.info.goods1[i].now}`
                }
            }
        },
        showo(i){
            return function(i){
                if(this.info.goods1[i].name==''){
                    return ''
                }else{
                    return `￥${this.info.goods1[i].old}`
                }
            }
        }
    }
  })
/**首页end */
//============
/**购物车start */
var  dangdangCart=Vue.component("dangdangCart",{
  template:`<div class="cart_box">
<cart-head></cart-head>
<cart-section :products="info"></cart-section>
<dd-cart-foot></dd-cart-foot>
</div>`,
data(){
    return {
      info:[
        {
          "tep":"当当网",
          "pinkage":true,
          "value":[
            {
              "name":"【11.15超级品牌日】【三只松鼠_香辣味辣条180gx2袋】大刀肉大面筋",
              "old":93.00,
              "now":55.80,
              "pic":"img/h1.jpg",
              "qal":1,
            },
            {
              "name":"不抱怨的世界.人际关系篇",
              "old":65.00,
              "now":23.80,
              "pic":"img/h2.jpg",
              "qal":1,
            },
            {
              "name":"美特斯邦威雪地靴冬新款女趣味可拆卸雪地靴202664商场同款",
              "old":93.00,
              "now":55.80,
              "pic":"img/h3.jpg",
              "qal":1,
            },
            {
              "name":"【 人气爆款限时秒杀】六福珠宝 PT950皇冠铂金开口戒指女戒活口戒   HIPTBR0002",
              "old":93.00,
              "now":55.80,
              "pic":"img/h4.jpg",
              "qal":1,
            }
          ]
        },
        {
          "tep":"童装旗舰店",

          "value":[
            {
              "name":"限时秒杀包邮】原来这就是二十四节气 全12册 中国传统节日故事绘本24节气科普文化知识百科儿童绘本书读物二十四节气一年级课外书籍6-12岁 原来这就是二十四节气",
              "old":93.00,
              "now":55.80,
              "pic":"img/h5.jpg",
              "qal":1,
            },
            {
              "name":"被窝是青春的坟墓（经典纪念版）",
              "old":93.00,
              "now":55.80,
              "pic":"img/h6.jpg",
              "qal":1,
            },
            {
              "name":"璐瑶自发热保护颈椎脖套女保暖肩颈热敷带脖子颈托家用成人舒适",
              "old":93.00,
              "now":55.80,
              "pic":"img/h7.jpg",
              "qal":1,
            },
            {
              "name":"【悦乐朵玩具】儿童手工剪纸套装创意宝宝手工diy制作材料彩纸线稿趣味剪纸书大全立体折纸3-6-12岁幼儿园宝宝益智玩具女孩男孩六一儿童节礼物",
              "old":93.00,
              "now":55.80,
              "pic":"img/h8.jpg",
              "qal":1,
            }
          ]
        }
      ]
    }
},
})

var ddCartSection=Vue.component("CartSection",{
  template:`<section class="cart_section_box">
  <product-list v-for="(p,idx) in products" :key="idx" :products="p"></product-list>
<div class="account">
  <span>去支付</span>
</div>
</section>`,
props:["products"],
})

var ddCartHead=Vue.component("CartHead",{
  template:`<header class="cart_hd_box">
<div class="hd_hide">
  <a href="#">编辑</a>
  <a href="#">
    <i class="iconfont icon-xiaoxi"></i>
  </a>
</div>
<div>购物车</div>
<div>
  <a href="#">编辑</a>
  <a href="#">
    <i class="iconfont icon-xiaoxi"></i>
  </a>
</div>
</header>`,
})

var ddCartproductlist=Vue.component("ProductList",{
  template:`<div class="product_box">
<div class="protuct_top">
<div class="pt_left">
  <input :class="namea" :checked="isCheck" type="checkbox" @click="all">
  <a href="javascript:0">{{products.tep}}</a>
</div>
<div class="pt_right">
  <span v-show="products.pinkage">已免运费</span>
  <a href="javascript:0;">编辑</a>
</div>
</div>
<ul class="pl">
<products v-for="(u,idx) in products.value" :key="idx" :info="u" :id="idx" @del="del" @add="add" @dis="dis" :flags="flags"></products>
</ul>
</div>`,
props:["products"],
data(){
return {
  allcheck:false,
  isCheck:false,
  namea:'unchecked_btn',
  arr:[],
  flags:false
}
},
methods:{
all(){
  if(this.isCheck){
    this.isCheck=false
    this.flags=false
    this.namea='unchecked_btn'
  }else{
    this.isCheck=true
    this.flags=true
    this.namea='checked_btn'
  }
},
del(i){
  if(this.products.value[i].qal<=1){
    this.products.value[i].qal=1
    return
  }
  this.products.value[i].qal--
},
add(i){
  this.products.value[i].qal++
},
dis(i){
  if(this.products.value[i].checked){
    this.products.value[i].checked=false
    this.arr.splice(0,1)
  }else{
    this.products.value[i].checked=true
    this.arr.push(i)
  }
}
},
watch:{
'arr': function(n,o){
  if(n.length===this.products.value.length){
   this.isCheck=true
    this.namea='checked_btn'
  }else{
    this.isCheck=false
    this.namea='unchecked_btn'
  }
}
}
})

var ddCartProducts=Vue.component("Products",{
  template:`<li class="product_li">
<input type="checkbox" :class="isCheck" :checked="flag" @click="dis">
<a class="pro_img" href="javascript:0;">
<img :src="info.pic" alt="">
</a>
<div class="mess">
<p class="p1">
  {{info.name}}
</p>
<p class="p2">
  <span>￥{{info.now}}</span>
  <span>￥{{info.old}}</span>
</p>
<p class="p3">
  <a @click="del">－</a>
  <span>{{info.qal}}</span>
  <a @click="add">＋</a>
</p>
</div>
</li>`,props:["info","id","flags"],
data(){
return {
  isCheck:"uncheck",
  flag:false
}
},
methods:{
del(){
  this.$emit('del',this.id)
},
add(){
  this.$emit('add',this.id)
},
dis(){
  if(this.flag){
    this.flag=false
  }else{
    this.flag=true
  }
}
},
watch:{
'flag':function(n,o){
    if(n){
      this.isCheck="check"
    }else{
      this.isCheck="uncheck"
    }
  this.$emit('dis',this.id)
},
'flags':function(n,o){
  this.flag=n
}
}
})

var ddCartFoot=Vue.component("ddCartFoot",{
  template:`<footer class="cart_foot">
<a href="javascript:0;">
  <i class="iconfont icon-shouye_huaban_huaban"></i>
  <span>首页</span>
</a>
<a href="javascript:0;">
  <i class="iconfont icon-fenlei1"></i>
  <span>分类</span>
</a>
<a href="javascript:0;">
  <i class="iconfont icon-im_faxian"></i>
  <span>发现</span>
</a>
<a href="javascript:0;">
  <i class="iconfont icon-daohanggouwuche"></i>
  <span>购物车</span>
<span class="count">9</span>
</a>
<a href="javascript:0;">
  <i class="iconfont icon-wode"></i>
  <span>我的</span>
</a>
</footer>`,
})

/**购物车end */
/**========= */
/**搜索页start */
let g = Vue.component("shopList", {
  template: ` <div class="clonesBox">内容一</div>`
})
var searCh=Vue.component("searCh", {
  data() {
    return {
      Singleproduct: [
        {title: "内容一", names: "分类一", bt: "标题一",kk: "标题二",id: "#womenClose"},
        {title: "内容一", names: "分类二", bt: "标题一",kk: "标题二",id: "#shoeBag"},
        {title: "内容一", names: "分类三", bt: "标题一",kk: "标题二",id: "#baby"},
        {title: "内容一", names: "分类四", bt: "标题一",kk: "标题二",id: "#baby"},
        {title: "内容一", names: "分类五", bt: "标题一",kk: "标题二",id: "#womenClose"},
        {title: "内容一", names: "分类六", bt: "标题一",kk: "标题二",id: "#shoeBag"},
        {title: "内容一", names: "分类七", bt: "标题一",kk: "标题二",id: "#baby"},
        {title: "内容一", names: "分类八", bt: "标题一",kk: "标题二",id: "#baby"},
        {title: "内容一", names: "分类九", bt: "标题一",kk: "标题二",id: "#womenClose"},
        {title: "内容一", names: "分类十", bt: "标题一",kk: "标题二",id: "#shoeBag"},
        {title: "内容一", names: "分类十一", bt: "标题一",kk: "标题二",id: "#baby"},
        {title: "内容一", names: "分类十二", bt: "标题一",kk: "标题二",id: "#baby"},


      ],
      Nav: [
        {name: "分类一",id: "01"},
        {name: "分类二",id: "02"},
        {name: "分类三",id: "03"},
        {name: "分类四",id: "04"},
        {name: "分类五",id: "05"},
        {name: "分类六", id: "06"},
        {name: "分类七",id: "07"},
        {name: "分类八",id: "08"},
        {name: "分类九",id: "09"},
        {name: "分类十",id: "10"},
        {name: "分类十一",id: "11"},
        {name: "分类十二", id: "12"},
        {name: "分类十三",id: "13"},
        {name: "分类十四",id: "14"},
        {name: "分类十五",id: "15"},
        {name: "分类十六",id: "16"},
        {name: "分类十七",id: "17"},
        {name: "分类十八", id: "18"},
        {name: "分类十九",id: "19"},
        {name: "分类二十",id: "20"},
        {name: "分类二十一",id: "21"},
        {name: "分类二十二",id: "22"},
        {name: "分类二十三",id: "23"},
        {name: "分类二十四", id: "24"},
      ]
    }
  },

  template: `
<div>
<header class="top">
  <div class="searchBox">
    <input type="button" value="搜索商品/品牌">
  </div>
</header>

<div class="content">
  <section class="sect">
    <div class="nav_list" >
      <a :href="'#'+i.id" v-for="i in Nav"  >{{i.name}}</a>
    </div>
    <div class="showGoods">
      <div v-for="(data,idx) in Singleproduct">
        <div :id="Nav[idx].id">
          <div class="pic">{{data.names}}</div>
          <div class="cations">
            <div>{{data.bt}}</div>
            <div>{{data.kk}}</div>
          </div>
          <div>
            <div class="clonesBox">{{data.title}}</div>
            <div class="clonesBox">{{data.title}}</div>
            <div class="clonesBox">{{data.title}}</div>
            <div class="clonesBox">{{data.title}}</div>
          </div>
        </div>
      </div>

    </div>

  </section>
</div>

<footer class="btn">
  <a href=""><i class="iconfont icon-shouye"></i><span>首页</span></a>
  <a href=""><i class="iconfont icon-tuijian"></i><span>推荐</span></a>
  <a href="search.html"><i class="iconfont icon-sousuo" id="search_ico"></i><span>搜索</span></a>
  <a href="">
    <i class="iconfont icon-liaotian"></i><span>聊天</span></a>
  <a href=""><i class="iconfont icon-gerenzhongxin"></i><span>个人中心</span></a>
</footer></div>`
})
/**搜索页end */
/**====== */
/**mine页面start */
var MineBig =  Vue.component("mineBig",{
  template:
    `<div id="article">
        <div id="uls">
      <div id="textRefush">下拉刷新</div>
      <div class="top_box" ref="top_box">
      <div class="user_box">
      <div class="user_left">
      <a href="javascript:0;">
      <img src="static/img/u1.jpg" alt="">
      <p>
      <strong>登陆/注册
      <i class="iconfont icon-youjiantou"></i>
      </strong>
      <em>会员中心></em>
      </p>
      </a>
      </div>
      <div class="user_right">
      <div class="top_btn">
      <a href="javascript:0;">
      <i class="iconfont icon-shezhi"></i>
      </a>
      <a href="javascript:0;">
      <i class="iconfont icon-xiaoxi"></i>
      <span>2</span>
      </a>
      </div>
      <div class="bottom_btn">
      <span>签到领积分></span>
      </div>
      </div>
      </div>
      <div class="user_info">
      <a href="javascript:0;">
      <span>0</span><span>礼券</span>
      </a>
      <a href="javascript:0;">
      <span>0</span><span>积分</span>
      </a>
      <a href="javascript:0;">
      <span>0</span><span>礼品卡</span>
      </a>
      <a href="javascript:0;">
      <span>0</span><span>余额</span>
      </a>
      </div>
      <div class="user_hand">
      <a href="javascript:0;">
      <i class="iconfont icon-daifukuan"></i>
      <span>待付款</span></a>
      <a href="javascript:0;">
      <i class="iconfont icon-daishouhuo"></i>
      <span>待收货</span></a>
      <a href="javascript:0;">
      <i class="iconfont icon-daipingjia"></i>
      <span>待评价</span></a>
      <a href="javascript:0;">
      <i class="iconfont icon-shouhoutuikuan"></i>
      <span>退款/售后</span></a>
      <a href="javascript:0;">
      <i class="iconfont icon-quanbudingdan"></i>
      <span>全部订单</span></a>
      </div>
      <div class="opacitys"  ref="opac">
      <p>
      <strong>登陆/注册
      <i class="iconfont icon-youjiantou"></i>
      </strong>
      </p>
      <div class="user_right">
      <div class="top_btn">
      <a href="javascript:0;">
      <i class="iconfont icon-shezhi"></i>
      </a>
      <a href="javascript:0;">
      <i class="iconfont icon-xiaoxi"></i>
      <span>2</span>
      </a>
      </div>
      <div class="bottom_btn">
      <span>签到领积分></span>
      </div>
      </div>
      </div>
      </div>

      <div class="private" v-for="(p,idx) in info.MineInfo" :key="idx" :take="p">
      <h1>
      <a href="javascript:0;">{{p.name}}></a>
      </h1>
      <p class="state">{{p.title}}</p>
      <ul class="attent_ul">
      <li class="attent_li" v-for="p2 in p.book">
      <img :src="p2.pic" alt="">
      <p>{{p2.info}}</p>
      <a href="javascript:0;">开始阅读</a>
      </li>
      </ul>
      <h3>{{p.ending}}</h3>
      </div>

      <div class="tool_box">
      <h1>
      <i class="iconfont icon-bi"></i>
      自定义工具&nbsp;>
      </h1>
      <div class="btn_box">
      <a href="javascript:0;" v-for="(p2,idx2) in info.Tool">
      <i :class="'iconfont '+ p2.pic" :style="fontColor(idx2)"></i>
      <span>{{p2.call}}</span>
      </a>
      </div>
      </div>

       <div class="cap">
    <p class="cap_title">
      <i class="iconfont icon-xin"></i>
      根据您的偏好猜您可能喜欢
    </p>
    <ul class="cap_ul">
      <li class="cap_li" v-for="p in info.MineWant">
        <a href="#">
          <img :src="p.pic" alt="">
          <p class="cap_name">
            {{p.name}}
          </p>
          <p class="cap_state">
            <span v-show="p.isSs">当当自营</span>
            <span v-show="p.pinkage">包邮</span>
          </p>
          <strong>{{p.price}}</strong>
        </a>
      </li>
    </ul>
  </div>

      <div class="shandow_box" ref="shandow_box">
      客服
    </div>
    <div class="goTop" ref="shandow_box">
      回顶部
    </div>
    </div>
     </div>`,
  data(){
    return{
      info:{
        "MineInfo":[
          {
            "name":"当当云阅读",
            "title":"您关注的书电子版可以免费阅读",
            "book":[
              {
                "pic": "img/w1.jpg",
                "info":"把生活过成艺术"
              },{
                "pic": "img/w2.jpg",
                "info":"年轻人要多背债"
              },{
                "pic": "img/w3.jpg",
                "info":"情商高，才能活得好"
              },{
                "pic": "static/img/w4.jpg",
                "info":"金瓶梅(全集在线观看)"
              },{
                "pic": "img/w5.jpg",
                "info":"月亮与六个女人"
              },{
                "pic": "img/w6.jpg",
                "info":"凉生我们在一起"
              },{
                "pic": "img/w7.jpg",
                "info":"走遍中国没毛病"
              },{
                "pic": "img/w8.jpg",
                "info":"我喜欢生活在中国"
              },{
                "pic": "img/w9.jpg",
                "info":"在北大听讲座"
              },{
                "pic": "img/w10.jpg",
                "info":"你坚持的理由是什么"
              }
            ],
            "ending":"剩余租阅时长：2天"
          }
        ],
        "Tool":[
          {"pic":"icon-fenxiang","call":"安全中心","color":"#4873cf"},
          {"pic":"icon-like","call":"客服帮助","color":"#1e75de"},
          {"pic":"icon-quanbudingdan","call":"领券中心","color":"#d33aa4"},
          {"pic":"icon-gouwuche","call":"我的拼团","color":"#da4642"},
          {"pic":"icon-shouhoutuikuan","call":"我的微盟","color":"f78918"},
          {"pic":"icon-dianpu","call":"我的拍卖","color":"#17ce96"},
          {"pic":"icon-biaoqian","call":"安全中心","color":"#f1c40f"}
        ],
        "MineWant":[
          {
            "name":"你坏（大冰2018作品！预售10分钟8.6万册+，30分钟突破11.8万册，再创当当历史新纪录）",
            "price":22.5,
            "pic":"static/img/w1.jpg",
            "isSs":true,
            "pinkage":true
          },
          {
            "name":"云边有个小卖部",
            "price":21.00,
            "pic":"static/img/w2.jpg",
            "isSs":true,
            "pinkage":true
          },
          {
            "name":"三体：全三册 刘慈欣代表作，亚洲首部“雨果奖”获奖作品！",
            "price":22.5,
            "pic":"img/w3.jpg",
            "isSs":true,
            "pinkage":false
          },
          {
            "name":"心有猛虎 细嗅蔷薇（余光中散文精选）",
            "price":39.5,
            "pic":"img/w4.jpg",
            "isSs":true,
            "pinkage":true
          },
          {
            "name":"圈层突破 : 如何打破人生的壁垒（当当签名版）",
            "price":22.5,
            "pic":"img/w5.jpg",
            "isSs":true,
            "pinkage":false
          },
          {
            "name":"国家是怎样炼成的2",
            "price":22.5,
            "pic":"img/w6.jpg",
            "isSs":true,
            "pinkage":false
          },
          {
            "name":"边城",
            "price":22.5,
            "pic":"img/w7.jpg",
            "isSs":true,
            "pinkage":true
          },
          {
            "name":"小王子（畅销300万册，作者基金会官方认证简体中文版）【果麦经典】",
            "price":22.5,
            "pic":"img/w8.jpg",
            "isSs":true,
            "pinkage":true
          },
          {
            "name":"肥志百科(当当独家亲笔签名+表情包贴纸）",
            "price":22.5,
            "pic":"img/w9.jpg",
            "isSs":true,
            "pinkage":false
          },
          {
            "name":"东野圭吾：白夜行（2017版，易烊千玺、韩雪推荐，东野圭吾无冕之王）",
            "price":22.5,
            "pic":"img/w10.jpg",
            "isSs":true,
            "pinkage":true
          }
        ]
      },
      ul:null,
      div:null,
      text:null
    }
  },
  methods:{
    goo(){
      console.log(2)
      document.documentElement.scrollTop =0
      this.$refs.opac.style.opacity = 0
    },
    isPC(){
      var userAgentInfo = navigator.userAgent;
      var Agents=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad");//判断用户代理头信息
      var flag=true;
      for(i=0;i<Agents.length;i++){
        if(userAgentInfo.indexOf(Agents[i])!=-1){
          flag=false;
          break;
        }
      }
      return flag;//true PC    false 移动端
    },
    refush(){
      let that = this
      let start;  // 辅助变量：触摸开始时，相对于文档顶部的Y坐标
      // let refresh = false;
        that.div.addEventListener('touchstart',function(event){
          let touch = event.touches[0];
          start = touch.pageY;  // 辅助变量：触摸开始时，相对于文档顶部的Y坐标
        },false);
        that.div.addEventListener('touchmove',function(event){
          // 下拉刷新
          let touch = event.touches[0];
          console.log(touch)
          // console.log(div.scrollTop)
          if(that.div.scrollTop>=0){
            // 如果ul列表到顶部，修改ul列表的偏移,显示“下拉刷新”，并准备触发下拉刷新功能，可自定义
            that.ul.style.top = that.ul.offsetTop + touch.pageY - start +'px'; // ul.style.top = ul.offsetTop + 'px'
            start = touch.pageY;
            // 若ul偏移量过大,则修改文字,refresh置为true,配合'touchend'刷新
            if(that.ul.offsetTop >= 60){
              that.text.style.display = "block"
            }
            if(that.ul.offsetTop>=100) {
              that.text.innerHTML = "拉到头啦";
              refresh = true;
            }
          }
        },false);
        that.div.addEventListener('touchend',function(event){
          // 若'touchend'时，ul偏移,用setInterval循环恢复ul的偏移量
          if(that.ul.offsetTop>=0) {
            let time = setInterval(function(){
              that.ul.style.top = that.ul.offsetTop -3 +'px';
              // 若ul的偏移量恢复，clearInterval
              if(that.ul.offsetTop<=0){
                clearInterval(time);
                that.text.innerHTML = "下拉刷新";
                if(refresh){
                  location.reload();
                }
              }
            })
          }
        },false);


    },
    gundong(){
      this.$refs.opac.style.opacity = .3
      if(document.documentElement.scrollTop >= 100){
        console.log(9)
        this.$refs.opac.style.opacity = 1
      }else if(document.documentElement.scrollTop <= 1){
        this.$refs.opac.style.opacity = 0
        this.$refs.opac.style.transition= "all .5s"
      }
      if(document.documentElement.scrollTop >= 500 ){
        this.$refs.shandow_box.style.opacity = .7
      }else if(document.documentElement.scrollTop <= 500 ){
        this.$refs.shandow_box.style.opacity = 0
      }
    },
  },
  mounted(){
    this.ul = document.getElementById('uls');  // 获取ul列表
    this.div = document.getElementById('article') // 获取包裹ul列表的div(css:  overflow:scroll;)
    this.text = document.getElementById('textRefush');
    window.addEventListener('mousewheel',this.gundong)
    this.refush()
    this.$refs.shandow_box.addEventListener('touchstart',this.goo)
  },
  computed:{
    fontColor(i){
      return function(i){
        return "color:"+this.info.Tool[i].color
      }
    },

  }
})


/**mine页面end */
/**============ */
/**发现页面start */
/**
         * 头部组件
         * @type {ExtendedVue<V, any, any, any, Record<never, any>>}
         */
        var FindHeader = Vue.component("FindHeader",{
          data(){
              return{
                  tit:"标题",
                  moretit:"全部栏目",
                  titleInfo:[
                      {type:"分类1"},
                      {type:"分类2"},
                      {type:"分类3"},
                      {type:"分类4"},
                      {type:"分类5"},
                      {type:"分类6"},
                  ],
                  classList:[
                      {classtit:"类别1"},
                      {classtit:"类别2"},
                      {classtit:"类别3"},
                      {classtit:"类别4"},
                      {classtit:"类别5"},
                      {classtit:"类别6"},
                      {classtit:"类别7"},
                      {classtit:"类别8"},
                      {classtit:"类别9"},
                      {classtit:"类别10"},
                      {classtit:"类别11"},
                      {classtit:"类别12"},
                  ],
                  appear:false
              }
          },
          methods:{
              Appear(){
                  this.appear = !this.appear
              },
              UnAppear(){
                  this.appear = !this.appear;
              }
          },
          template:
              `<header class="headers">
                      <div class="headerTopImg">头像</div>
                      <div class="titleList" >
                          <a href="javascript:0" class="header_a">{{tit}}</a>
                          <a href="javascript:0" class="header_a" v-for="p in titleInfo">{{p.type}}</a>

                      </div>
                      <a href="javascript:0" class="header_a">
                          <i class="iconfont icon-iconfontarrows1" @click="Appear"></i>
                      </a>
                      <transition>
                          <div class="headerMore" v-if="appear">
                          <div class="headerMoreTop">
                              <div class="headerMoreTopTit">{{moretit}}</div>
                              <div class="headerMoreTopTag"><i class="iconfont icon-shangjiantou" @click="UnAppear"></i></div>
                          </div>
                          <div class="headerMoreBottom" >
                              <a href="javascript:0" class="classes" v-for="i in classList">{{i.classtit}}</a>
                          </div>
                      </div>
                      </transition>
                  </header>`
      });
      /**
       *    导航部组件
       * @type {ExtendedVue<V, any, any, any, Record<never, any>>}
       */
      var FnavBox = Vue.component("FnavBox",{
         template:
             `<div class="fnav_box">
                  <a href="javascript:0;" class="fnav_a">
                      <div class="fnavImg">图片1</div>
                      <span>活动名称1</span>
                  </a>
                  <a href="javascript:0;"  class="fnav_a">
                      <div class="fnavImg">图片2</div>
                      <span>活动名称2</span>
                  </a>
                  <a href="javascript:0;"  class="fnav_a">
                      <div class="fnavImg">图片3</div>
                      <span>活动名称3</span>
                  </a>
                  <a href="javascript:0;"  class="fnav_a">
                      <div class="fnavImg">图片4</div>
                      <span>活动名称4</span>
                  </a>
              </div>`
      });

      /**
       * 推荐书籍部组件
       * @type {ExtendedVue<V, any, any, any, Record<never, any>>}
       */
      var FindList = Vue.component("FindList",{
         data(){
             return{
                 "BookList":[
                     {
                         "title":"推荐标题1",
                         "count":"数量1",
                         "intro":"子标题",
                         "pic":["static/img/h1.jpg","static/img/h2.jpg","static/img/h3.jpg","static/img/h4.jpg"],
                         "like":"数据1",
                         "comment":"评论数1"
                     },
                     {
                         "title":"推荐标题2",
                         "count":"数量2",
                         "intro":"子标题",
                         "pic":["static/img/h1.jpg","static/img/h2.jpg","static/img/h3.jpg","static/img/h4.jpg"],
                         "like":"数据2",
                         "comment":"评论数2"
                     }
                 ],
             }
         } ,
          template:
              `<div>
               <div class="flist_box" v-for="book in BookList">
                  <div class="list_title">
                      <h2>{{book.title}}</h2>
                      <span>{{book.count}}</span>
                  </div>
                  <p class="list_name">{{book.intro}}</p>
                  <ul class="list_ul">
                      <li class="list_li" v-for="p in book.pic">
                          <div class="list_li_img">书籍图片</div>
                      </li>
                  </ul>
                  <div class="list_book">
                      <a class="list_btn" href="javascript:0;">书单></a>
                      <div class="lb_right">
                          <a href="javascript:0;">
                              <i class="iconfont icon-xin"></i>
                              <span>{{book.like}}</span>
                          </a>
                          <a href="javascript:0;">
                              <i class="iconfont icon-xiazai16"></i>
                              <span>{{book.comment}}</span>
                          </a>
                      </div>
                  </div>
              </div>
              </div>`
      });
      /**
       * 书籍视频部组件
       * @type {ExtendedVue<V, any, any, any, Record<never, any>>}
       */
      var FindVideo = Vue.component("FindVideo",{
          data(){
              return{
                  "BookVideo":[
                      {
                          "title":"这五本书恨不得通宵读完",
                          "videos":"static/video/v01.mp4"
                      },
                      {
                          "title":"这五本书恨不得通宵读完",
                          "videos":"static/video/v01.mp4"
                      }
                  ]
              }
          },
          template:
              `<div>
                  <div class="video_box" v-for="video in BookVideo">
                    <video controls width="100%" height="100%">
                      <source src="static/video/v01.mp4" type="video/mp4">
                    </video>
                    <h1>视频标题</h1>
                  </div>
              </div>`
      });
      /**
       * 下拉刷新组件
       * @type {ExtendedVue<V, any, {bindTouchEvent(): void, _touchStart(*): void, _touchMove(*): void, _touchEnd(*): void, _resetBox(): void}, any, Record<never, any>>}
       */
      var ReFresh = Vue.component("ReFresh",{
          data(){
             return{
                 startX: '',
                 endX: '',
                 startY: '',
                 endY: '',
                 moveDistance: 0,
                 tipText: '下拉刷新',
                 el: null
             }
         },
          methods:{
              /**
               * 判断pc还是移动
               */
              isPC(){
                  var userAgentInfo = navigator.userAgent;
                  var Agents=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad");//判断用户代理头信息
                  var flag=true;
                  for(i=0;i<Agents.length;i++){
                      if(userAgentInfo.indexOf(Agents[i])!=-1){
                      flag=false;
                  break;
                  }
              }
              return flag;//true PC    false 移动端
              },
              /**
               * 绑定touch事件
               */
              bindTouchEvent() {
                  if(this.isPC()){
                      this.el.onmousedown=(e)=> {
                          this.startY = e.clientY;
                      }
                      this.el.onmousemove=(e)=>{
                               let _move=e.clientY - this.startY;
                               if(_move>20 && _move<100){
                                  this.el.style.marginTop = _move + 'px';
                                   this.moveDistance = e.clientY - this.startY;
                                   if(_move>20){
                                      this.tipText='松开即可刷新'
                                   }
                               }
                          },
                      this.el.onmouseup=(e)=>{
                              this.el.onmousemove=null;
                               if(this.moveDistance>20){
                                      this.tipText='数据加载中...';
                                      setTimeout(() => {
                                          this._resetBoxpc();
                                          this.tipText = '刷新成功！';
                                          this.count++;
                                      }, 800)
                               }else{
                                   this._resetBoxpc();
                               }
                          }
                  }else{
                      this.el.addEventListener('touchstart', this._touchStart);
                      this.el.addEventListener('touchmove', this._touchMove);
                      this.el.addEventListener('touchend', this._touchEnd)
                  }
              },
              /**
               * 开始下拉的监听 这里主要是记录下初始坐标 下拉只需记录y即可(这里方便以后测其他的使用,也记录了 x)
               * @param e 下拉事件
               */
              _touchStart(e) {

                  let touch = e.changedTouches[0];  //获取下拉的距离
                  this.tipText = '下拉刷新';

                  this.startY = touch.clientY;
              },
              /**
               * 下拉过程的监听 这里记录下移动的距离
               * @param e
               */
              _touchMove(e) {
                  let touch = e.changedTouches[0];
                  //获取下拉的距离
                  let _move = touch.clientY - this.startY;
                  //这里主要是让内容区随着下拉操作而往下滚动
                  //_move>0是指往下滑动(下拉),_move<100是给一个上限,不然一直下拉的话整个内容区就会随着下拉距离一直增大,用户体验不是很好
                  //这里下拉操作主要是显示出顶上的一层tipText
                  if (_move > 0 && _move < 100) {
                      this.el.style.marginTop = _move + 'px';
                      //记录下拉的距离
                      this.moveDistance = touch.clientY - this.startY;
                      if (_move > 50) {
                          this.tipText = '松开即可刷新'
                      }
                  }
              },

              /**
               * 下拉动作结束(松开手指)监听
               * @param e
               * @private
               */
              _touchEnd(e) {
                  let touch = e.changedTouches[0];
                  this.endX = touch.clientX;
                  this.endY = touch.clientY;
                  let that = this;
                  if (this.moveDistance > 50) {
                      this.tipText = '数据加载中...';
                      setTimeout(()=>{
                          this._resetBox();
                          this.tipText = '刷新成功！';
                      },800)
                  } else {
                      this._resetBox();
                  }
              },

              /**
               * 重置视图
               * 这里的操作主要是将移动的距离还原,用一个定时器慢慢将marginTop的值减回去直到0为止
               */
              _resetBox() {
                  let that = this;
                  if (this.moveDistance > 0) {
                      let timer = setInterval(function () {
                          that.el.style.marginTop = --that.moveDistance + 'px';
                          if (Number(that.el.style.marginTop.split('px')[0]) <= 0)                            clearInterval(timer);
                      }, 1)
                  }
              },
              _resetBoxpc(){
                  if(this.moveDistance > 0){
                      let Timer=setInterval(()=>{
                          this.el.style.marginTop = --this.moveDistance + 'px';
                          if(Number(this.el.style.marginTop.split('px')[0]) <=0)
                              clearInterval(Timer)
                      },1)
                  }
              }
          },
          mounted() {
              this.el = document.querySelector(".content-boxs");
              this.bindTouchEvent();
          },
          template:
              `<div class="pull-to-refresh-apps">
                  <div class="content-boxs">
                      <div class="refreshing-box">
                          <div class="tagTit">{{tipText}}</div>
                      </div>
                      <fnav-box></fnav-box>
                      <find-list></find-list>
                      <find-video></find-video>
                  </div>
              </div>`
      });

      /**
       *所有组件汇总
       * @type {ExtendedVue<V, any, any, any, Record<never, any>>}
       */
      var AllGop = Vue.component("AllGop",{
          template:`<div>
                          <find-header></find-header>
                           <re-fresh></re-fresh>
                          <find-list></find-list>
                          <find-video></find-video>
                     </div>`

      });
/**发现页面end */
/**商品详情页start */
var  productxq = Vue.component("ddproductxq",{
  template:`
<div class="boxWraps">
<div class="qx_con">
<div class="swiper-containerqx">
  <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(m,idx) in info.slider"><img :src="m" alt=""></div>
  </div>
</div>
<div class="qx_text">
  <div class="qx_priceBox"><span class="qx_price1">原价￥{{info.price}}</span> <span class="qx_price2">折扣价{{(info.price)*0.7*100/100}}</span></div>
  <div class="qx_name">{{info.name}}</div>
  <div class="qx_dir">{{info.productdir}}</div>
  <ul>
   <li v-for="(msg,i) in productlicurr"><span class="qx_t">{{msg.qx1}}</span><span class="qx_t2">{{msg.qx2}}</span><span class="qx_more">{{msg.qx3}}</span></li>
      <span class="button_icon" @click="toggle"><i class="iconfont icon-iconfontarrows1"></i></span>
  </ul>
</div>
</div>
<div class="qx_bottom">
<div class="tipBox"></div>
<div class="qx_su_box" @click="shouc">
  <i class="iconfont icon-xin"></i>
  <span>收藏</span>
</div>
<div class="qx_su_box">
  <i class="iconfont icon-gouwuche"></i>
  <span>购物车 <span class="nums" v-show="joincartnum">{{joincartnum}}</span></span>
</div>
<div class="qx_big_box">
  <div class="qx_buy">立即购买</div>
  <div class="qx_intocart" @click="joincart">加入购物车</div>
</div>
</div>
</div>

  `,
  data(){
      return{
          shouc_toggle:false,
          joincartnum:0,
          status_toggle:false,
          productlicurr:[],
          info:{
              slider:["img/public-product.jpg","img/public-product.jpg","img/public-product.jpg"],
              price:38,
              name:'商品名称',
              productdir:'商品描述---商品描述---商品描述---商品描述---商品描述---商品描述---商品描述',
              productli:[
                  {qx1:"作者",qx2:"余华",qx3:"更多"},
                  {qx1:"出版",qx2:"清华大学出版社",qx3:"更多"},
                  {qx1:"排名",qx2:"畅销榜第一名",qx3:"查看榜单"},
                  {qx1:"分类",qx2:"图书>小说>社会",qx3:""},
                  {qx1:"评分",qx2:"8.9",qx3:"发现更多精彩"},
                  {qx1:"出版日期",qx2:"2017/8",qx3:""},
              ]
          }
      }
  },
  mounted() {
      new Swiper(".swiper-containerqx",{
          autoplay:true
      })
  },

  methods:{
      toggle(){
          this.status_toggle = !this.status_toggle
          if(this.status_toggle){
              this.productlicurr = this.info.productli
          }else{
              this.productlicurr = this.info.productli[0]
          }
      },
      showhidden(){
          let tipBox = document.querySelector('.tipBox')
          tipBox.style.opacity=0;
          let opa = 0;
          let timer = setInterval(function () {
              opa = opa+0.01;
              tipBox.style.opacity = opa;
              if(opa>=1){
                  clearInterval(timer)
              }
          },10)
          setTimeout(function () {
              tipBox.style.opacity = 0
          },2000)
      },
      shouc(){
          this.shouc_toggle = !this.shouc_toggle
          let shoucdoms = document.querySelector('.icon-xin');
          let tipBox = document.querySelector('.tipBox')
          if(this.shouc_toggle){
              shoucdoms.style.color = "#eb1411"
              tipBox.style.display = 'block'
              tipBox.innerHTML = '收藏成功'
              this.showhidden()
          }else{
              shoucdoms.style.color = '#333'
              tipBox.innerHTML = '取消收藏'
              this.showhidden()
          }
      },
      joincart(){
          let tipBox = document.querySelector('.tipBox')
          this.joincartnum++;
              tipBox.innerHTML = '成功加入'+this.joincartnum
              this.showhidden()
      }

  }
})
/**商品详情页end */
