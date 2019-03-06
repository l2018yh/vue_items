<template>
  <!--底部-->
  <div class="toot">
    <ul class="foot_top">
      <li><a href="##">登录</a></li>
      <li><a href="##">注册</a></li>
      <li><a href="##">客户服务</a></li>
      <li><a href="##">返回顶部</a></li>
    </ul>
    <div class="foot_middle">
      <a href="##"><img src="../../assets/img/kh.png" alt=""></a>
      <a href="##"><img src="../../assets/img/inter.png" alt=""></a>
      <a href="##"><img src="../../assets/img/win.png" alt=""></a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "LoginRegist"
    }
</script>

<style scoped>
  /*底部*/
  .toot{
    width: 100%;
    background: #fff;
  }
  .foot_top{
    padding: .2rem;
    display: -webkit-flex;
    align-items: center;
    border-top: .5px solid #848689;
  }
  .foot_top li{
    width: 25%;
    text-align: center;
    border-right: .001rem solid #848689;
  }
  .foot_top li:last-of-type{
    border: none;
  }
  .foot_top a{
    display: block;
    font-size: .14rem;
    color: #848689;
  }
  .foot_middle{
    width: 100%;
    padding: .05rem 0;
    display: -webkit-flex;
    justify-content: space-around;
    align-items: center;
    border-top: .5px solid #848689;
    border-bottom: .5px solid #848689
  }
  .foot_middle a{
    width: .6rem;
    height: .6rem;
    display: block;
  }
  .foot_middle img{
    width: 100%;
    height: 100%;
  }
  .foot_bot{
    font-size: .08rem;
    color: #848689;
    text-align: center;
    padding: .1rem 0;
  }
</style>
