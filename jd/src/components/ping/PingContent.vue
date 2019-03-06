<template>
    <div class="content">
      <div class="shop_list">

      </div>
      <!--拼购分类-->
      <ping-type></ping-type>
      <!--拼购活动类型-->
      <ping-product></ping-product>
      <!--囤年货-->
      <tun-nian-huo></tun-nian-huo>
      <!--每日上新好货-->
      <new-goods></new-goods>
    </div>
</template>

<script>
    import PingType from "./PingType"
    import PingProduct from "./PingProduct"
    import TunNianHuo from "./TunNianHuo"
    import NewGoods from "./NewGoods"
    export default {
        name: "PingConent",
        components:{
          PingType,
          PingProduct,
          TunNianHuo,
          NewGoods
        }
    }
</script>

<style scoped>
  .content{
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;

  }

</style>
