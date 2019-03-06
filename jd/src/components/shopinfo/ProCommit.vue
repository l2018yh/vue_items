<template>
  <!-- 好评 -->
  <div class="goods_assess">
    <div class="assess_title">
      <div class="assess_left">
        <h4>评价</h4>
        <span class="haop">好评98%</span>
      </div>
      <div class="assess_right">
        <span>共  200+  条</span>
        <img class="right_img" src="../../assets/img/02.png" alt="">
      </div>
    </div>
    <div class="assess_grade">
      <div class="ass_gred_list">
        <span>好评(200+)</span>
        <span>中评(2)</span>
        <span>差评(1)</span>
        <span>有图(10+)</span>
        <span>简洁漂亮(2)</span>
        <span>美丽大方(1)</span>
        <span>有图(10+)</span>
        <span>简洁漂亮(2)</span>
        <span>美丽大方(1)</span>
      </div>
      <div class="assess_part">
        <div class="part_title">
          <p class="part_left">
            <span class="part_tle">j***v</span>
            <img src="../../assets/img/hxin.jpg" alt="">
            <img src="../../assets/img/hxin.jpg" alt="">
            <img src="../../assets/img/hxin.jpg" alt="">
            <img src="../../assets/img/hxin.jpg" alt="">
          </p>
          <span class="part_tle">2019-1-17</span>

        </div>
        <div class="part_content">
          双十一的活动还是挺不错，买了4件，都很好，最后一件昨天到了，都是顺丰寄来的，服务不错，衣服更好，下雪了，就可以穿这件羽绒服喽，发现秋水伊人的衣服真好啊
        </div>
      </div>
      <div class="assess_part">
        <div class="part_title">
          <p class="part_left">
            <span class="part_tle">j***v</span>
            <img src="../../assets/img/hxin.jpg" alt="">
            <img src="../../assets/img/hxin.jpg" alt="">
            <img src="../../assets/img/hxin.jpg" alt="">
            <img src="../../assets/img/hxin.jpg" alt="">
          </p>
          <span class="part_tle">2019-1-17</span>

        </div>
        <div class="part_content">
          双十一的活动还是挺不错，买了4件，都很好，最后一件昨天到了，都是顺丰寄来的，服务不错，衣服更好，下雪了，就可以穿这件羽绒服喽，发现秋水伊人的衣服真好啊
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ProCommit"
    }
</script>

<style scoped>
  /* 好评 */
  .goods_assess{
    width: 100%;
    background: #fff;
  }
  .assess_part{
    padding-bottom: .15rem;
    border-bottom: 1px solid #f0f0f0;
  }
  .assess_title{
    margin: 0 .1rem;
    padding: .1rem 0;
    display: -webkit-flex;
    justify-content: space-between;
    border-bottom: 1px solid #f0f0f0;
  }
  .assess_left {
    display: -webkit-flex;
  }
  .assess_left h4{
    font-weight: 400;
    font-size: .14rem;
    color: #333;
  }
  .haop{
    display:block;
    font-size: .13rem;
    color: #e4393c;
    margin-left: .15rem;
  }
  .assess_right{
    font-weight: 400;
    font-size: .13rem;
    color: #333;
    display: -webkit-flex;
  }
  .assess_right span{
    display: block;
  }
  .assess_right img{
    width: .15rem;
    height: .15rem;
    margin-left: .1rem;
  }
  .assess_grade{
    padding: .1rem;
    background: #fff;
  }
  .ass_gred_list{
    display: -webkit-flex;
    flex-wrap: wrap;
  }
  .ass_gred_list span{
    color: #666;
    font-size: .1rem;
    padding: .05rem .02rem;
    display: block;
    background: #fdf0f0;
    margin: .05rem;

  }
  .part_title{
    display: -webkit-flex;
    padding: .1rem 0 .05rem;
    justify-content: space-between;
  }
  .part_left{
    display: -webkit-flex;
  }
  .part_tle{
    font-size: .12rem;
    color: #999;
    display:block;
  }

  .part_left img{
    width: .12rem;
    height: .12rem;
    margin-left: .05rem;
  }
  .part_content{
    color: #333;
    font-size: .12rem;
  }
</style>
