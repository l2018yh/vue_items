<template>
  <div>
    <!--公告-->
    <div class="kuaibao">
      <div class="kua_img">
        <img src="../../assets/img/5aa8935bN94e31ff6.jpg" alt="">
      </div>
      <div class="sw_kuabao">
        <div class="swiper-container swiper-container2">
          <div class="swiper-wrapper">
            <div class="swiper-slide sp-cont">
              <div class="hot_a"><span class="hot">HOT</span>CPU天梯来了，清楚的看到各个位置</div>
            </div>
            <div class="swiper-slide sp-cont">
              <div class="hot_a"><span class="hot">热门</span>CPU天梯来了，清楚的看到各个位置</div>

            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="more">
        更多
      </div>
    </div>
    <!--新人专享-->
    <div class="new_list">
      <a href="##"><img src="../../assets/img/xl.jpg" alt=""></a>
      <a href="##"><img src="../../assets/img/xp.jpg" alt=""></a>
      <a href="##"><img src="../../assets/img/xz.jpg" alt=""></a>
    </div>
    <!--秒杀-->
    <div class="miaosha">
      <div class="m_title">
        <p class="miao_left">
          <strong class="mi_tle">京东秒杀</strong><strong class="mi_time">20点场</strong>
        </p>

        <p class="miao_right">
          <a href="##">更多秒杀</a>
          <img src="../../assets/img/arrow_rt.jpg" alt="">
        </p>
      </div>
      <ul class="miao_shop">
        <li class="miao_li">
          <a href="##"><img src="../../assets/img/hw.jpg" alt=""></a>
          <strong class="miao_new_price">￥899</strong>
          <span class="miao_old_price">￥999</span>
        </li>
        <li class="miao_li">
          <a href="##"><img src="../../assets/img/hw.jpg" alt=""></a>
          <strong class="miao_new_price">￥899</strong>
          <span class="miao_old_price">￥999</span>
        </li>
        <li class="miao_li">
          <a href="##"><img src="../../assets/img/hw.jpg" alt=""></a>
          <strong class="miao_new_price">￥899</strong>
          <span class="miao_old_price">￥999</span>
        </li>
        <li class="miao_li">
          <a href="##"><img src="../../assets/img/hw.jpg" alt=""></a>
          <strong class="miao_new_price">￥899</strong>
          <span class="miao_old_price">￥999</span>
        </li>
        <li class="miao_li">
          <a href="##"><img src="../../assets/img/hw.jpg" alt=""></a>
          <strong class="miao_new_price">￥899</strong>
          <span class="miao_old_price">￥999</span>
        </li>
        <li class="miao_li">
          <a href="##"><img src="../../assets/img/hw.jpg" alt=""></a>
          <strong class="miao_new_price">￥899</strong>
          <span class="miao_old_price">￥999</span>
        </li>
        <li class="miao_li">
          <a href="##"><img src="../../assets/img/hw.jpg" alt=""></a>
          <strong class="miao_new_price">￥899</strong>
          <span class="miao_old_price">￥999</span>
        </li>
        <li class="miao_li">
          <a href="##"><img src="../../assets/img/hw.jpg" alt=""></a>
          <strong class="miao_new_price">￥899</strong>
          <span class="miao_old_price">￥999</span>
        </li>
      </ul>
    </div>

  </div>

</template>

<script>
    import Swiper from "swiper"
    export default {
        name: "ContKuaiNew",
        mounted(){
          new Swiper ('.swiper-container2', {
            direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay:true
          })        }
    }
</script>

