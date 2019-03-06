<template>

    <!--加购商品-->
    <ul class="car_shop_list">
      <vs-carts-shop :key="pid" :sid="pid" :shopItem="n" v-for="(n,pid) of shoplists"></vs-carts-shop>
    </ul>


</template>

<script>
    import VsCartsShop from "./VsCartsShop"
    export default {
        name: "VsCartsShopList",
        props:["shoplists"],
        components:{
            VsCartsShop
        }
    }
</script>

<style scoped>
  .car_shop_list {
    background: #fff;
    flex: 1;
    overflow-y:auto;
    overflow-x: hidden;
  }
  .car_shop_list li{
    width: 92%;
    padding: .2rem;
  }
</style>
