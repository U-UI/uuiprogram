<template>
  <div id="example">
    <h3>多选按钮</h3>
    <div class="check-area" v-show="items.length!=0">
      <ul>
        <li class="border-1px" v-for="(item,index) in items">
          <input class="self-checkbox" type="checkbox"
                 :id="'checkbox-'+item.id"
                 :data-id="'food-'+item.id" name="radio"
                 :value="item.value"
                 v-model="checkValues"
                 @click="setCheckValue($event,item)">
          <label :for="'checkbox-'+item.id"></label>
          <span>{{item.value}}</span>
        </li>
      </ul>
      <p>您选择了：<span v-show="checkValues.length">{{filterCheckValues}}</span></p>
      <div class="btn">
        <button @click="showCheck(checkIds)">按钮</button>
        <span v-show="checkIds.length">{{checkIds}}</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Checkboxs",

      data(){
        return{
          itemData:[{id: '20170811001', value: '香蕉'},
            {id: '20170811002', value: '苹果'},
            {
              id: '20170811003',
              value: '梨子'
            }, {id: '20170811004', value: '葡萄'}],
          items: '',
          checkValues: [],
          checkIds: []
        }
      },
      computed: {
        filterCheckValues: function () {
          var value = this.checkValues;
          var reValue = '';
          for (var i = 0; i < value.length; i++) {
            reValue += value[i] + '、'
          }
          reValue = reValue.substring(0, reValue.length - 1)
          return reValue;
        }
      },
      methods: {
        initData: function () {
          var self = this;
          self.items = this.itemData;
          if (itemData.length != 0) {
//   self.checkValues[0] = self.items[0].value;
//   self.checkIds[0] = 'food-' + self.items[0].id;
          }
        },
        setCheckValue: function (ev, item) {
          var id = 'food-' + item.id;
          if (ev.target.checked) {
            this.checkIds.push(id);
          } else if (this.checkIds.indexOf(id) > -1) {
            this.checkIds.remove(id);
          }
        }
        ,
        showCheck: function () {
          console.log(this.checkIds)
        }
      },
      filter: {},
      mounted: function () {
        this.initData();
      },
      // Array.prototype.remove = function (val) {
      //     var index = this.indexOf(val);
      //     if (index > -1) {
      //         this.splice(index, 1);
      //     }
      // },
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
  #example {
    margin: 20px;
  }

  h3 {
    font-size: 26px;
    margin-left: 20px;
    height: 60px;
  }

  .self-checkbox {
    display: none;
  }

  .self-checkbox + label {
    margin-top: 16px;
    -webkit-appearance: none;
    background-color: #fff;
    border: 2px solid #aaa;
    border-radius: 5px;
    display: inline-block;
    position: relative;
    width: 30px;
    height: 30px;
    box-sizing: border-box;
    vertical-align: top;
  }

  .self-checkbox:checked + label {
    border: 2px #47d9bf solid;
  }

  .self-checkbox:checked + label:after {
    display: inline-block;
    text-align: center;
    content: '√';
    width: 100%;
    height: 30px;
    line-height: 26px;
    color: #47d9bf;
    font-size: 18px;
    text-shadow: 0px 0px 5px #47d9bf;
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
