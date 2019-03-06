<template>
  <!--头部-->
  <header>
    <i class="iconfont icon-menu"></i>
    <div class="h_middle">
      <img src="../../assets/img/logo.png" alt="">
      <i class="iconfont icon-ICON-search"></i>手机</div>
    <div class="h_lr"><a href="##" @click="gologin">登录</a></div>
  </header>

</template>

<script>
    export default {
        name: "IndexHead",
        methods:{
          gologin(){
            this.$router.push({path:"/login"})
          }
        }
    }
</script>

<style scoped>
  header {
    height: .44rem;
    width: 100%;
    color: #898989;
    font-size: .14rem;
    display: -webkit-flex;
    align-items: center;
    justify-content: space-between;
    /*background: #e43130;*/
    /*background: transparent;*/
    position: absolute;
    top: 0;
    left: 0;
    z-index: 200;
  }
  /*.head{*/
    /*background: #e43130;*/
  /*}*/
  .icon-menu,.h_lr a{
    font-size: .16rem;
    color: #fff;
    margin: 0 .14rem;
  }
  .icon-menu{
    font-size: .22rem;
  }
  .h_middle{
    width: 70%;
    height: .3rem;
    background: #fff;
    border-radius: .14rem;
    display: -webkit-flex;
    align-items: center;
  }
  .h_middle img{
    width: .2rem;
    height: .15rem;
    margin-left: .15rem;
    margin-right: .05rem;
  }
  .icon-ICON-search{
    font-size: .12rem;
    border-left: 2px solid #b6b6b6;
    padding:0 .1rem;
    color: #b6b6b6;
  }
</style>
