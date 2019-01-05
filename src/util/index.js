import Cookie from 'js-cookie';

//判断用户是否登录
export let getToken = ()=>{
  return Cookie.get('chelun_acToken') || '';
}
