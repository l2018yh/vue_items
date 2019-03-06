<template>
    <div>
      <!--拼购产品-->
      <div class="ping_product">
        <div class="jing act jing_pro">
          <a href="##"><span>精选</span></a>
        </div>
        <ul class="ping_title">
          <li class="jing"><a href="##"><span>精选</span></a></li>
          <li class="jing"><a href="##"><span>精选</span></a></li>
          <li class="jing"><a href="##"><span>精选</span></a></li>
          <li class="jing"><a href="##"><span>精选</span></a></li>
          <li class="jing"><a href="##"><span>精选</span></a></li>
          <li class="jing"><a href="##"><span>精选</span></a></li>
          <li class="jing"><a href="##"><span>精选</span></a></li>
          <li class="jing"><a href="##"><span>精选</span></a></li>
          <li class="jing"><a href="##"><span>精选</span></a></li>
          <li class="jing"><a href="##"><span>精选</span></a></li>
        </ul>
        <!--轮播图-->
        <div class="swiper-container swiper-container1">
          <div class="swiper-wrapper">
            <div class="swiper-slide sp-img">
              <img src="../../assets/img/nav02.jpg" alt="">
            </div>
            <div class="swiper-slide sp-img">
              <img src="../../assets/img/nav03.jpg" alt="">
            </div>
            <div class="swiper-slide sp-img">
              <img src="../../assets/img/nav04.jpg" alt="">
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
</template>

<script>
  import Swiper from "swiper"
    export default {
        name: "pingType",
        mounted(){
          new Swiper ('.swiper-container1', {
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay:true,
            pagination: {
              el: '.swiper-pagination',
            },
          })
        }
    }
</script>

<style scoped>
  /*拼购产品*/
  .ping_product{
    width: 100%;
    background: #fff;
  }
  .jing_pro{
    float: left;
    width: .5rem;
    margin-bottom: .005rem;
    border-right: 1px solid #e9e8e6;
  }
  .jx{
    padding-right: .08rem;
    padding-top: 0;
  }
  .jing a{
    display: block;
    padding: .05rem .1rem 0;
  }
  .jing a span{
    width: .3rem;
    float: left;
    color: #696969;
    font-size: .14rem;
    line-height: .3rem;
    padding-bottom: .05rem;
  }

  .ping_title{

    display: -webkit-flex;
    /*justify-content: space-between;*/
    flex-wrap: nowrap;
    overflow-x: auto;
    flex-shrink: 0;
    background: #fff;
  }
  .ping_title li{
    width: .5rem;
    text-align: center;
  }
  .act a span{
    display: block;
    color: #e93b3d;
    border-bottom: 1px solid #e93b3d;
  }
  /*轮播图*/
  .swiper-container1{
    width: 100%;
    height: 1.05rem;
  }
  .sp-img img{
    width: 100%;
    height: 100%;
  }
</style>
<style>

  .swiper-container1 .swiper-pagination-bullet {
    width: 4px;
    height: 4px;
    /*border:1px solid #fff;*/
    opacity: 1;
    background: #fff;
  }
  .swiper-container1 .swiper-pagination-bullet-active {
    width: 10px;
    height: 4px;
    background: red;
    border-radius: 2px;
  }
  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: -.2rem;
  }
</style>
