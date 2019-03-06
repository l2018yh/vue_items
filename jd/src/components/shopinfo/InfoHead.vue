<template>
  <!--头部-->
  <header>
    <i class="iconfont icon-right" @click="goback"></i>
    <div class="h_middle">
      <a class="action" href="##">商品<img src="../../assets/img/06.png"/></a>
      <a href="##">评价</a>
      <a href="##">详情</a>
      <a href="##">推荐</a>
    </div>
    <div class="head_right">
      <img class="h_right" src="../../assets/img/dian.jpg" alt="">
    </div>
  </header>
</template>

<script>

    export default {
        name: "InfoHead",
        methods:{
          goback(){
            this.$router.go(-1)
          }
        }
    }
</script>

<style scoped>
  /*头部*/
  header {
    width: 100%;
    display: -webkit-flex;
    align-items: center;
    color: #898989;
    font-size: .14rem;
    justify-content: space-between;
    padding: .1rem 0;
    background: #fff;
  }
  .icon-right{
    font-size: .16rem;
    color: #666;
    margin: 0 .14rem;
  }
  .h_middle a{
    float: left;
    color: #252525;
    font-size: .14rem;
    margin:0 .05rem
  }
  .action{
    color: #e4393c;
  }
  .h_middle img{
    width: .08rem;
    height: .14rem;
    margin-right: .05rem;
    margin-top: .03rem;
    float: left
  }
  .head_right span{
    float: left;
    margin-right: .1rem;
  }
  .h_right{
    margin: .08rem .05rem 0 0;
  }
</style>
