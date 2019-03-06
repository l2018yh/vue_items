<template>
  <!--选购商品详情-->
  <ul class="shop_title goods_list">
    <vs-carts-shop-product :product="prolist" :pid="pid"></vs-carts-shop-product>
  </ul>



</template>

<script>
    import VsCartsShopProduct from "./VsCartsShopProduct"
    export default {
        name: "VsCartsShopProductList",
        props:["prolist","pid"],
        components:{
            VsCartsShopProduct
        }
    }
</script>

<style scoped>
  /*选购商品详情*/
  .goods_list{
    margin-top: .1rem;
    display: -webkit-flex;
    flex-wrap: wrap;
  }
</style>
