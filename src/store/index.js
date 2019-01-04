import Vue from 'vue'
import Vuex from 'vuex'

//引入模块
import upload from './modules/upload'
import cityPicker from './modules/cityPicker'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    upload,
    cityPicker
  },
  plugins:[createLogger()]
})