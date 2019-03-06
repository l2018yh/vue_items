<template>
  <!-- 猜你喜欢 -->
  <div class="guess">
    <div class="yixuan"></div>
    <h4>猜你喜欢</h4>
    <!--轮播图-->
    <div class="swiper-container swiper-container2">
      <div class="swiper-wrapper">
        <div class="swiper-slide guess_img">
          <img src="../../assets/img/lunbo02.jpg" alt="">
          <img src="../../assets/img/lunbo02.jpg" alt="">
          <img src="../../assets/img/lunbo02.jpg" alt="">
          <img src="../../assets/img/lun01.jpg" alt="">
          <img src="../../assets/img/lun01.jpg" alt="">
          <img src="../../assets/img/lun01.jpg" alt="">
          <img src="../../assets/img/lunbo02.jpg" alt="">
          <img src="../../assets/img/lunbo02.jpg" alt="">
          <img src="../../assets/img/lun01.jpg" alt="">
        </div>
        <div class="swiper-slide guess_img">
          <img src="../../assets/img/lunbo02.jpg" alt="">
          <img src="../../assets/img/lunbo02.jpg" alt="">
          <img src="../../assets/img/lunbo02.jpg" alt="">
          <img src="../../assets/img/lun01.jpg" alt="">
          <img src="../../assets/img/lun01.jpg" alt="">
          <img src="../../assets/img/lun01.jpg" alt="">
          <img src="../../assets/img/lunbo02.jpg" alt="">
          <img src="../../assets/img/lunbo02.jpg" alt="">
          <img src="../../assets/img/lun01.jpg" alt="">

        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper"
    export default {
        name: "GuessYouLike",
        mounted(){
          new Swiper ('.swiper-container2', {
            direction: 'horizontal', // 垂直切换选项
            // loop: true, // 循环模式选项
            autoplay:true,
            pagination: {
              el: '.swiper-pagination',
            },
          })
        }
    }
</script>

<style scoped>
  /* 猜你喜欢 */
  .guess{
    background: #fff;
    padding-bottom: .1rem;
  }
  .guess h4{
    font-weight: 400;
    font-size: .13rem;
    color: #333;
    padding: .1rem;
  }
  /*轮播图*/
  .swiper-container2{
    width: 100%;
    height: 3.98rem;
  }
  .guess_img{
    display: -webkit-flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-shrink: 0;
  }
  .guess_img img{
    width:1.22rem;
    height: 1.22rem;
  }
  .yixuan{
    border-top: .1rem solid #e8e8ed;
  }
</style>
<style>
  .swiper-container2 .swiper-pagination-bullet {
    width: 3.5px;
    height: 3.5px;
    opacity: .8;
    background: #898989;
  }
  .swiper-container2 .swiper-pagination-bullet-active {
    width:8px;
    height: 4px;
    border-radius: 2px;
    background: #666;
  }
  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: -.24rem;
  }
</style>
