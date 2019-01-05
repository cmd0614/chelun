<template>
  <div id="app">
    <!-- <button @click='goBu'>补换驾照</button> -->
    <div class="appBodyTop">
      <span :class="[flag===1 ? 'active' : '', 'appBodyTopItem']" @click="changeFlag(1)">订单提交</span>
      <span :class="[flag===2 ? 'active' : '', 'appBodyTopItem']" @click="changeFlag(2)">填写收货地址</span>
       
      <span :class="[flag===3 ? 'active' : '', 'appBodyTopItem']" @click="changeFlag(3)">正在办理</span>
      <span :class="[flag===4 ? 'active' : '', 'appBodyTopItem']" @click="changeFlag(4)">办理完成</span>
    </div>
    <div class="bannerImg">
      <img src="http://localhost:8080/src/assets/image/banner.jpg">
    </div>
    <div class="addBox">
      <div class="addBoxItem" v-for="(item,index) in list" :key="index" @click="showFlag(item)">
        <p>
          <img :src="item.src" v-if="item.src">
          <img :src="addImg" v-else>
        </p>
        <p>{{item.name}}</p>
      </div>
    </div>
    <section v-show="showMask" class="mask">
      <img :src="current.demo">
      <div>
        <button @click="upload(1)">拍照</button>
        <button @click="upload(2)">相册</button>
        <button @click="cancel">取消</button>
      </div>
    </section>
    <div class="box"></div>
    <div class="addCont">
      <div class="addContType">
        <p>服务类型</p>
        <p class="rightItem" @click="changeShow">{{conts}} ></p>
      </div>
      <cityPicker />
      <div class="addContType">
        <p>服务费</p>
        <p class="rightItem red">￥399</p>
      </div>
    </div>
    <div class="box"></div>
    <div class="addCont">
      <div class="addContType">
        <p>优惠</p>
        <p class="rightItem">登陆后查看优惠券 ></p>
      </div>
    </div>
    <div class="aHref">
      <a href="">常见问题</a>
    </div>
    <div class="addBot">
      <p>
        实付：<span class="red">￥399</span>
      </p>
      <button @click="goPays">
        立即支付
      </button>
    </div>

    <van-popup v-model="show" :overlay="true" position="bottom">
      <van-picker :columns="columns" show-toolbar title="标题" @cancel="onCancel"
  @confirm="onConfirm"/> 
    </van-popup>

    <showCityMask v-show="cityMask" />
  </div>
</template>

<script>
//引入辅助方法
import {mapState,mapMutations} from 'vuex';
// 引入加号图片
import add from '@/assets/image/add.png'
// 引入api调用
import {uploadImg} from '@/api/index'

//引入遮罩层组件
import showCityMask from './showCityMask';
//引入城市组件
import cityPicker from './cityPicker'

import {isVip} from '@/api/index';
import {goPay} from '@/api/index'

export default {
  data(){
    return {
      current: {},
      showMask: false,
      flag:1,
      columns:['补换驾照','换驾照'],
      show:false,
      conts:'换驾照',
      cityMask:false, //城市遮罩
      url:''
    }
  },
  components: {
    showCityMask,
    cityPicker
  },
  computed: {
    // 辅助方法
    ...mapState({
      list:state=>state.upload.list
    }),
    // 将引入的加号图片返回
    addImg(){
      return add
    },
  },
  mounted () {
    //跨域，设置代理
    fetch('/api/ExchangeJiaZhao/getCostList?order_type=1&city_id=110100000000&province_id=110').then(response => response.json())
    .then(data => {
      // data就是我们请求的repos
    })

    isVip().then(res=>{
      console.log('isVip...',res)
    })
  },
  methods: {
    //点击显示遮罩
    changeShow(){
      this.show = true
    },

    //点击确认按钮
    onConfirm(value) {
      // console.log('qu')
      this.conts =  value
      this.show = false
    },
    onCancel() {
      
    },

    // 同步改变辅助方法
    ...mapMutations({
      updataList:'upload/updateList'
    }),

    // 点击显示这种
    showFlag(item){
      this.current = item
      this.showMask = true
    },
    // 点击切换样式
    changeFlag(index){
      this.flag = index
    },

    // 点击取消隐藏遮罩
    cancel(){
      this.showMask = false
    },
    // 上传功能
    async upload(type){
      // type为接收到的type类型，是拍照还是相册
      let res = await uploadImg(type);
      // this.list是仓库里面传来的数组，在数组中找到符合的下标
      let index = this.list.findIndex(item=>item==this.current);
      // 辅助方法
      this.updataList({
        index,
        // src: 'http://picture.eclicks.cn/g2//l//2019//01//02//454a564ad63ddda5_640_853.jpg',
        src: res.data.url
      })
      this.showMask = false;
    },
    //支付功能
    goPays(){
      console.log(1)
      goPay()
    }
  }
}
</script>

<style lang="scss">
  .mask{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0, .8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  img{
    width: 90%;
    margin-top: 20%;
  }
  div{
    display: flex;
    width: 90%;
    flex-direction: column;
    align-items: center;
    button{
      width: 100%;
      height: 40px;
      letter-spacing: 10px;
      border-radius: 15px;
      color: #3aafc0;
      margin-top:6px;
    }
    button:first-child{
      border-radius: .15rem .15rem 0 0;
    }
    button:nth-child(2){
      border-radius: 0 0 .15rem .15rem;
    }
    button:last-child{
      margin: .15rem 0;
    }
  }
}
  .addBot{
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  padding: 0 0 0 16px;
  justify-content: space-between;
  height: 44px;
  line-height: 44px;
  box-sizing: border-box;
  button{
    height: 44px;
    width: 80px;
    text-align: center;
    border:0;
    outline:none;
    background: #999999;
    color: #fff;
  }
}
.aHref{
  width: 100%;
  height: 44px;
  line-height: 44px;
  text-align: center;
}
.red{
  color: #F44844;
}
.rightItem{
  margin-right: 12px;
}
.addCont{
  width: 100%;
  padding: 0 0 0 12px;
  box-sizing: border-box;
  .addContType{
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
  }
  
}
.box{
  width: 100%;
  height: 12px;
  background: #EEEEEE;
  margin-top:12px;
}
.addBox{
  width: 100%;
  display: flex;
  .addBoxItem{
    flex: 1;
    align-items: center;
    img{
      width: 80%;
      padding:12px 0 0 0;
    }
    p{
      font-size: 14px;
      width: 100%;
      padding: 0 10px;
      box-sizing: border-box;
      text-align: center;
    }
  }
}
.bannerImg{
  width: 100%;
  img{
    width: 100%;
  }
}
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  
}
.appBodyTop{
  width: 100%;
  height: 44px;
  line-height: 44px;
  display: flex;
}
.appBodyTopItem{
  flex: 1;
  height: 44px;
  font-size: 12px;
  line-height: 44px;
  text-align: center;
  
}
.active{
  background: url('../assets/image/img.jpg');
  background-size: 100% 100%;
  color: #fff;
}
</style>
