import demo1 from '@/assets/image/id-a.png'
import demo2 from '@/assets/image/id-b.png'
import demo3 from '@/assets/image/licence-a.png'
import demo4 from '@/assets/image/licence-b.png'
import demo5 from '@/assets/image/photo.png'


const state = {
  list:[
    {
      src:'',
      demo:'http://localhost:8080/src/assets/image/id-a.png',
      name:'身份证正面'
    },
    {
      src:'',
      demo:'http://localhost:8080/src/assets/image/id-b.png',
      name:'身份证反面'
    },
    {
      src:'',
      demo:demo3,
      name:'驾驶证正页'
    },
    {
      src:'',
      demo:demo4,
      name:'驾驶证副页'
    },
    {
      src:'',
      demo:demo5,
      name:'白底半身照'
    },
  ]
}
//同步改变
const mutations = {
  updateList(state, payload){
    state.list[payload.index].src = payload.src;
  }
}

export default {
  //命名空间
  namespaced: true,
  state,
  mutations
}