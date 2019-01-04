<template>
  <div>
    <div class="addContCity">
      <p @click="showCityMask">当前驾照签发城市</p>
      <p @click="cityClick">
        <input type="text" placeholder="请选择签发地" v-model="city">
      </p>
    </div>
    <div class="addContCity">
      <p @click="showCityMask">可补换的签发城市</p>
      <p @click="costClick">
        <input type="text" placeholder="请选择补换地" v-model="cost">
      </p>
    </div>
    <div>
      <van-popup v-model="showCity" position="bottom">
        <van-picker :columns="cityColumns" show-toolbar title="选择签发城市" @cancel="cityCancel" @confirm="cityConfirm" @change="cityChange" ref="cityPicker" />
      </van-popup>
      <van-popup v-model="showCost" position="bottom">
        <van-picker :columns="cityColumn1" show-toolbar title="选择签发城市" @cancel="costCancel" @confirm="costConfirm" @change="costChange" ref="costPicker" />
      </van-popup>
    </div>
    
  </div>
</template>

<script>
//引入辅助方法
import {mapActions,mapState,mapMutations} from 'vuex';

export default {
  data() {
    return {
      //控制当前驾照
      showCity:false,
      //控制可补换驾照
      showCost:false,
      cityColumns:[],
      cityColumn1:[]
    }
  },
  //获取数据
  mounted () {
    //调用辅助方法，可以获取到签发城市列表
    this.getCityList().then(res=>{
      this.cityColumns = [
        {
          values:this.cityList.map(item=>item.name)
        },
        {
          values:this.cityList[0].list.map(item=>item.name)
        }
      ]
    })

    //获取补发城市列表
    // this.getCostList()
  },

  computed:{
    //辅助方法，获取到数据
    ...mapState({
      cityList:state=> state.cityPicker.cityList,
      city:state=>state.cityPicker.city,
      costList:state=> state.cityPicker.costList,
      cost:state=>state.cityPicker.cost,
      costDeftindex:state=>state.cityPicker.costDeftindex
    })
  },

  methods: {
    //引入辅助方法 actions
    ...mapActions({ 
      getCityList:'cityPicker/getCityList',
      getCostList:'cityPicker/getCostList'
    }),
    ...mapMutations({
      updateState:'cityPicker/updateState',

    }),

    //点击出现弹框
    showCityMask(){
      this.cityMask = true
      setTimeout(()=>{
        this.cityMask = false
      },2000)
    },
    //签发城市
    cityClick(){
      this.showCity = true
    },
    //点击确认
    cityConfirm(values){
      // console.log(values) //获取到选择的数据，将数据方法哦vuex中去
      this.updateState({city: values})
      this.showCity = false
    },
    //点击取消
    cityCancel(){
      this.showCity = false
    },
    //当左边进行改变的时候，右边随着改变
    cityChange(picker,values){
      // console.log(picker,values,'picker')
      //获取省份的下标
      let index = this.cityList.findIndex(item=>item.name == values[0])
      // 调用api更新城市数据
      this.$refs.cityPicker.setColumnValues(1, this.cityList[index].list.map(item=>item.name));
    },
     //补换的签发城市
    costClick(){
      //判断如果前面的没有选择，后面也不可选择
      if (!this.city.length) {
        alert('请选择签发城市')
      } else {
        this.showCost = true;
        this.getCostList().then(res=>{
          this.cityColumn1 = [
            {
              // 左侧省份
              values:this.costList.map(item=>item.name)
            },
            {
              // 右侧市区
              values:this.costList[this.costDeftindex].list.map(item=>item.name)
            }
          ] 
        })
      }
    },
    //点击补换确认
    costConfirm(values){
      // console.log(values) //获取到选择的数据，将数据方法哦vuex中去
      this.updateState({cost: values});
      this.showCost = false;
    },
    //点击补换取消
    costCancel(){
      this.showCost = false;
    },
    // 补换的改变
    costChange(picker,values) {
       // console.log(picker,values,'picker')
      //获取省份的下标
      let index = this.costList.findIndex(item=>item.name == values[0])
      this.updateState({costDeftindex:index});
      // 调用api更新城市数据
      this.$refs.costPicker.setColumnValues(1, this.costList[index].list.map(item=>item.name));
    }
  },
}
</script>

<style lang="scss">
  .addContCity{
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    input{
      border: 0;
      text-align: right;
      height: 100%;
      outline: none;
      padding: 0 12px 0 0;
    }
  }
</style>
