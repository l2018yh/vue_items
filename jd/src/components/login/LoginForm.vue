<template>
  <form class="login" action="">
    <p class="user"><input type="text" placeholder="用户名/邮箱/已验证手机"></p>
    <p class="pass">
      <input type="text" placeholder="请输入密码">
      <span><i class="iconfont icon-yincang1"></i> <a href="##">忘记密码</a></span></p>
    <p><input  class="login_btn" type="button" value="登录"></p>
    <p><input class="login_btn login_btn_one" type="button" value="一键登录"></p>
    <p class="login_reg">
      <a href="##">短信验证码登录</a><a href="##">手机快速注册</a>
    </p>
  </form>
</template>

<script>
    export default {
        name: "LoginForm"
    }
</script>

<style scoped>
  .user,.pass{
    height: .5rem;
    margin-top: .2rem;
    width: 100%;
    border-bottom: 1px solid #f1f1f1;
    display: -webkit-flex;
    justify-content: space-between;
  }
  .user input{
    width: 100%;
  }
  .user input,.pass input{
    border: none;
    outline: none;
  }
  .user input::-webkit-input-placeholder,.pass input::-webkit-input-placeholder{
    color:#9f9f9f;
    font-size: .16rem;
    line-height: .26rem;
  }
  .pass span{
    display: -webkit-flex;
    align-items: center;
  }
  .pass span a{
    font-size: .14rem;
    color: #6a6a6a;
    border-left: 2px solid #f1f1f1;
    padding-left:.12rem;
    margin-left: .12rem;
  }
  .icon-yincang1{
    color: #c4c4c4;
  }
  .login_btn{
    font-size:.16rem;
    width: 100%;
    height: .42rem;
    background: #fcb7b3;
    color: #fff;
    display: block;
    border:none;
    outline: none;
    margin-top: .3rem;
    border-radius: .18rem;
  }
  .login_btn_one{
    margin-top:.08rem;
    border: 2px solid #ff4024;
    background: #fff;
    color: #f43131;
  }
  .login_reg{
    margin-top: .2rem;
    display: -webkit-flex;
    justify-content: space-between;
  }
  .login_reg a{
    color: #9f9f9f;
    font-size: .14rem;
  }
</style>
