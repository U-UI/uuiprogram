      function test(){
        console.log(123)
      }
      //==========
      /**
       * 子目录
       */
      let subCategory = {
        template: `<div class="mobile_nav_sub mobile_nav_war" @click="jumpPage"><span class="mobile_nav_span">{{modulename}}</span><span class="mobile_nav_span"><i class="iconfont icon-you"></i></span></div>`,
        props: ["modulename"],
        methods:{
            jumpPage(){
                this.$router.push("/"+this.modulename);
                test();
            }
        }
      };
      //============

      //=================
      /**
       * 目录
       */
      let category = {
        template: `<div class="mobile_nav"><div class="mobile_nav_title mobile_nav_war" @click="iShide"><span class="mobile_nav_span">基础组件</span><span class="mobile_nav_span"><i :class="'iconfont '+ iconame"></i></span></div><subCategory v-if="iSshow" v-for="(p,idx) in modules" :modulename="modules[idx]" :key="idx"></subCategory></div>`,
        data() {
          return {
            iSshow: false,
            iconame: "icon-xia",
            modules: ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9"]
          };
        },
        methods: {
          iShide() {
            if (this.iSshow) {
              this.iSshow = false;
              this.iconame = "icon-xia";
            } else {
              this.iSshow = true;
              this.iconame = "icon-shang";
            }
          }
        },
        components: {
          subCategory
        }
      };
      //===================
      /**
       *首页
       */
      let home = {
        template: `<section><category></category></section>`,
        components: {
          category
        }
      };
      //=================
      