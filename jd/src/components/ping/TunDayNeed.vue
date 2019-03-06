<template>
    <div>
      <!--今日必拼-->
      <div class="need_ping">
        <div class="miaosha">
          <div class="m_title">
            <p class="miao_left">
              <strong class="mi_tle">今日必拼</strong><span class="mi_time">距离本场结束</span>
            </p>
            <p class="miao_right">
              <a href="##">查看更多</a>
              <img src="../../assets/img/02.png" alt="">
            </p>
          </div>
          <!--轮播图-->
          <div class="swiper-container swiper-container2">
            <div class="swiper-wrapper">
              <div class="swiper-slide miao_shop">
                <div class="miao_li">
                  <a href="##"><img src="../../assets/img/shashop01.png" alt=""></a>
                  <p class="miao_new_price"><span>2</span>人拼<strong class="">￥4.90</strong></p>
                  <span class="miao_old_price">已拼1.5万件</span>
                </div>
                <div class="miao_li">
                  <a href="##"><img src="../../assets/img/shashop01.png" alt=""></a>
                  <p class="miao_new_price"><span>2</span>人拼<strong class="">￥4.90</strong></p>
                  <span class="miao_old_price">已拼1.5万件</span>
                </div>
                <div class="miao_li">
                  <a href="##"><img src="../../assets/img/shashop01.png" alt=""></a>
                  <p class="miao_new_price"><span>2</span>人拼<strong class="">￥4.90</strong></p>
                  <span class="miao_old_price">已拼1.5万件</span>
                </div>
              </div>
              <div class="swiper-slide miao_shop">
                <div class="miao_li">
                  <a href="##"><img src="../../assets/img/shashop01.png" alt=""></a>
                  <p class="miao_new_price"><span>2</span>人拼<strong class="">￥4.90</strong></p>
                  <span class="miao_old_price">已拼1.5万件</span>
                </div>
                <div class="miao_li">
                  <a href="##"><img src="../../assets/img/shashop01.png" alt=""></a>
                  <p class="miao_new_price"><span>2</span>人拼<strong class="">￥4.90</strong></p>
                  <span class="miao_old_price">已拼1.5万件</span>
                </div>
                <div class="miao_li">
                  <a href="##"><img src="../../assets/img/shashop01.png" alt=""></a>
                  <p class="miao_new_price"><span>2</span>人拼<strong class="">￥4.90</strong></p>
                  <span class="miao_old_price">已拼1.5万件</span>
                </div>
              </div>
              <div class="swiper-slide miao_shop">
                <div class="miao_li">
                  <a href="##"><img src="../../assets/img/shashop01.png" alt=""></a>
                  <p class="miao_new_price"><span>2</span>人拼<strong class="">￥4.90</strong></p>
                  <span class="miao_old_price">已拼1.5万件</span>
                </div>
                <div class="miao_li">
                  <a href="##"><img src="../../assets/img/shashop01.png" alt=""></a>
                  <p class="miao_new_price"><span>2</span>人拼<strong class="">￥4.90</strong></p>
                  <span class="miao_old_price">已拼1.5万件</span>
                </div>
                <div class="miao_li">
                  <a href="##"><img src="../../assets/img/shashop01.png" alt=""></a>
                  <p class="miao_new_price"><span>2</span>人拼<strong class="">￥4.90</strong></p>
                  <span class="miao_old_price">已拼1.5万件</span>
                </div>
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>
        </div>
    </div>
      <!--拼团商品-->
      <ul class="yard_list">
        <li class="yard_li_show">
          <strong class="life_t">
            <span class="life_title">9.9元</span>拼
          </strong>
          <ul class="ping_list">
            <li class="ping_li">
              <a href="##"><img src="../../assets/img/shashop01.png" alt=""></a>
              <p class="ping_new_price">￥<strong>9.9</strong><span class="ping_old_price">￥55</span></p>
              <span class="ping_jian">已拼1.5万件</span>
            </li>
            <li class="ping_li">
              <a href="##"><img src="../../assets/img/shashop01.png" alt=""></a>
              <p class="ping_new_price">￥<strong>9.9</strong><span class="ping_old_price">￥55</span></p>
              <span class="ping_jian">已拼1.5万件</span>
            </li>
          </ul>
        </li>
        <li class="yard_li_show ping_li_show">
          <strong class="life_t">
            <span class="life_title">9.9元</span>拼
          </strong>
          <ul class="ping_list">
            <li class="ping_li">
              <a href="##"><img src="../../assets/img/shashop01.png" alt=""></a>
              <p class="ping_new_price">￥<strong>9.9</strong><span class="ping_old_price">￥55</span></p>
              <span class="ping_jian">已拼1.5万件</span>
            </li>
            <li class="ping_li">
              <a href="##"><img src="../../assets/img/shashop01.png" alt=""></a>
              <p class="ping_new_price">￥<strong>9.9</strong><span class="ping_old_price">￥55</span></p>
              <span class="ping_jian">已拼1.5万件</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
