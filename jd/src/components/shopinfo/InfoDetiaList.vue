<template>

      <div class="shopinfo">
        <!--轮播图-->
          <pro-show-img></pro-show-img>
        <!--商品详细信息-->
          <pro-info-item></pro-info-item>
        </div>

</template>

<script>


  import ProInfoItem from "./ProInfoItem"
  import ProShowImg from "./ProShowImg"
    export default {
        name: "InfoDetialList",
        components:{
            ProInfoItem,
            ProShowImg
        }
    }

</script>

<style scoped>
  .shopinfo{
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>

