<template>

    <div class="pro_title">
      <!-- 商品详细信息 -->
      <div class="pro_info">
        <img class="tunbg" src="../../assets/img/tunbg.jpg" alt="">
      </div>
      <pro-price></pro-price>
      <!--商品发送地址 售后-->
      <pro-to-add></pro-to-add>
      <!--商品店铺信息-->
      <pro-shop-info></pro-shop-info>
      <!--评论-->
      <pro-commit></pro-commit>
      <!--猜你喜欢-->
      <guess-you-like></guess-you-like>
    </div>

  
</template>

<script>
    import ProPrice from "./ProPrice"
    import ProToAdd from "./ProToAdd"
    import ProShopInfo from "./ProShopInfo"
    import ProCommit from "./ProCommit"
    import GuessYouLike from "./GuessYouLike"
    export default {
        name: "ProInfoItem",
        components:{
            ProPrice,
            ProToAdd,
            ProShopInfo,
            ProCommit,
            GuessYouLike
        }
    }
</script>

<style scoped>
  /* <!-- 商品详细信息 --> */
  .pro_info{
    width:100%;
    background: #fff;
  }
  .tunbg{
    width: 100%;
    height: .5rem;
  }

</style>