</template>

<script>
    import Swiper from "swiper"
    export default {
        name: "TunDayNeed",
        mounted(){
          new Swiper ('.swiper-container2', {
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
  /*今日必拼*/
  .need_ping{
    width: 100%;
  }
  .miaosha{
    height: 2rem;
    width: 92%;
    padding:.15rem .15rem 0;
    overflow: hidden;
    background: url(../../assets/img/pbg.png) no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }
  .m_title{
    height: .17rem;
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
    display: block;
    color: #999;
    font-size: .13rem;
  }
  .miao_right a{
    float: left;
    font-size: .12rem;
    line-height: .12rem;
    color: #999;
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
  /*拼团商品*//*轮播图*/
  .swiper-container2{
    width: 100%;
    padding-bottom:.12rem;
    height: 1.65rem;
  }
  .miao_shop{
    display: -webkit-flex;
    flex-wrap: nowrap;
    flex-shrink: 0;
    margin-top: .1rem;
    overflow: hidden;
  }
  .miao_shop .miao_li{
    width: 30%;
    padding: .05rem;
    display: -webkit-flex;
    flex-direction: column;
    align-items: center;
  }
  .miao_li a{
    width:1.08rem;
    height: 1.08rem;
  }
  .miao_li img{
    width: 100%;
    height: 100%;
  }
  .miao_li .miao_new_price{
    margin-top: .06rem;
    line-height: .16rem;
    font-size: .12rem;
    color: #f02b2b;
  }
  .miao_new_price span{
    /*display: block;*/
  }
  .miao_new_price strong{
    font-size: .14rem;
    color: #f02b2b;
    margin-left: .05rem;
  }
  .miao_li .miao_old_price{
    /*display: block;*/
    font-size: .12rem;
    color: #686868;
    line-height: .22rem;
  }
  /*拼购商品列表*/
  .yard_list{
    display: -webkit-flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    flex-wrap: wrap;
  }
  .yard_li_show{
    margin:.02rem 0;
    width: 44.3%;
    padding:.08rem .1rem;
    background: url(../../assets/img/pbg01.png);
    -webkit-background-size: 100%;
    background-size: 100%;
  }
  .ping_li_show{
    background: url(../../assets/img/pbgright.png);
    -webkit-background-size: 100%;
    background-size: 100%;
  }
  .life_t{
    display: block;
    font-size: .14rem;
    font-weight: 800;
  }
  .life_title{
    color: #e93b3d;
  }
  .ping_list{
    width: 100%;
    display: -webkit-flex;
    justify-content: space-between;
    padding:.02rem;
    align-items: center;
  }
  .ping_li{
    width: 46%;
  }
  .ping_li a{
    float: left;
    width: .76rem;
    height: .76rem;
    margin: .1rem 0;
  }
  .ping_li img {
    width: 100%;
    height: 100%;
  }
  .ping_new_price{
    font-size: .14rem;
    color: #e93b3d;
  }
  .ping_old_price{
    float: right;
    margin-right: .08rem;
    font-size: .1rem;
    color: #999;
    text-decoration: line-through;
  }
  .ping_jian{
    display: block;
    font-size: .12rem;
    color: #999;
  }
</style>
<style>
  .swiper-container2 .swiper-pagination-bullet {
    width: 4px;
    height: 4px;
    opacity: 1;
    background:rgba(0,0,0,.2) ;
  }
  .swiper-container2 .swiper-pagination-bullet-active {
    width: 10px;
    height: 4px;
    background: rgba(0,0,0,.5);
    border-radius: 2px;
  }
  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: -.25rem;
  }
</style>

