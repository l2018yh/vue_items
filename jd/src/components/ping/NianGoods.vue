<template>
  <!--平价年货-->
  <div class="pingjia">
    <div class="pingjia_img">
      <img src="../../assets/img/nianhuo.jpg" alt="">
    </div>
    <ul class="miao_shop pingjia_list">
      <li class="miao_li">
        <a href="##"><img src="../../assets/img/shashop01.png" alt=""></a>
        <h2>千丝 肉松饼整箱500g 厦门闽南特产小吃好吃的早餐糕点心下午茶点美食面包饼干网红零食品批发</h2>
        <p class="miao_new_price"><span>2</span>人拼<strong class="">￥4.90</strong></p>
      </li>
      <li class="miao_li">
        <a href="##"><img src="../../assets/img/shashop01.png" alt=""></a>
        <h2>千丝 肉松饼整箱500g 厦门闽南特产小吃好吃的早餐糕点心下午茶点美食面包饼干网红零食品批发</h2>
        <p class="miao_new_price"><span>2</span>人拼<strong class="">￥4.90</strong></p>
      </li>
      <li class="miao_li">
        <a href="##"><img src="../../assets/img/shashop01.png" alt=""></a>
        <h2>千丝 肉松饼整箱500g 厦门闽南特产小吃好吃的早餐糕点心下午茶点美食面包饼干网红零食品批发</h2>
        <p class="miao_new_price"><span>2</span>人拼<strong class="">￥4.90</strong></p>
      </li>
    </ul>

  </div>
  <!--<new-goods-list></new-goods-list>-->
</template>

<script>
  // import NewGoodsList from './NewGoodsList'
    export default {
        name: "NianGoods",
        components:{
          // NewGoodsList
        }
    }
</script>

<style scoped>

  .pingjia_img{
    width: 100%;
    height: 1rem;
  }
  .pingjia_img img{
    width: 100%;
    height: 100%;
  }
  .pingjia_list{
    width: 100%;
    display: -webkit-flex;
    flex-wrap: nowrap;
  }
  .pingjia_list h2{
    font-size: .12rem;
    color: #333;
    width:1.08rem;
    white-space: nowrap;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .nav_list strong{
    font-weight: 400;
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
</style>
