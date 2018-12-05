var a1 = Vue.component("a1", {
  template: `<h1>a1</h1>`
})
//=======
/**
 * 倒计时
 */
var countdown = Vue.component("seckIll", {
  data() {
    return {
      hour: 2,
      minute: 52,
      second: 44
    }
  },
  methods: {
    hours: function () {
      let timer = setInterval(() => {

        this.second--
        if (this.second < 0) {
          this.second = 59
          this.minute--
        }
        if (this.minute <= 0) {
          this.minute = 59
          this.hour--
        }
        if (this.second < 10) {
          this.second = "0" + this.second
        }
        if (this.hour < 0) {
          this.hour = 0
          this.minute = 0
          this.second = 0
        }
      }, 1000)
    }

  },
  mounted() {
    this.hours()
  },

  template:
    ` <div class="sk_hd">
          <a class="sk_hd_lk" href="javascript:;" target="_blank" clstag="h|keycount|core|seckill_a">
              <div class="sk_tit">京东秒杀</div>
              <div class="sk_subtit">FLASH DEALS</div>
              <!--<img src="img/sprite.seckill.png" style="position:absolute;left:1.4rem;top:2.3rem;"/>-->
             <div class="sk_desc">本场距离结束还剩</div>
              <div class="sk_cd">
                  <div class="cd">
                      <div class="cd_item cd_hour">
                          <span  class="cd_item_txt" id="cd_item_txt3">{{hour}}</span>
                      </div>
                      <div class="cd_item cd_minute">
                          <span class="cd_item_txt" id="cd_item_txt2">{{minute}}</span>
                      </div>
                      <div class="cd_item cd_second">
                          <span class="cd_item_txt" id="cd_item_txt1">{{second}}</span>
                      </div>
                      <p class="id_red"></p>
                  </div>
              </div>
          </a>
    </div>`
})
//======
/**
 * 下拉刷新
 */
var Refresh = Vue.component("Refresh", {
  template: `<div class="pull-to-refresh-app"><div class="content-box"><div class="refreshing-box"><div>{{tipText}}</div></div><div>基础用法 <br>刷新次数：<span>{{count}}</span></div></div></div>`,
  data() {
    return {
      endX: '',
      startY: '',
      endY: '',
      moveDistance: 0,
      tipText: '下拉刷新',
      el: null,
      count: 0
    }
  },
  methods: {
    /**
     * 判断pc还是移动
     */
    isPC() {
      var userAgentInfo = navigator.userAgent;
      var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad");//判断用户代理头信息
      var flag = true;
      for (i = 0; i < Agents.length; i++) {
        if (userAgentInfo.indexOf(Agents[i]) != -1) {
          flag = false;
          break;
        }
      }
      return flag;//true PC    false 移动端
    },
    /**
     * 绑定touch事件
     */
    bindTouchEvent() {
      if (this.isPC()) {
        this.el.onmousedown = (e) => {
          this.startY = e.clientY;

          this.el.onmousemove = (e) => {
            let _move = e.clientY - this.startY;
            if (_move > 50 && _move < 100) {
              this.el.style.marginTop = _move + 'px';
              this.moveDistance = e.clientY - this.startY;

              if (_move > 50) {
                this.tipText = '松开即可刷新'
              }
            }
          }
          this.el.onmouseup = (e) => {
            this.el.onmousemove = null;
            if (this.moveDistance > 50) {
              this.tipText = '数据加载中...'
              setTimeout(() => {
                this._resetBoxpc();
                this.tipText = '刷新成功！';
                this.count++
              }, 800)
            } else {
              this._resetBoxpc();
            }
          }
        }
      } else {
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
      let touch = e.changedTouches[0];
      this.tipText = '下拉刷新';
      this.startY = touch.clientY;
    },
    /**
     * 下拉过程的监听 这里记录下移动的距离
     * @param e
     */
    _touchMove(e) {
      let touch = e.changedTouches[0];
      let _move = touch.clientY - this.startY;
      if (_move > 0 && _move < 100) {
        this.el.style.marginTop = _move + 'px';
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
        setTimeout(() => {
          this._resetBox();
          this.tipText = '刷新成功！';
          this.count++
        }, 800)
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
          if (Number(that.el.style.marginTop.split('px')[0]) <= 0) clearInterval(timer);
        }, 1)
      }
    },
    _resetBoxpc() {
      if (this.moveDistance > 0) {
        let Timer = setInterval(() => {
          this.el.style.marginTop = --this.moveDistance + 'px';
          if (Number(this.el.style.marginTop.split('px')[0]) <= 0)
            clearInterval(Timer)
        }, 1)
      }
    }
  },
  mounted() {
    this.el = document.querySelector(".content-box");
    this.bindTouchEvent();
  }
})
//=======
/**
 * 滑入滑出
 */
var SlideInOut = Vue.component("SlideInOut", {
  template: `<div class="slideBox" >
    <a @click="flag=!flag">点击滑入滑出</a>
      <transition>
          <div v-if="flag" class="box">
                  <h1>欢迎进入</h1>
          </div>
      </transition>
    </div>`,
  data() {
    return {
      flag: false
    }
  }
})
//======
/**
 * 二级菜单
 */
