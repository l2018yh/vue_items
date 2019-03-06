<template>
    <div>
      <!--头部-->
      <header>
        <div class="head">
          <i class="iconfont icon-right" @click="goback"></i>
          <div class="h_middle">京东拼购</div>
          <img class="h_right" src="../../assets/img/dian.jpg" alt="">
        </div>
        <form class="head_middle">
          <input type="text" placeholder="四件套">
          <i class="iconfont icon-ICON-search"></i>
        </form>
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
        name: "PingHead",
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
  header {
    width: 100%;
    color: #898989;
    font-size: .14rem;
    background: #fff;
  }
  .head{
    width: 100%;
    height: .4rem;
    overflow:hidden;
    display: -webkit-flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #f0f0f0;
  }
  .icon-right{
    font-size: .16rem;
    color: #666;
    margin: 0 .14rem;
  }
  .h_middle{
    width: 70%;
    height: .3rem;
    font-size: .16rem;
    color: #333;
    border-radius: .14rem;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
  }
  .h_right{
    margin-right: .1rem;
  }
  .head_middle{
    width: 100%;
    background: #fff;
    /*height: .28rem;*/
    position: relative;
  }
  .icon-ICON-search{
    font-size: .12rem;
    padding:0 .15rem;
    color: #b6b6b6;
    position: absolute;
    top: .18rem;
    left: .15rem;
  }
  .head_middle input{
    height: .3rem;
    width: 95%;
    border-radius: .4rem;
    margin: .1rem;
    margin-bottom: 0;
    background: #f2f2f7;
    border: none;
    outline: none;
    text-indent: .4rem;
  }
  .head_middle input -webkit-input-placeholder{
    color: #666;
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
