<template>
  <div class="else_way">
    <p class="qita">其他登录方式</p>
    <div class="login_way">
      <a href="##">
        <i class="iconfont icon-QQ"></i>
        <span>QQ</span>
      </a>
      <a href="##">
        <i class="iconfont icon-weixin"></i>
        <span>微信</span>
      </a>
    </div>
    <div class="xiyi">
      登录即代表您已同意<a href="##">京东隐私政策</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "LoginWay"
    }
</script>

<style scoped>
  /*其他登录方式*/
  .else_way{
    margin-top: .88rem;
    border-top: 2px solid #f0f0f0;
    position: relative;
    text-align: center;
  }
  .else_way .qita{
    font-size: .14rem;
    color: #d3d3d3;
    position: absolute;
    top:-.14rem;
    padding:.05rem .15rem;
    left: 35%;
    background: #fff;
  }
  .login_way{
    height: .8rem;
    display: -webkit-flex;
    justify-content: center;
    margin-top:.245rem;
  }
  .login_way a{
    position: relative;
    width: .48rem;
    height: .48rem;
    color: #616161;
    border-radius: 50%;
    margin: 0 .15rem;
    font-size: .14rem;
  }
  .login_way a:nth-of-type(1){
    background: #e7f7fe;
  }
  .login_way a:nth-of-type(1) .icon-QQ{
    color: #07b2f4;
    position: absolute;
    left: .15rem;
    top: .15rem;
  }
  .login_way a:nth-of-type(1) span{
    position: absolute;
    left: .12rem;
    top: .5rem;
  }
  .login_way a:nth-of-type(2){
    background: #e6f8e6;
  }
  .login_way a:nth-of-type(2) .icon-weixin{
    color: #08bb06;
    position: absolute;
    left: .15rem;
    top: .15rem;
  }
  .login_way a:nth-of-type(2) span{
    position: absolute;
    left: .12rem;
    top: .5rem;
  }
  .xiyi{
    font-size:.16rem;
    color: #616161;
    magin-top:.12rem;
  }
  .xiyi a{
    font-size: .16rem;
    color: #68b2ff;
  }
</style>
