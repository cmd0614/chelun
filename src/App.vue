<template>
  <!-- <div id="app">
    <button @click='goBu'>补换驾照</button>
    <div class="appBodyTop">
      <span :class="[flag===1 ? 'active' : '', 'appBodyTopItem']" @click="changeFlag(1)">订单提交</span>
      <span :class="[flag===2 ? 'active' : '', 'appBodyTopItem']" @click="changeFlag(2)">填写收货地址</span>
       
      <span :class="[flag===3 ? 'active' : '', 'appBodyTopItem']" @click="changeFlag(3)">正在办理</span>
      <span :class="[flag===4 ? 'active' : '', 'appBodyTopItem']" @click="changeFlag(4)">办理完成</span>
    </div>
    <div class="bannerImg">
      <img src="./assets/image/banner.jpg" alt="">
    </div>
    <div class="addBox">
      <div class="addBoxItem" v-for="addList in list">
        <p>
          <img src="./assets/image/addimg.jpg" alt="">
        </p>
        <p>{{addList.name}}</p>
      </div>
    </div>
    <div class="box"></div>
    <div class="addCont">
      <div class="addContType">
        <p>服务类型</p>
        <p class="rightItem">换驾照 ></p>
      </div>
      <div class="addContCity">
        <p>当前驾照签发城市</p>
        <p>
          <input type="text" placeholder="请选择签发地">
        </p>
      </div>
      <div class="addContCity">
        <p>可补换的签发城市</p>
        <p>
          <input type="text" placeholder="请选择补换地">
        </p>
      </div>
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
      <button>
        立即支付
      </button>
    </div>
  </div> -->
</template>

<script>
// export default {
//   name: 'app',
//   data () {
//     return {
//       flag:1,
//       list:[
//         {
//           url:'./assets/image/addimg.jpg',
//           name:'身份证正面'
//         },
//         {
//           url:'./assets/image/addimg.jpg',
//           name:'身份证反面'
//         },
//         {
//           url:'./assets/image/addimg.jpg',
//           name:'驾驶证正页'
//         },
//         {
//           url:'./assets/image/addimg.jpg',
//           name:'驾驶证副页'
//         },
//         {
//           url:'./assets/image/addimg.jpg',
//           name:'白底半身照'
//         }
//       ]
//     }
//   },
//   methods: {
//     changeFlag(index){
//       this.flag = index
//     }
//   }
// }
// </script>

// <style lang="scss">
// .addBot{
//   width: 100%;
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   display: flex;
//   padding: 0 0 0 16px;
//   justify-content: space-between;
//   height: 44px;
//   line-height: 44px;
//   box-sizing: border-box;
//   button{
//     height: 44px;
//     width: 80px;
//     text-align: center;
//     border:0;
//     outline:none;
//     background: #999999;
//     color: #fff;
//   }
// }
// .aHref{
//   width: 100%;
//   height: 44px;
//   line-height: 44px;
//   text-align: center;
// }
// .red{
//   color: #F44844;
// }
// .rightItem{
//   margin-right: 12px;
// }
// .addCont{
//   width: 100%;
//   padding: 0 0 0 12px;
//   box-sizing: border-box;
//   .addContType{
//     width: 100%;
//     height: 50px;
//     line-height: 50px;
//     display: flex;
//     justify-content: space-between;
//     border-bottom: 1px solid #ccc;
//   }
//   .addContCity{
//     width: 100%;
//     height: 50px;
//     line-height: 50px;
//     display: flex;
//     justify-content: space-between;
//     border-bottom: 1px solid #ccc;
//     input{
//       border: 0;
//       text-align: right;
//       height: 100%;
//       outline: none;
//       padding: 0 12px 0 0;
//     }
//   }
// }
// .box{
//   width: 100%;
//   height: 12px;
//   background: #EEEEEE;
//   margin-top:12px;
// }
// .addBox{
//   width: 100%;
//   display: flex;
//   .addBoxItem{
//     flex: 1;
//     align-items: center;
//     img{
//       width: 80%;
//       padding:12px 0 0 0;
//     }
//     p{
//       font-size: 14px;
//       width: 100%;
//       padding: 0 10px;
//       box-sizing: border-box;
//       text-align: center;
//     }
//   }
// }
// .bannerImg{
//   width: 100%;
//   img{
//     width: 100%;
//   }
// }
// *{
//   margin: 0;
//   padding: 0;
// }
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   color: #2c3e50;
  
// }
// .appBodyTop{
//   width: 100%;
//   height: 44px;
//   line-height: 44px;
//   display: flex;
// }
// .appBodyTopItem{
//   flex: 1;
//   height: 44px;
//   font-size: 12px;
//   line-height: 44px;
//   text-align: center;
  
// }
// .active{
//   background: url('./assets/image/img.jpg');
//   background-size: 100% 100%;
//   color: #fff;
// }
// </style>
