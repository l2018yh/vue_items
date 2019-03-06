<template>
  <div>
    <!--头部-->
    <header class="car_head">
      <i class="iconfont icon-right" @click="goback"></i>
      <div class="h_middle">购物车<img src="../../assets/img/dingwei.png"/></div>
      <div class="head_right">
        <span>编辑</span><img class="h_right" src="../../assets/img/dian.jpg" alt="">
      </div>
    </header>
    <!--右侧点击导航-->
    <ul class="nav_li">
      <span class="sanjiao"></span>
      <li class="nav_list">
        <a href="##">
          <span></span>
          <strong>首页</strong>
        </a>
      </li>
      <li class="nav_list">
        <a href="##">
          <span></span>
          <strong>分类搜索</strong>
        </a>
      </li>
      <li class="nav_list">
        <a href="##">
          <span></span>
          <strong>购物车</strong>
        </a>
      </li>
      <li class="nav_list">
        <a href="##">
          <span></span>
          <strong>我的京东</strong>
        </a>
      </li>
      <li class="nav_list">
        <a href="##">
          <span></span>
          <strong>浏览记录</strong>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "VsCartsHeader",
        methods:{
          goback(){
            this.$router.go(-1)
          }
        },
        mounted(){
            $(".h_right").mouseover(function () {
              $(".nav_li").toggle();
            })
        }
    }
</script>

<style scoped>
  /*头部*/
  .car_head {
    /* height: .44rem; */
    width: 100%;
    color: #898989;
    font-size: .14rem;
    display: -webkit-flex;
    align-items: center;
    justify-content: space-between;
    padding: .1rem 0;
    background: #fff;
  }
  .icon-right{
    font-size: .16rem;
    color: #666;
    margin: 0 .14rem;
  }
  .h_middle img{
    width: .14rem;
    height: .16rem;
    margin-left: .08rem;
    float: right;
  }
  .head_right span{
    float: left;
    margin-right: .1rem;
  }
  .h_right{
    margin: .08rem .05rem 0 0;
  }
  .nav_list a{
    display: block;
    width: 100%;
    line-height: .4rem;
    font-size: .14rem;
    color: #fff;
    display: -webkit-flex;
  }
  .nav_list span{
    display: block;
    width: .4rem;
    height: .4rem;
    margin: .01rem;
    background: url(../../assets/img/in.jpg) no-repeat;
  }
  /*右侧点击导航*/
  .nav_li{
    width: 1.25rem;
    background: rgba(0,0,0,.9);
    position: absolute;
    right: .1rem;
    top: .53rem;
    z-index: 10;
    border-radius: .05rem;
    display: none;
  }
  .sanjiao{
    float: right;
    position: absolute;
    top: -.1rem;
    right: .1rem;
    width: 0;
    height: 0;
    border:5px solid transparent;
    border-bottom-color: rgba(0,0,0,.9);
  }
  .nav_list{
    height: .4rem;
    border-bottom: 1px solid hsla(0,0%,100%,.2)
  }
  .nav_list a{
    display: block;
    width: 100%;
    line-height: .4rem;
    font-size: .14rem;
    color: #fff;
    display: -webkit-flex;
  }
  .nav_list span{
    display: block;
    width: .4rem;
    height: .4rem;
    margin: .01rem;
    background: url(../../assets/img/in.jpg) no-repeat;
  }
</style>
