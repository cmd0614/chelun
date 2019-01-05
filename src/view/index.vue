<template>
  <div>
    <Upload />
  </div>
</template>

<script>
import Upload from '../components/upload'
//引入JSBridge
import JSBridge from '@/util/JSBridge.js';

export default {
  data () {
    return {
      
    }
  },
  methods: {
    //调用登录
    login(){
      JSBridge.invoke('app', 'login', {
        loginCallBackName: (res)=>{
          console.log('res...', res);
        }
      });
    }
  },
  components:{
    Upload
  }
  
}
</script>

<style lang="scss">

</style>

