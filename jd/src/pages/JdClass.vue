<template>
  <div class="class">
      <class-head></class-head>
      <class-content></class-content>
      <index-footer></index-footer>
  </div>

</template>

<script>
  import ClassHead from "./ClassHead"
  import ClassContent from "../components/class/ClassContent"
  import IndexFooter from "./IndexFooter"
    export default {
        name: "class",
        components:{
          IndexFooter,
          ClassHead,
          ClassContent
        }
    }
</script>

<style scoped>
  .class{
    height: 100%;
    display: -webkit-flex;
    flex-direction: column;

  }
</style>
