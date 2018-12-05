<template>
  <div id="example">
    <h3>单选按钮</h3>
    <div class="check-area" v-show="items.length!=0">
      <ul>
        <li class="border-1px" v-for="(item,index) in items">
          <input class="self-radio" type="radio"
                 :id="'radio-'+item.id"
                 :data-id="'food-'+item.id" name="radio"
                 :checked="index==0"
                 :value="item.value"
                 v-model="checkValue">
          <label :for="'radio-'+item.id" @click="setCheckValue(item)"></label>
          <span>{{item.value}}</span>
        </li>
      </ul>
      <p>您选择了：<span>{{checkValue}}</span></p>
      <div class="btn">
        <button @click="showCheck(checkId)">按钮</button>
        <span>{{checkId}}</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Radios",
      data(){
        return{
          itemData:[{id: '20170811001', value: '香蕉'},
            {id: '20170811002', value: '苹果'},
            {
              id: '20170811003',
              value: '梨子'
            }, {id: '20170811004', value: '葡萄'}],
          items: '',
          checkValue: '',
          checkId: ''
        }
      },
      methods: {
        initData() {
          var self = this;
          self.items = this.itemData;
          if ( self.items.length != 0) {
            self.checkValue = self.items[0].value;
            self.checkId = 'food-' + self.items[0].id
          }
        },
        setCheckValue: function (item) {
          this.checkId = 'food-' + item.id;
        } ,
        showCheck: function () {
          console.log(this.checkId)
        }
      },
      mounted: function () {
        this.initData();
      },
    }
</script>

<style scoped>
  ul, li {
    list-style-type: none;
  }

  * {
    margin: 0;
    padding: 0;
  }

  .border-1px {
    position: relative;
  }

  .border-1px:after {
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-top: 1px solid rgba(7, 17, 27, .1);
    content: ' ';
  }

  @media (-webkit-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5) {
    .border-1px::after {
      -webkit-transform: scaleY(0.7);
      transform: scaleY(0.7);
    }
  }

  @media (-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2) {
    .border-1px ::after {
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
    }
  }

  #example {
    margin: 20px;
  }

  h3 {
    font-size: 26px;
    margin-left: 20px;
    height: 60px;
  }

  .self-radio {
    display: none;
  }

  .self-radio + label {
    -webkit-appearance: none;
    background-color: #fff;
    border: 1px solid #aaa;
    border-radius: 50px;
    display: inline-block;
    position: relative;
    width: 30px;
    height: 30px;
    box-sizing: border-box;
  }

  .self-radio:checked + label {
    border: 1px #47d9bf solid;
  }

  .self-radio:checked + label:after {
    position: absolute;
    top: 9px;
    left: 9px;
    content: ' ';
    width: 10px;
    height: 10px;
    border-radius: 50px;
    background: #47d9bf;
    box-shadow: 0px 0px 5px 0px #47d9bf;
  }

  .check-area {
    display: inline-block;
    width: 300px;
    padding: 12px 20px;
    border: 1px solid #aaa;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  li {
    height: 60px;
  }

  li .self-radio + label {
    vertical-align: middle;
  }

  li span {
    margin-left: 20px;
    display: inline-block;
    line-height: 60px;
    font-size: 22px;
  }

  p {
    height: 60px;
    line-height: 60px;
    margin-left: 20px;
  }

  p span {
    color: #f00;
  }

  .btn {
    margin: 20px auto;
    width: 100%;
    text-align: center;
  }

  .btn button {
    width: 120px;
    height: 40px;
    line-height: 30px;
    font-size: 16px;
    color: #fff;
    background: #47d9bf;
    border: 1px #23d5b6 solid;
    border-radius: 6px;
    text-align: center;
    outline: none;
  }

  .btn button:hover {
    background: #23d5b6;
  }
</style>
