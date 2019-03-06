<template>
  <!-- 店铺名称 等级-->
  <div class="shopname">
    <div class="shop_grade">
      <div class="shop_name_tle">
        <img class="shop_logo" src="../../assets/img/qiu.jpg" alt="">
        <div class="snt">
          <h4>秋水伊人官方旗舰店</h4>
          <span class="shop_xinji">店铺星级<img src="../../assets/img/xixi.png" alt=""><img src="../../assets/img/xixi.png" alt=""><img src="../../assets/img/xixi.png" alt=""><img src="../../assets/img/xixi.png" alt=""><img src="../../assets/img/xixi.png" alt=""></span>
        </div>
      </div>
      <div class="shop_grade_num">
        <div class="title_item title_si">
          <h4>450670</h4>
          <span class="shop_xinji">粉丝人数</span>
        </div>
        <div class="title_item">
          <h4>1720</h4>
          <span class="shop_xinji">全部商品</span>
        </div>
        <ul class="grade_list">
          <li>
            <span class="shop_xinji">评价</span>
            <span class="xinji_num">9.19  |  高</span>
          </li>
          <li>
            <span class="shop_xinji">评价</span>
            <span class="xinji_num">9.19  |  高</span>
          </li>
          <li>
            <span class="shop_xinji">评价</span>
            <span class="xinji_num">9.19  |  高</span>
          </li>
        </ul>
      </div>
      <ul class="guanzhi_shop">
        <li>
          <img src="../../assets/img/03.png" alt="">
          <h4>关注店铺</h4>
        </li>
        <li>
          <img src="../../assets/img/03.png" alt="">
          <h4>进入店铺</h4>
        </li>
      </ul>
    </div>
    <div class="yixuan"></div>
  </div>
</template>

<script>
    export default {
        name: "ProShopInfo"
    }
</script>

<style scoped>
  /* 店铺名称 等级  */
  .shop_grade{
    padding: .1rem;
    background: #fff;
  }
  .shop_name_tle{
    display: -webkit-flex;
  }
  .shop_logo{
    width: .9rem;
    height: .3rem;
    border: 1px solid #f0f0f0;
    margin-right: .1rem;
  }
  .snt h4,.title_item h4,.guanzhi_shop h4{
    font-weight: 400;
    font-size: .14rem;
    color: #333;
  }
  .shop_xinji{
    display: block;
    font-size: .1rem;
    color: #666;
    display: -webkit-flex;
  }
  .shop_xinji img{
    width: .1rem;
    height: .1rem;
  }
  .shop_grade_num{
    display: -webkit-flex;
    justify-content: space-between;
  }
  .title_item{
    margin:.15rem .25rem;
  }
  .title_si{
    padding-right: .3rem;
    border-right: 1px solid #f0f0f0;
  }
  .grade_list{

    margin-top: .15rem;
  }
  .grade_list li{
    display: -webkit-flex;
  }
  .xinji_num{
    float: right;
    font-size: .1rem;
    color: #e4393c;
    margin-left: .05rem;
  }
  .guanzhi_shop{
    display: -webkit-flex;
    justify-content: space-between;
    align-items: center;
  }
  .guanzhi_shop li{
    width: 40%;
    padding:.05rem .15rem;
    border: 1px solid #f0f0f0;
    display: -webkit-flex;
    justify-content: center;
    align-content: center;
  }
  .guanzhi_shop img{
    width: .13rem;
    height: .13rem;
    margin-right: .05rem;
  }
  .yixuan{
    border-top: .1rem solid #e8e8ed;
  }
</style>
