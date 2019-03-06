<template>
  <div>
    <nian-goods></nian-goods>
    <new-goods-list></new-goods-list>
  </div>
</template>

<script>
  import NianGoods from "./NianGoods"
  import NewGoodsList from "./NewGoodsList"
    export default {
        name: "PingJiaGoods",
        components:{
          NianGoods,
          NewGoodsList
        }
    }
</script>

<style scoped>

</style>
