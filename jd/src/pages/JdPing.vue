<template>
    <div class="ping">
        <ping-head></ping-head>
        <ping-content></ping-content>
        <!--底部-->
        <index-footer></index-footer>
    </div>
</template>

<script>
    import PingHead from "../components/ping/PingHead"
    import PingContent from "../components/ping/PingContent"
    import IndexFooter from "./IndexFooter"
    export default {
        name: "JdPing",
        components:{
          PingHead,
          IndexFooter,
          PingContent
        }
    }
</script>

<style scoped>
  .ping{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