<style scoped>
  /*公告*/
  .kuaibao{
    width: 100%;
    height: .34rem;
    display: -webkit-flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
  }
  .kuaibao .kua_img{
    width: 20%;
    margin-left: .1rem;
  }
  .kua_img img{
    width: 100%;
  }
  .sw_kuabao{
    width: 65%;
    height:.34rem;
  }
  .swiper-container2{
    height:.34rem ;
  }
  .sp-cont{
    line-height: .34rem;
  }
  .sp-cont .hot_a{
    width: 100%;
    font-size: .12rem;
    color: #3d3d3d;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: .05rem;
  }
  .sp-cont .hot{
    font-size: .12rem;
    color: #f55b5b;
    margin-right: .08rem;
  }
  .kuaibao .more{
    width: 8%;
    font-size: .12rem;
    color: #3d3d3d;
    margin-right:.12rem;
    padding-left: .05rem;
    border-left: .02rem solid #f5f5f5;
  }
  /*新人专享*/
  .new_list{
    width: 100%;
    overflow: hidden;
    padding: .1rem .02rem;
    background: #fff;
  }
  .new_list a{
    float: left;
  }
  .new_list a:nth-of-type(1){
    /*width: 2rem;*/
    width: 50%;
    height:1.2rem;
  }
  .new_list a:nth-of-type(2),.new_list a:nth-of-type(3){
    width: 24%;
    height: 1.2rem;
  }
  .new_list a:nth-of-type(2){
    margin: 0 .01rem;
    border-left: 2px solid #f0f0f0;
    border-right: 2px solid #f0f0f0;
  }
  .new_list img{
    width: 100%;
    height: 100%;
  }
  /*秒杀*/
  .miaosha{
    width: 100%;
    padding: .1rem 0;
    height: 1.3rem;
    background: #fff;
  }
  .m_title{
    height: .17rem;
    margin:0 .1rem;
    display: -webkit-flex;
    justify-content: space-between;
    align-items: center;
  }
  .miao_left,.miao_right{
    line-height: .2rem;
  }
  .miao_left .mi_tle{
    float: left;
    font-size: .16rem;
    color: #f02b2b;
    margin-right: .08rem;
  }
  .miao_left .mi_time{
    float: left;
    font-size: .13rem;
  }
  .miao_right a{
    float: left;
    font-size: .12rem;
    line-height: .12rem;
    color: #f02b2b;
    margin-right: .05rem;
    vertical-align: middle;
  }
  .miao_right img{
    width: .12rem;
    height: .12rem;
    line-height: .12rem;
    vertical-align: middle;
  }
  /*倒计时*/
  .time-item{
    font-size: .1rem;
    color: #dfdfdf;
    float: left;
  }
  .time-item strong{
    padding:0 .02rem;
    border: 1px solid #dfdfdf;
  }
  /*.time-item strong {*/
  /*background: #C71C60;*/
  /*color: #fff;*/
  /*!*line-height: 49px;*!*/
  /*line-height: .2rem;*/
  /*font-size: 36px;*/
  /*font-family: Arial;*/
  /*padding: 0 10px;*/
  /*margin-right: 10px;*/
  /*border-radius: 5px;*/
  /*box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);*/
  /*}*/

  /*#day_show {*/
  /*float: left;*/
  /*line-height: 49px;*/
  /*color: #c71c60;*/
  /*font-size: 32px;*/
  /*margin: 0 10px;*/
  /*font-family: Arial, Helvetica, sans-serif;*/
  /*}*/

  /*.item-title .unit {*/
  /*background: none;*/
  /*line-height: 49px;*/
  /*font-size: 24px;*/
  /*padding: 0 10px;*/
  /*float: left;*/
  /*}*/


  /*秒杀商品*/
  .miao_shop{
    display: -webkit-flex;
    flex-wrap: nowrap;
    overflow-x:auto ;
    flex-shrink: 0;
    margin-top: .1rem;
  }
  .miao_shop .miao_li{
    display: -webkit-flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }
  .miao_li a{
    width:.7rem;
    height: .7rem;
  }
  .miao_li img{
    width: 100%;
    height: 100%;
  }
  .miao_li .miao_new_price{
    margin-top: .06rem;
    line-height: .16rem;
    font-size: .14rem;
    color: #f02b2b;
  }
  .miao_li .miao_old_price{
    font-size: .12rem;
    color: #686868;
    text-decoration: line-through;
  }
</style>
