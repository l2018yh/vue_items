<template>
  <div class="shop">
    <info-head></info-head>
    <info-detia-list></info-detia-list>
    <info-footer></info-footer>
  </div>

</template>

<script>
    import InfoFooter from "../components/shopinfo/InfoFooter"
    import InfoHead from "../components/shopinfo/InfoHead"
    import InfoDetiaList from "../components/shopinfo/InfoDetiaList"
    export default {
        name: "shopInfo",
        components:{
          InfoFooter,
          InfoDetiaList,
          InfoHead
        }
    }
</script>

<style scoped>
    html,body{
      height: 100%;
    }
    .shop{
      height: 100%;
      display: -webkit-flex;
      flex-direction: column;
      justify-content: space-between;

    }
</style>
