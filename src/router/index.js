import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../App'
//引入
import {getToken} from '@/util/index'

import {goLogin} from '@/api/index'

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

router.beforeEach((to, from, next) => {
  if (getToken()) {
    next()
  } else {
    goLogin()
  }
})

router.afterEach((to,next) => {
  
})

export default router