var HoverComponent = Vue.component("HoverComponent", {
  template: `<div class="menuBox">
    <h1 class="title nav">划过二级菜单组件</h1>
   <ul>
    <a href="javascript:;">
      <li>
        <a href="ijavascript:;"><span>menu1</span></a>

      </li>
    </a>
    <a href="javascript:;">
      <li>
        <span>menu2</span>
      </li>
    </a>
    <li>
      <a href="javascript:;"><span>menu3</span></a>
    </li>
    <li>
      <a href="javascript:;"><span>menu4</span></a>
    </li>
    <li class="menu5 lis" id="menu5">

      <a href="javascript:;"><span>menu5</span></a>
      <span  id="pageId">点击</span>
      <ul class="uls" id="ul1">
        <li><a href="javascript:;">menu5-1</a></li>
        <li><a href="javascript:;">menu5-2</a></li>
      </ul>
    </li>
    <li>
      <span><a href="javascript:;">menu6</a></span>
    </li>
    <li class="menu7 lis" id="menu7">
      <a href="javascript:;"><span>menu7</span></a>
      <span  id="pageId">点击</span>
      <ul class="uls" id="ul2">
        <li><a href="javascript:;">menu7-1</a></li>
        <li><a href="javascript:;">menu7-2</a></li>
      </ul>
    </li>
    <li>
      <a href="javascript:;"><span>menu8</span></a>
    </li>
    <li>
      <a href="javascript:;"><span>menu9</span></a>
    </li>
    <li class="menu10 lis" id="menu10">
      <a href="javascript:;"><span>menu10</span></a>
      <span  id="pageId">点击</span>

      <ul class="uls" id="ul3">
        <li><a href="javascript:;">menu10-1</a></li>
        <li><a href="javascript:;">menu10-2</a></li>
        <li><a href="javascript:;">menu10-3</a></li>
      </ul>
    </li>
    <li class="menu11 lis" id="menu11">
      <a href="javascript:;"><span>menu11</span></a>
      <span  id="pageId">点击</span>
 <ul class="uls" id="ul4">
        <li><a href="javascript:;">menu11-1</a></li>
        <li><a href="javascript:;">menu11-1</a></li>
      </ul>
    </li>
  </ul>
</div>`,
  mounted() {
    document.querySelector("#ul1").style.display = "none";
    document.querySelector("#ul2").style.display = "none";
    document.querySelector("#ul3").style.display = "none";
    document.querySelector("#ul4").style.display = "none";
    let lilist = document.querySelectorAll(".lis");
    let ullist = document.querySelectorAll(".uls");
    for (let i = 0; i < ullist.length; i++) {
      lilist[i].onmouseenter = function () {
        ullist[i].style.display = "block";
      }
      lilist[i].onmouseleave = function () {
        ullist[i].style.display = "none";
      }
    }
  }

})
//======== 
/**
 *点击显示隐藏组件
 * @type {ExtendedVue<V, {show: boolean}, {showCont(): void}, any, Record<never, any>>}
 */
var ShowHiden = Vue.component("ShowHiden", {
  data() {
    return {
      show: false
    }
  },
  methods: {
    showCont() {
      this.show = !this.show;
    }
  },
  template: `<div ><div @click="showCont" id="box">展开</div><div v-if="show" id="open">
内容详情
</div></div>`
});

//=========
/**
 * 用户注册
 */
