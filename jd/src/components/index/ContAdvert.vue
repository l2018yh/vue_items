<template>
  <div>
      <!--轮播图-->
      <div class="swiper-container swiper-container1">
        <div class="swiper-wrapper">
          <div class="swiper-slide sp-img"><img src="../../assets/img/nav02.jpg" alt=""></div>
          <div class="swiper-slide sp-img"><img src="../../assets/img/nav03.jpg" alt=""></div>
          <div class="swiper-slide sp-img"><img src="../../assets/img/nav04.jpg" alt=""></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>

      <!--活动预告-->
      <div class="yugao">
        <a href="##"><img src="../../assets/img/hud.jpg" alt=""></a>
      </div>
  </div>
</template>

<script>
  import Swiper from "swiper"
    export default {
        name: "IndexAdvert",
      mounted() {
        new Swiper('.swiper-container1', {
          direction: 'horizontal', // 垂直切换选项
          loop: true, // 循环模式选项
          autoplay: true,
          pagination: {
            el: '.swiper-pagination',
          }
        })
      }
    }
</script>

<style scoped>
  /*轮播图*/
  .swiper-container1{
    width: 100%;
    height: 1.66rem;
  }
  .sp-img img{
    width: 100%;
    height: 100%;
  }
  /*活动预告*/
  .yugao{
    width: 100%;
    height:.39rem ;
  }
  .yugao a{
    width: 100%;
    height: .39rem;
  }
  .yugao img{
    width: 100%;
    height: 100%;
  }
</style>
<style>
  .swiper-container1 .swiper-pagination-bullet {
    width: 4px;
    height: 4px;
    border:1px solid #fff;
    opacity: 1;
    background: transparent;
  }
  .swiper-container1 .swiper-pagination-bullet-active {
    background: #fff;
  }
  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: -.2rem;
  }
</style>

