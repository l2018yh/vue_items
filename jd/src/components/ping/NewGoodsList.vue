<template>
  <ul class="new_pro_list">
    <li>
      <img src="../../assets/img/new01.jpg" alt="">
      <div class="pro_info">
        <div class="new_info">
          <p class="pro_minute">【康梦】新货夏威夷果连罐罐120g/250g/500g多规格可选零食特产坚果 120g一袋装【奶香味】
          </p>
          <p class="pro_label"><span>工厂直供</span><span class="pro_right">超值热卖</span></p>
        </div>
        <div class="pro_price">
          <div class="price_left">
            <p>2人拼&nbsp;<strong>￥8.80</strong></p>
            <p>已拼2622</p>
          </div>
          <div class="pro_open">
            去开团
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
    export default {
        name: "NewGoodsList"
    }
</script>

<style scoped>
  .pro_info{
    flex: 1;
  }
  /*上新商品详情*/
  .new_pro_list{
    width: 100%;
    background: #fff;
  }
  .new_pro_list li{
    display: -webkit-flex;
  }
  .new_pro_list img{
    width: 1.58rem;
    height: 1.58rem;
  }
  .pro_info{
    border-top: .01rem solid #f2f2f2;
    padding:.15rem;
  }
  .pro_minute{
    font-size: .12rem;
    color: #232326;
    font-weight: 500;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
  }
  .pro_label{
    font-weight: 500;
    font-size: .12rem;
    color: #999;
    line-height: .3rem;
    margin-left: .1rem;
  }
  .pro_label span{
    background: #f7f7f7;
  }
  .pro_right{
    margin-left: .2rem;
  }
  .pro_price{
    margin-top: .4rem;
    display: -webkit-flex;
    justify-content: space-between;
  }
  .price_left p:nth-of-type(1){
    font-size: .14rem;
    color: #e93b3d;
  }
  .price_left p:nth-of-type(2){
    font-size: .12rem;
    color: #e93b3d;
  }
  .pro_open{
    height:.3rem;
    margin-top: .06rem;
    color: #fff;
    font-size: .14rem;
    line-height: .3rem;
    padding:0 .2rem;
    border-radius: .15rem;
    background: -webkit-gradient(linear,left top,right top,from(#e93b3d),to(#ff9474));
    background: -webkit-linear-gradient(left,#e93b3d,#ff9474);
    background: linear-gradient(90deg,#e93b3d,#ff9474);
    box-shadow: 0 0.08rem 0.9rem rgba(233,59,61,.2);
  }
</style>
