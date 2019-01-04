//引入封装请求方法
import {cityList, costList} from '../../api/index'
const state = {
  // 签发城市列表
  cityList: [],
  costList: [],
  // 选择的签发城市
  city: [],
  // 默认的补换的选中下标
  costDeftindex:0,
  cost: []
}

const mutations = {
  //根据数据进行更新
  updateState(state,action){
    state = Object.assign(state,action)
  }
}

const actions = {
  //获取签发城市列表
  async getCityList({commit}){
    //调用引入的请求方法
    let res = await cityList()
    res.data.forEach(item=>{
      item.list.forEach(value=>{
        delete value.list //删除数据中的区的数据
      })
    })
    //不直接赋值，提交一个mutations
    commit('updateState',{cityList:res.data})
  },

  //获取可补换的城市列表
  async getCostList({commit,state},action) {
    //获取省份，市区下标
    let proIndex = state.cityList.findIndex(item=>item.name == state.city[0])
    let cityIndex = state.cityList[proIndex].list.findIndex(item=>item.name==state.city[1])
    //根据下标进行匹配
    let res = await costList(1,state.cityList[cityIndex].id, state.cityList[proIndex].list[cityIndex].id)
    commit('updateState',{costList:res.data})
  }
}


export default {
  namespaced: true,
  state,
  actions,
  mutations
}