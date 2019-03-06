<template>
  <!--店铺分类-->
  <div class="shop_list">
    <a href="##"><img src="../../assets/img/ps.jpg" alt="">名品清仓</a>
    <a href="##"><img src="../../assets/img/ps.jpg" alt="">名品清仓</a>
    <a href="##"><img src="../../assets/img/ps.jpg" alt="">名品清仓</a>
    <a href="##"><img src="../../assets/img/ps.jpg" alt="">名品清仓</a>
    <a href="##"><img src="../../assets/img/ps.jpg" alt="">名品清仓</a>
    <a href="##"><img src="../../assets/img/ps.jpg" alt="">名品清仓</a>
    <a href="##"><img src="../../assets/img/ps.jpg" alt="">名品清仓</a>
    <a href="##"><img src="../../assets/img/ps.jpg" alt="">名品清仓</a>
    <a href="##"><img src="../../assets/img/ps.jpg" alt="">名品清仓</a>
    <a href="##"><img src="../../assets/img/ps.jpg" alt="">名品清仓</a>
  </div>
</template>

<script>
    export default {
        name: "PingProduct"
    }
</script>

<style scoped>
  /*店铺分类*/
  .shop_list{
    width: 100%;
    display: -webkit-flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background: #fff;
    padding: .1rem 0;
  }
  .shop_list a{
    width: 20%;
    height: .55rem;
    font-size: .12rem;
    color: #666;
    display: -webkit-flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin: .1rem 0;
  }
  .shop_list img{
    width: .36rem;
    height: .36rem;
  }
</style>
