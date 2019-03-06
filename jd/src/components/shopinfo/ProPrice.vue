<template>
    <div>
      <!--商品简介 价格-->
      <p class="info_title baitiao">
        <span class="info_left">秋水伊人羽绒服2018冬装新款女装简约保暖毛领韩版白鸭绒外套女 粉橘 160/84A/meta</span>
        <span class="info_guan"><i></i>关注</span>
      </p>
      <p class="info_price ">
        <span>￥<strong>1399</strong>.00</span>
        <span>降价提醒</span>
      </p>
      <p class="baitiao">
        <span class="bt_tle">白条</span>
        <span>激活白条新用户得百元礼包</span>
        <span class="right_img"><img src="../../assets/img/dian.jpg" alt=""></span>
      </p>
      <p class="baitiao">
        <span class="bt_tle">领券</span>
        <span class="manjia"><img src="../../assets/img/maj.jpg">共四张</span>
        <span class="right_img"><img src="../../assets/img/dian.jpg" alt=""></span>
      </p>
      <p class="baitiao">
        <span class="bt_tle">促销</span>
        <span class="manjia"><i>满减</i>满299元减50元，满599减100元，满700元减</span>
        <span class="right_img"><img src="../../assets/img/dian.jpg" alt=""></span>
      </p>
      <div class="yixuan"></div>
      <p class="baitiao">
        <span class="bt_tle">已选</span>
        <span class="manjia guige">粉橘，160/84A/M,1个</span>
        <span class="right_img"><img src="../../assets/img/dian.jpg" alt=""></span>
      </p>
      <div class="yixuan"></div>
    </div>
</template>

<script>
    export default {
        name: "ProPrice"
    }
</script>

<style scoped>
  .info_title{
    height: .4rem;
    font-size: .16rem;
    color: #333;
    display: -webkit-flex;
  }
  .info_guan{
    width: .5rem;
    font-size: .12rem;
    text-align: center;
    border-left: .01rem solid #f0f0f0;
  }
  .info_title span:nth-child(1){
    width: 85%;
    overflow: hidden;
  }
  .info_guan i{
    display: block;
    width: .25rem;
    height: .2rem;
    margin-left: .15rem;
    background:url(../../assets/img/font.jpg) no-repeat;
  }
  .info_price{
    font-size: .12rem;
    background: #fff;
    display: -webkit-flex;
    justify-content: space-between;
    padding: .08rem .1rem;

  }
  .info_price span{
    display: block;
  }
  .info_price span:nth-child(1){
    color:#e4393c;
  }
  .info_price span:nth-child(2){
    font-weight: 600;
    color: #666;
    padding: .02rem ;
    border: 1px solid #898989;
  }
  .baitiao{
    padding: .15rem .1rem;
    display: -webkit-flex;
    font-size: .12rem;
    color: #333;
    position: relative;
    border-top: 1px solid #eee;
    background: #fff;
  }
  .baitiao .bt_tle{
    color: #999;
    margin-right: .15rem;
  }
  .baitiao .right_img{
    position: absolute;
    top: .18rem;
    right: .1rem;
  }
  .manjia{
    width: 77%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .manjia img{
    float: left;
  }
  .manjia i{
    float: left;
    font-style: normal;
    margin-right: .02rem;
    padding: 0 .02rem;
    border: 1px solid #e4393c;
    color: #e4393c;
  }
  .yixuan{
    border-top: .1rem solid #e8e8ed;
  }
  .guige{
    font-size: .12rem;
    color: #666;
  }
  .guige i{
    border: none;
    font-size: .12rem;
  }

</style>
