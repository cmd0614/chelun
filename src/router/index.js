import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../App'

Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {
      path:'/list',
      component:List
    },
    {
      path:'*',
      redirect:'/list'
    }
  ]
})

export default router