var userRegister = Vue.component("paneCount", {
  data() {
    return {
      email: "",
      name: "",
      phone: "",
      password: "",
      pwd: "",
    }

  },
  methods: {
    checkemail: function () {
      var regEmail = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
      if (this.email == '') {
        this.email = "请输入邮箱";
      } else if (!regEmail.test(this.email)) {
        this.email = "邮箱格式不正确";

      }
    },
    checkname: function () {
      if (this.name = "") {
        this.name = "用户名不能为空";
      } else {
        this.name = "ok";
      }
    },

    checkphone: function () {
      var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
      if (this.phone == "") {
        this.phone = "手机号不能为空";
      } else if (!myreg.test(this.phone)) {
        this.phone = "请输入有效的手机号码";
      } else {
        this.phone = "输入正确"
      }
    },
    checkpassword: function () {
      var pwdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
      if (this.password == "") {
        this.password = "密码不能为空"
      } else if (!pwdReg.test(this.password)) {
        this.password = "密码不合法";
      } else {
        this.password = "密码合法";
      }
    },

    checkpwd: function () {
      if (this.pwd == "") {
        this.pwd = "密码不能为空"
      } else if (this.pwd != this.password) {
        this.pwd = "输入密码保持一致"
      } else {
        this.pwd = "输入密码正确"
      }
    },

  },
  template: `<div class="panel">
                    <div class="panel-body">
                       <form action="" method="post" class="form form-horizontal responsive" id="demoform">
                           <div class="row cl">
                               <label class="form-label col-xs-3">邮箱：</label>
                               <div class="formControls col-xs-8">
                                   <input  @change="checkemail" v-model="email" type="text" class="input-text" placeholder="请输入邮箱" >

                               </div>
                           </div>
                           <div class="row cl">
                               <label class="form-label col-xs-3">用户名：</label>
                               <div class="formControls col-xs-8">
                                   <input @change="checkname" v-model="name"type="text" class="input-text" placeholder="4~16个字符，字母/中文/数字/下划线"  >
                               </div>
                           </div>
                           <div class="row cl">
                               <label class="form-label col-xs-3">手机：</label>
                               <div class="formControls col-xs-8">
                                   <input @change ="checkphone" v-model = "phone"type="text" class="input-text"  placeholder="手机" >
                               </div>
                           </div>
                           <div class="row cl">
                               <label class="form-label col-xs-3">密码：</label>
                               <div class="formControls col-xs-8">
                                   <input @change="checkpassword"v-model="password"type="password" class="input-text"  placeholder="密码"  id="password">
                               </div>
                           </div>
                           <div class="row cl">
                               <label class="form-label col-xs-3">密码验证：</label>
                               <div class="formControls col-xs-8">
                                   <input @change="checkpwd" v-model="pwd"type="password" class="input-text" autocomplete="off" placeholder="密码" name="password2" id="password2">
                               </div>
                           </div>
                           <div class="row cl">
                               <label class="form-label col-xs-3">单选框：</label>
                               <div class="formControls skin-minimal col-xs-5">
                                   <div class="radio-box">
                                       <input type="radio" id="sex-1" name="sex">
                                       <label for="sex-1">男</label>
                                   </div>
                                   <div class="radio-box">
                                       <input type="radio" id="sex-2" name="sex">
                                       <label for="sex-2">女</label>
                                   </div>
                                   <div class="radio-box">
                                       <input type="radio" id="sex-3" name="sex">
                                       <label for="sex-3">保密</label>
                                   </div>
                               </div>
                           </div>
                           <div class="row cl">
                               <label class="form-label col-xs-3">出生日期：</label>
                               <div class="formControls col-xs-8">
                                   <input type="text" class="input-text" value="" autocomplete="off" id="datetimepicker" name="datetimepicker">
                               </div>
                           </div>
                           <div class="row cl">
                               <label class="form-label col-xs-3">爱好：</label>
                               <div class="formControls skin-minimal col-xs-5">
                                   <div class="check-box">
                                       <input type="checkbox" id="checkbox-5" name="checkbox2">
                                       <label for="checkbox-5">上网</label>
                                   </div>
                                   <div class="check-box">
                                       <input type="checkbox" id="checkbox-6" name="checkbox2">
                                       <label for="checkbox-6">摄影</label>
                                   </div>
                               </div>
                           </div>
                           <div class="row cl">
                               <label class="form-label col-xs-3">附件：</label>
                               <div class="formControls col-xs-8">
                                   <span class="btn-upload form-group">
                                       <input class="input-text upload-url" type="text" name="uploadfile-2" id="uploadfile-2" readonly style="width:.8rem">
                                       <a href="javascript:void();" class="btn btn-primary upload-btn"><i class="Hui-iconfont"></i> 浏览文件</a>
                                       <input type="file" multiple name="file-2" class="input-file">
                                   </span>
                                </div>
                           </div>
                           <div class="row clearfix">
                                <label class="form-label col-xs-3">所在城市：</label>
                                <div class="formControls col-xs-8">
                                    <div class=" clearfix1" style="margin-top:0">
                                         <div class="col-xs-6">
                                             <span class="select-box">
                                                  <select class="select" size="1" name="city">
                                                      <option value="" selected>选择省份</option>
                                                      <option value="1">北京</option>
                                                      <option value="2">上海</option>
                                                      <option value="3">广州</option>
                                                  </select>
                                             </span>
                                         </div>
                                         <div class="col-xs-6">
                                             <span class="select-box">
                                                 <select class="select" size="1" name="city">
                                                     <option value="" selected>选择城市</option>
                                                     <option value="1">北京</option>
                                                     <option value="2">上海</option>
                                                     <option value="3">广州</option>
                                                 </select>
                                             </span>
                                         </div>
                                    </div>
                                </div>
                           </div>
                           <div class="row cl">
                               <label class="form-label col-xs-3">网址：</label>
                                   <div class="formControls col-xs-8">
                                       <input type="text" class="input-text" placeholder="http://" name="website" id="website">
                                   </div>
                           </div>
                           <div class="row cl">
                               <label class="form-label col-xs-3">备注：</label>
                               <div class="formControls col-xs-8">
                                    <textarea cols="" rows="" class="textarea" name="beizhu" id="beizhu"  placeholder="请输入您要说的话"></textarea>
                               </div>
                           </div>
                           <div class="row cl">
                               <div class="col-xs-8 col-xs-offset-3">
                                   <input class="btn1" type="submit" value="提交">
                               </div>
                           </div>
                       </form>
                   </div>
              </div>`

})
//=========
/**
 * 隔行变色
 * @type {ExtendedVue<V, any, any, any, Record<never, any>>}
 */
var LiColor = Vue.component("LiColor", {
  data() {
    return {
      now: -1,
      names: [
        {select: "第一行", isActive: false, isOld: true},
        {select: "第二行", isActive: false, isOld: true},
        {select: "第三行", isActive: false, isOld: true},
        {select: "第四行", isActive: false, isOld: true},
        {select: "第五行", isActive: false, isOld: true},
        {select: "第六行", isActive: false, isOld: true},
      ],
    }
  },
  methods: {
    selectStyle(i) {
      this.names[i].isActive = !this.names[i].isActive;
    }
  },
  template: `<ul class="uls">
<!--利用v-for中的index值，绑定样式来实现隔行变色效果-->
<li  class="liList" v-for="(item,$index) in names" @click="selectStyle ($index) " :class="{active:item.isActive,lis:item.isOld}">{{item.select}}</li>
</ul>`
});
//==========
/**
 * @type 地址
 */
