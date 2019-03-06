<template>
  <!--每日上新好货-->
  <div class="new_goods">
    <div class="new_title">
      <h4>每日上新好货</h4>
      <p>年货节火爆抢购</p>
    </div>
    <!--上新上品列表-->
    <new-goods-list></new-goods-list>
    <!--平价商品-->
    <ping-jia-goods></ping-jia-goods>

  </div>
</template>

<script>
  import PingJiaGoods from "./PingJiaGoods"
  import NewGoodsList from "./NewGoodsList"
  import IndexFooter from "../../pages/IndexFooter"
    export default {
        name: "NewGoods",
        components:{
          PingJiaGoods,
          NewGoodsList,
          IndexFooter
        }
    }
</script>

<style scoped>

  /*每日上新好货*/
  .new_goods{
    width: 100%;
    margin-top: .05rem;
    background: #fff;
  }
  .new_title{
    padding: .1rem 0;
    text-align: center;
  }
  .new_title h4{
    font-weight: 400;
    font-size: .16rem;
    color: #333;
  }
  .new_title p{
    font-size: .12rem;
    color: #666;
  }

</style>