var AddressList = Vue.component("AddressList", {
  data() {
    return {
      list: [
        {
          id: '1',
          name: '张三',
          tel: '1546576800',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1314354654',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        },
        {
          id: '3',
          name: '王六',
          tel: '1456764540',
          address: '陕西省西安市拱墅区莫干山路 50 号'
        }
      ],
      items: '',
      index: '',
      show: false
    }
  },
  methods: {
    changeAddress() {
      this.show = !this.show;
    },
    add() {
      alert('新增地址');
    }
  },
  template:
    `<div>
<div class="addressList" v-for="(p,index) in list">
          <div class="listLeft">
              <input type="radio" name="selects" class="inputSel"/>
          </div>
          <div class="listCenter">
              <p class="nameNumber">{{p.name}}，{{p.tel}}</p>
              <span class="addressPeo">{{p.address}}</span>
          </div>
          <div class="listRight">
              <div class="change" @click="changeAddress" >修改</div>
          </div>
      </div>
      <div class="winText" v-if="show">编辑地址信息</div>
      <div class="bottom" @click="add">新增地址</div>
      </div>
`
});
//=====
/**
 * @type  商品列表
 */
var GoodCard = Vue.component("GoodCard", {
  data() {
    return {
      goods: [
        {
          "pic": "static/images/good1.jpg",
          "tit": "商品名1",
          "type": "类型1",
          "price": "价格1",
          "sum": "数量1",
        },
        {
          "pic": "static/images/good1.jpg",
          "tit": "商品名2",
          "type": "类型2",
          "price": "价格2",
          "sum": "数量2",
        },
        {
          "pic": "static/images/good1.jpg",
          "tit": "商品名3",
          "type": "类型3",
          "price": "价格3",
          "sum": "数量3",
        }
      ],
      showFade: false
    }
  },
  methods: {
    delGoods(index) {
      this.showFade = !this.showFade;
      return index;
    },
    del(index) {
      this.goods.splice(index, 1);
      this.showFade = !this.showFade;
    },
    noDel() {
      this.showFade = !this.showFade;
    }
  },
  template:
    `<div>

            <div class="clothes" v-for="(p,index) in goods" :key="index" >
                <div class="clothesPic">
                    <div class="imgs">商品图片</div>
                </div>
                <div class="clothesRight">
                    <div class="clothesInfo">
                        <p class="clothesTit">{{p.tit}}</p>
                    </div>
                    <div class="clothesPrice">
                        <span class="price">￥{{p.price}}</span>
                        <div class="clothesAddReduce">
                            <span class="addReduce">-</span>
                             <span class="counts">{{p.sum}}</span>
                             <span class="addReduce">+</span>
                        </div>

                        <div class="del" @click="delGoods(index)">删除</div>
                    </div>
                </div>
            </div>

            <div class="fade" v-if="showFade" @touchmove.prevent>
                <div class="yesOrNo"  >
                    <p class="yesOrNoP">亲，不再考虑一下吗？</p>
                    <div class="yesNo">
                        <span class="yesNoSpan" @click = "del">确定</span>
                        <span class="yesNoSpan" @click="noDel">取消</span>
                    </div>
                </div>
            </div>
         </div>`
});
//========
/**
 * @type 商品规格
 */
var GoodStandard = Vue.component("GoodStandard", {
  template: `
<div>

<div id="vmsimulatedDATA" class="productBox">

  <div class="productConten">

      <div class="product-delcom" v-for="(ProductItem,n) in simulatedDATA.specifications">
          <p>{{ProductItem.name}}</p>
          <ul class="product-footerlist clearfix">
              <li v-for="(oItem,index) in ProductItem.item" v-on:click="specificationBtn(oItem.name,n,$event,index)" v-bind:class="[oItem.isShow?'':'noneActive',subIndex[n] == index?'productActive':'']">{{oItem.name}}</li>
          </ul>
      </div>

  </div>

  <div class="product-footer">
      <a href="javascript:">立即购买</a>

  </div>
</div>
</div>
`,
  data() {
    return {
      simulatedDATA: { //模拟后台返回的数据 多规格
        "difference": [{ //所有的规格可能情况都在这个数组里
          "id": "19",
          "price": "200.00",
          "stock": "19",
          "difference": "100,白色"
        },
          {
            "id": "20",
            "price": "300.00",
            "stock": "29",
            "difference": "200,白色"
          },
          {
            "id": "21",
            "price": "300.00",
            "stock": "10",
            "difference": "100,黑丝"
          },
          {
            "id": "22",
            "price": "300.00",
            "stock": "0",
            "difference": "200,黑丝"
          },
          {
            "id": "23",
            "price": "500.00",
            "stock": "48",
            "difference": "100,绿色"
          },
          {
            "id": "24",
            "price": "500.00",
            "stock": "0",
            "difference": "200,绿色"
          }
        ],
        "specifications": [{ //这里是要被渲染字段
          "name": "尺寸",
          "item": [{
            "name": "100",
          },
            {
              "name": "200",
            }
          ]
        },
          {
            "name": "颜色",
            "item": [{
              "name": "白色",
            },
              {
                "name": "黑丝",
              },
              {
                "name": "绿色",
              }
            ]
          }
        ]
      },
      selectArr: [], //存放被选中的值
      shopItemInfo: {}, //存放要和选中的值进行匹配的数据
      subIndex: [], //是否选中 因为不确定是多规格还是但规格，所以这里定义数组来判断

    }
  },
  created: function () {
    var self = this;
    for (var i in self.simulatedDATA.difference) {
      self.shopItemInfo[self.simulatedDATA.difference[i].difference] = self.simulatedDATA.difference[
        i]; //修改数据结构格式，改成键值对的方式，以方便和选中之后的值进行匹配
    }
    self.checkItem();
  },
  mounted: function () {

  },
  methods: {
    specificationBtn: function (item, n, event, index) {
      var self = this;
      if (self.selectArr[n] != item) {
        self.selectArr[n] = item;
        self.subIndex[n] = index;

      } else {
        self.selectArr[n] = "";
        self.subIndex[n] = -1; //去掉选中的颜色
      }
      self.checkItem();
    },
    checkItem: function () {
      var self = this;
      var option = self.simulatedDATA.specifications;
      var result = [];  //定义数组存储被选中的值
      for (var i in option) {
        result[i] = self.selectArr[i] ? self.selectArr[i] : '';
      }
      for (var i in option) {
        var last = result[i];  //把选中的值存放到字符串last去
        for (var k in option[i].item) {
          result[i] = option[i].item[k].name; //赋值，存在直接覆盖，不存在往里面添加name值
          option[i].item[k].isShow = self.isMay(result); //在数据里面添加字段isShow来判断是否可以选择
        }
        result[i] = last; //还原，目的是记录点下去那个值，避免下一次执行循环时避免被覆盖

      }
      self.$forceUpdate(); //重绘
    },
    isMay: function (result) {
      for (var i in result) {
        if (result[i] == '') {
          return true; //如果数组里有为空的值，那直接返回true
        }
      }
      return this.shopItemInfo[result].stock == 0 ? false : true; //匹配选中的数据的库存，若不为空返回true反之返回false
    }
  }
})
//==========
/**
 * @type 添加地址
 */
var AddressWrite = Vue.component("AddressWrite", {
  template: `
<div class="AdressWriteBox">
 <h2>地址填写模板</h2>
        <div class="adressBox">
        <p>地址填写</p>
        <p>姓名：<input type="text" v-model="user.name" placeholder="收货人姓名"></p>
        <p>电话：<input type="text" v-model="user.phone" placeholder="收货人手机号"></p>
        <p>地区选择：
                <select v-model="user.selCity.pro">
              <option :value="p" v-for="p in cityData">{{p.province}}</option>
          </select>

          <select v-model="user.selCity.ci">
              <option :value="c" v-for="c in user.selCity.pro.cities">{{c.city}}</option>
          </select>

          <select v-model="user.selCity.qu">
              <option :value="q"  v-for="q in user.selCity.ci.areas">{{q}}</option>
          </select>

        </p>
        <p>
            详细地址：<input type="text" v-model="user.address" placeholder="街道门牌，楼层房间号">
        </p>
        <p>
        邮政编码：<input type="text" v-model="user.post" placeholder="邮政编码"></p>
        <p>
         设为默认地址：<span class="focus"><span></span  class="showSpan"   @click="show()" ref="showSpan"></span>
    </p>
      <p class="save">保存 </p>
      <p class="remv">删除</p>
    </div>
</div>
    `,
  data() {
    return {
      cityData: [
        {
          province: "陕西",
          cities: [
            {city: "西安市", areas: ["雁塔区", "长安区"]},
            {city: "咸阳市", areas: ["咸阳区1", "咸阳区2"]}
          ]
        },
        {
          province: "甘肃",
          cities: [
            {city: "兰州市", areas: ["城关区", "安宁区"]},
            {city: "天水市", areas: ["秦州区", "麦积区"]}
          ]
        }
      ],
      user: {
        name: "",
        intrs: [],
        selCity: {
          pro: "",
          ci: "",
          qu: ""
        }
      }
    }
  },
})
//========
/**
 * @type 优惠券
 */
var discoupon = Vue.component("seckAll", {
  data() {
    return {
      msg: "你有两个可用优惠",
      form: [
        {text: '', type: 'sdfas'},
      ]


    }
  },

  methods: {
    addchange: function () {
      let cou = document.getElementsByClassName("cou_x")[0]
      cou.style.display = "none"
    },
    slide: function () {
      let cou = document.getElementsByClassName("cou_x")[0]
      cou.style.display = "block"
    },
    packUp: function () {
      let cou = document.getElementsByClassName("cou_x")[0]
      cou.style.display = "none"
    },
    Nos: function () {
      let gg = document.getElementsByClassName("gg")[0]
      let bt = document.getElementsByClassName("bt")[0]
      let bt1 = document.getElementsByClassName("bt1")[0]
      let gh = document.getElementsByClassName("cou_w")[0]
      gg.style.display = "block"
      gh.style.display = "none"
      bt.style.opacity = 0
      bt1.style.opacity = 1
    },
    Yea: function () {
      let bt = document.getElementsByClassName("bt")[0]
      let bt1 = document.getElementsByClassName("bt1")[0]
      let gg = document.getElementsByClassName("gg")[0]
      let gh = document.getElementsByClassName("cou_w")[0]
      gg.style.display = "none"
      gh.style.display = "block"
      bt.style.opacity = 1
      bt1.style.opacity = 0
      gh.style.display = "flex"
    },
    kbu: function () {
      let cou = document.getElementsByClassName("cou_x")[0]
      cou.style.display = "none"
    },
    inputed: function () {
      let couk = document.getElementsByClassName("cou_k")[0]
      if (this.inputeds != "") {
        couk.style.backgroundColor = "red"


      }
    },
    add: function () {
      console.log('add')
      this.form.push({text: this.form.length, type: 'sdfas'})
      let win = document.getElementsByClassName("win")[0]
      win.style.display = "block"
      setTimeout(function () {
        win.style.display = "none"
      }, 2000);

    }

  },

  template:
    `<div class="cou_header">
             <div class="cou_top">youzan.githun.io</div>
             <div class="cou_nav">
                 <i class="iconfont icon-jiantou2"></i>
                 <p>Coupon优惠劵</p>
                 <i class="iconfont icon-yidongappxiexiaoxi"></i>
             </div>
             <div class="cou_v">基础用法</div>
             <div class="cou-f" @click="slide">
                 <div>优&nbsp;惠&nbsp;劵</div>
                 <div class="cou-g">
                     <div>{{msg}}</div>
                     <i class="iconfont icon-jiantou" style="font-size: .24rem"></i>
                 </div>
             </div>

              <div class="cou_x">
                  <div class="cou_q">
                      <input v-model="inputeds" @click="inputed" type="text" placeholder="请输入优惠码" />
                      <div class="cou_k" @click="add">兑换</div>
                  </div>
                  <div class="cou_y">
                      <div @click="Yea">
                          <p class="p1">可使用优惠劵（2）</p>
                          <p class="bt"></p>
                      </div>
                      <div @click="Nos">
                       <p class="p1">不可使用优惠劵（2）</p>
                      <p class="bt1"></p>
                      </div>
                  </div>

                 <div class="main">
                 <div  v-for="(name, index) in form" :key="index">
                     <div class="cou_w" @click="addchange" >
                         <div class="cou_t">
                             <div>￥1.5</div>
                             <div>无使用门槛</div>
                         </div>
                         <div class="cou_p">
                             <div>优惠劵名称</div>
                             <div>有效期：2018.11.30-2018.12.10</div>
                         </div>
                     </div>
                 </div>
                    <div class="gg">
                        <div class="cou_w2">
                            <div class="cou_t">
                                <div style="color:#ccc">￥1.5</div>
                                <div>无使用门槛</div>
                            </div>
                            <div class="cou_p">
                                 <div>优惠劵名称</div>
                                 <div>有效期：2018.11.30-2018.12.10</div>
                            </div>
                        </div>
                        <div class="cou_o">&nbsp;&nbsp;优惠劵不可用原因</div>
                    </div>
                 </div>
                 <div class="cou_footer" @click="packUp">不使用优惠</div>
                 <!--<div class="win" >兑换成功</div>-->
                 </div>
                 <div class="win" >兑换成功</div>
     </div>`
})
//=========
/**
 * @type 头部下拉
 * @type {ExtendedVue<V, any, any, any, Record<never, any>>}
 */
var FindHeader = Vue.component("FindHeader", {
  data() {
    return {
      tit: "标题",
      moretit: "全部栏目",
      titleInfo: [
        {type: "分类1"},
        {type: "分类2"},
        {type: "分类3"},
        {type: "分类4"},
        {type: "分类5"},
        {type: "分类6"},
      ],
      classList: [
        {classtit: "类别1"},
        {classtit: "类别2"},
        {classtit: "类别3"},
        {classtit: "类别4"},
        {classtit: "类别5"},
        {classtit: "类别6"},
        {classtit: "类别7"},
        {classtit: "类别8"},
        {classtit: "类别9"},
        {classtit: "类别10"},
        {classtit: "类别11"},
        {classtit: "类别12"},
      ],
      appear: false
    }
  },
  methods: {
    Appear() {
      this.appear = !this.appear
    },
    UnAppear() {
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
                <a href="javascript:0" class="header_a" @click="Appear">
                    <i class="iconfont icon-iconfontarrows1"></i>
                </a>
                <transition>
                    <div class="headerMore" v-if="appear">
                    <div class="headerMoreTop" @click="UnAppear">
                        <div class="headerMoreTopTit">{{moretit}}</div>
                        <div class="headerMoreTopTag"><i class="iconfont icon-shangjiantou" ></i></div>
                    </div>
                    <div class="headerMoreBottom" >
                        <a href="javascript:0" class="classes" v-for="i in classList">{{i.classtit}}</a>
                    </div>
                </div>
                </transition>
            </header>`
});
/**====== */
/**回到顶部start */

/**回到顶部end */
/**================ */
/**编辑联系人start */
var ContentPerson = Vue.component("menus", {
  template: `
  <div class="personAll">
<div class="menus" @click="addPerson">
    <div class="header">
      <a href="javascript:;"><i class="iconfont icon-fanhui"></i></a>
      <span>Contact联系人</span>
      <a href="javascript:;"><i class="iconfont icon-xie"></i></a>
    </div>
    <div class="basic">
      基础用法
    </div>
    <div class="add">
      <div class="spans">
        <span><i class="iconfont icon-jiahao"></i></span>
        <span>添加联系人</span>
      </div>
      <span><i class="iconfont icon-fanhui"></i></span>
    </div>
    <div class="no">
      不可编辑
    </div>
    <div class="person">
      <span><i class="iconfont icon-ren"></i></span>
      <div class="pright">
        <p>姓名：张三</p>
        <p>电话：13000000000</p>
      </div>
    </div>
    </div>
<div class="news">
    <div class="nHeader">
      <div class="nHeaderTop">
        <i class="iconfont icon-fanhui"></i>
        <span>张三，13000000000</span>
      </div>
      <i class="iconfont icon-xie"></i>
    </div>
    <div class="nFooter" @click="newperson">
        新建联系人
    </div>
  </div>
<div class="save_main">
    <div class="saveAge">
      姓名 <input type="text" placeholder="请填写姓名" v-model="nameMess">
    </div>
    <div class="saveAge">
      电话 <input type="text" placeholder="请填写电话" v-model="phoneMess">
    </div>
    <div class="saveFooter" @click="saveMessage">
      保存
    </div>
  </div>
</div> `,
  methods: {
    addPerson() {
      let menusDom = document.getElementsByClassName("menus")[0]
      let newsDom = document.getElementsByClassName("news")[0]
      let saveDom = document.getElementsByClassName("save_main")[0]
      menusDom.style.top = 100 + "vh";
      menusDom.style.transition = "top 0s";
      newsDom.style.top = 0 + "vh";
      newsDom.style.transition = "top .5s ease-in-out";
    },
    newperson() {
      let menusDom = document.getElementsByClassName("menus")[0]
      let newsDom = document.getElementsByClassName("news")[0]
      let saveDom = document.getElementsByClassName("save_main")[0]
      newsDom.style.top = 100 + "vh";
      // newsDom.style.zIndex = 0 + "vh";
      newsDom.style.transition = "top 0s";
      saveDom.style.top = 0 + "vh";
      saveDom.style.transition = "top .5s ease";
    },
    saveMessage() {
      let menusDom = document.getElementsByClassName("menus")[0]
      let newsDom = document.getElementsByClassName("news")[0]
      let saveDom = document.getElementsByClassName("save_main")[0]
      let personAll = document.getElementsByClassName("personAll")[0]
      menusDom.style.top = 0 + "vh";
      menusDom.style.transition = "top .5s ease";
      saveDom.style.top = 100 + "vh";
      saveDom.style.transition = "top 0s";
      window.localStorage.name = this.nameMess
      window.localStorage.phone = this.phoneMess
      let htmlMessage =
        `<div class="person">
                <span><i class="iconfont icon-ren"></i></span>
                <div class="pright">
                   <p id="page">姓名：</p>
                   <p class="pPhone">电话：</p>
                </div>
            </div>`
      menusDom.innerHTML += htmlMessage
      let pAge = document.querySelectorAll("#page")[document.querySelectorAll("#page").length - 1]
      let pPhone = document.getElementsByClassName("pPhone")[document.querySelectorAll(".pPhone").length - 1]
      pAge.innerHTML = "姓名：" + window.localStorage.name
      pPhone.innerHTML = "电话：" + window.localStorage.phone
    }
  },
  data() {
    return {
      nameMess: "",
      phoneMess: ""
    }
  },
})

/**编辑联系人end */

/**============== */
/**分页器 start */
var pagebtn = Vue.component("fenAll", {
  data() {
    return {
      currentPage: 1,
      totalPages: 10,
      totalPagess: 5,

    }
  },
  computed: {
    pages() {
      return 5;
    },

    page() {
      const c = this.currentPage
      const t = this.totalPages
      if (c <= 5) {
        return [1, 2, 3, 4, 5, 6, '...', t]
      } else if (c >= t - 4) {
        return [1, '...', t - 8, t - 7, t - 6, t - 5, t - 4, t - 3, t - 2, t - 1, t]
      }


    }


  },

  methods: {
    select(item) {
      this.currentPage = item

    },
    select2(item2) {
      this.currentPage = item2

    },

    prevOrNext(n) {
      this.currentPage += n
      // console.log(this.currentPage)
      this.currentPage < 1
        ? this.currentPage = 1
        : this.currentPage > this.totalPagess
        ? this.currentPage = this.totalPagess
        : null
    },
    prevOrNexttow(v) {
      this.currentPage += v
      this.currentPage < 1
        ? this.currentPage = 1
        : this.currentPage > this.totalPages
        ? this.currentPage = this.totalPages
        : null
    },
  },
  template:
    `<div class="fen_header">
            <div class="fen_top"> youzan.githun.io</div>
            <div class="fen_nav">
                <i class="iconfont icon-jiantou2"></i>
                <p>Pagination分页</p>
                <i class="iconfont icon-yidongappxiexiaoxi"></i>
            </div>
            <div class="fen_v">基础用法</div>
            <p class="p1">当前第{{currentPage}}页</p>
            <div class="one">
                 <ul class="pagesInner">
                   <li class="page"  @click="prevOrNext(-1)">
                   <i class="iconfont icon-zuojiantou"></i>
                       <span class="fa fa-chevron-left" aria-hidden="true"></span>
                   </li>
                   <li class="page" v-for="(item, index) in pages" :key="index"  :class="{actived: item === currentPage}" @click="select2(item)"    >
                      <span>{{item}}</span>
                   </li>
                   <li class="page"  @click="prevOrNext(+1)">
                       <span class="fa fa-chevron-right" aria-hidden="true"></span>
                       <i class="iconfont icon-youjiantou"></i>
                   </li>
                </ul>


            </div>
            <div class="fen_v">简单模式</div>

             <div class="one">
                 <ul class="pagesInner">
                   <li class="page"  @click="prevOrNexttow(-1)">
                   <i class="iconfont icon-zuojiantou"></i>
                       <span class="fa fa-chevron-left" aria-hidden="true"></span>
                   </li>
                   <li class="page" v-for="(item2, index) in page" :key="index"  :class="{actived: item2 === currentPage}" @click="select2(item2)"    >
                      <span>{{item2}}</span>
                   </li>
                   <li class="page"  @click="prevOrNexttow(+1)">
                       <span class="fa fa-chevron-right" aria-hidden="true"></span>
                       <i class="iconfont icon-youjiantou"></i>
                   </li>
                </ul>


            </div>


    </div>`

})
/**分页器 end */



var indexpage =Vue.component("indexpage",{
  template:`<div class="indexPage">
      <header>
        <a href="">热门</a>
        <a href="">女装</a>
        <a href="">百货</a>
        <a href="">鞋包</a>
        <a href="">食品</a>
        <a href="">母婴</a>
        <a href="">内衣</a>
        <a href="">电器</a>
        <a href="">男装</a>
        <a href="">家具</a>
        <a href="">水果</a>
        <a href="">电脑</a>
    </header>

    <div class="content" id="content">
    	<div class="solider" id="sliderBox">
   
    	</div>
    	<div class="list_type">
    		<div class="function_left">
    			<a href=""><img src="../img/ico1.jpg" alt="" width="100%"><span>限时秒杀</span></a>
	    		<a href=""><img src="../img/ico2.jpg" alt="" width="100%"><span>每日抢购</span></a>
	    		<a href=""><img src="../img/ico3.jpg" alt="" width="100%"><span>品牌官</span></a>
	    		<a href=""><img src="../img/ico4.jpg" alt="" width="100%"><span>多多乐园</span></a>
	    		<a href=""><img src="../img/ico5.jpg" alt="" width="100%"><span>9块9特卖</span></a>
	    		<a href=""><img src="../img/ico6.jpg" alt="" width="100%"><span>充值中心</span></a>
	    		<a href=""><img src="../img/ico7.jpg" alt="" width="100%"><span>爱逛逛</span></a>
	    		<a href=""><img src="../img/ico8.jpg" alt="" width="100%"><span>现金签到</span></a>
	    		<a href=""><img src="../img/ico9.jpg" alt="" width="100%"><span>食品超市</span></a>
	    		<a href=""><img src="../img/ico10.jpg" alt="" width="100%"><span>电器城</span></a>
    		</div>
    		<div class="function_right">
    			<a href=""><img src="../img/ico1.jpg" alt="" width="100%"><span>限时秒杀</span></a>
	    		<a href=""><img src="../img/ico2.jpg" alt="" width="100%"><span>每日抢购</span></a>
	    		<a href=""><img src="../img/ico3.jpg" alt="" width="100%"><span>品牌官</span></a>
	    		<a href=""><img src="../img/ico4.jpg" alt="" width="100%"><span>多多乐园</span></a>
	    		<a href=""><img src="../img/ico5.jpg" alt="" width="100%"><span>9块9特卖</span></a>
	    		<a href=""><img src="../img/ico6.jpg" alt="" width="100%"><span>充值中心</span></a>
	    		<a href=""><img src="../img/ico7.jpg" alt="" width="100%"><span>爱逛逛</span></a>
	    		<a href=""><img src="../img/ico8.jpg" alt="" width="100%"><span>现金签到</span></a>
	    		<a href=""><img src="../img/ico9.jpg" alt="" width="100%"><span>食品超市</span></a>
	    		<a href=""><img src="../img/ico10.jpg" alt="" width="100%"><span>电器城</span></a>
			</div>
		</div>
	
		
		<div class="goodsList">
			<div><img src="../img/list_1.jpg" width="100%" alt=""></div>
			<div id="goodsInfo" class="goodsInfo">
				<h3>【1000g】约34包红豆薏米饼干祛湿全麦饼干无糖代餐</h3>
				<p class="">立减1元</p>
				<p class="sell">
					<span id="price">$6.48</span>
					以拼6万元
					<span>
						<img src="../img/list_1_1.jpg" width="100%" alt="" id="imgId">
					</span>
				</p>
			</div>
		</div>
		<div class="specialPrice">
				<p>10.27每日特价<img src="../img/xin.jpg" width="100%"alt="">家庭清洁超低折扣<a href="">查看更多</a></>
				<div class="recommdGoodsBox">
					<div class="recommdGoods">
						<img src="../img/tj_2.jpg" alt="">
						<p>加绒保暖家用手套</p>
						<span>活动价￥2.3</span>
					</div>
					<div class="recommdGoods">
							<img src="../img/tj_1.jpg" alt="">
							<p>加绒保暖家用手套</p>
							<span>活动价￥2.3</span>
					</div>
					<div class="recommdGoods">
							<img src="../img/tj_3.jpg" alt="">
							<p>加绒保暖家用手套</p>
							<span>活动价￥2.3</span>
					</div>
					<div class="recommdGoods">
							<img src="../img/tj_1.jpg" alt="">
							<p>加绒保暖家用手套</p>
							<span>活动价￥2.3</span>
					</div>
					<div class="recommdGoods">
							<img src="../img/tj_1.jpg" alt="">
							<p>加绒保暖家用手套</p>
							<span>活动价￥2.3</span>
					</div>
				</div>
		</div>
		<div class="goodsList">
			<div><img src="../img/list_2.jpg" width="100%" alt=""></div>
			<div id="goodsInfo" class="goodsInfo">
				<h3>【1000g】约34包红豆薏米饼干祛湿全麦饼干无糖代餐</h3>
				<p class="">立减1元</p>
				<p class="sell">
					<span id="price">$6.48</span>
					以拼6万元
					<span>
						<img src="../img/list_1_1.jpg" width="100%" alt="" id="imgId">
					</span>
				</p>
			</div>
		</div>
		
		<div class="goodsList">
				<div><img src="../img/list_4.jpg" width="100%" alt=""></div>
				<div id="goodsInfo" class="goodsInfo">
					<h3>【1000g】约34包红豆薏米饼干祛湿全麦饼干无糖代餐</h3>
					<p class="">立减1元</p>
					<p class="sell">
						<span id="price">$6.48</span>
						以拼6万元
						<span>
							<img src="../img/list_1_1.jpg" width="100%" alt="" id="imgId">
						</span>
					</p>
				</div>
		</div>
		<div class="goodsList">
				<div><img src="../img/list_5.jpg" width="100%" alt=""></div>
				<div id="goodsInfo" class="goodsInfo">
					<h3>【1000g】约34包红豆薏米饼干祛湿全麦饼干无糖代餐</h3>
					<p class="">立减1元</p>
					<p class="sell">
						<span id="price">$6.48</span>
						以拼6万元
						<span>
							<img src="../img/list_1_1.jpg" width="100%" alt="" id="imgId">
						</span>
					</p>
				</div>
		</div>
		<div class="goodsList">
				<div><img src="../img/list_5.jpg" width="100%" alt=""></div>
				<div id="goodsInfo" class="goodsInfo">
					<h3>【1000g】约34包红豆薏米饼干祛湿全麦饼干无糖代餐</h3>
					<p class="">立减1元</p>
					<p class="sell">
						<span id="price">$6.48</span>
						以拼6万元
						<span>
							<img src="../img/list_1_1.jpg" width="100%" alt="" id="imgId">
						</span>
					</p>
				</div>
		</div>
	</div>
	<footer>
		<a href=""><i class="iconfont icon-shouye"></i><span>首页</span></a>
		<a href=><i class="iconfont icon-tuijian"></i><span style="font-size: .08rem">推荐</span></a>
		<a href=""><i class="iconfont icon-sousuo"></i><span>搜索</span></a>
		<a href="">
			<i class="iconfont icon-liaotian"></i><span>聊天</span></a>
		<a href=""><i class="iconfont icon-gerenzhongxin"></i><span>个人中心</span></a>
	</footer>	
 
</div>`
})
