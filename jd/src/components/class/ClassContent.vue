<template>
  <!--产品分类-->
  <div class="content">
    <!--分类标题-->
      <class-title-list></class-title-list>
    <!--分类产品-->
      <class-pro-list></class-pro-list>
  </div>
</template>

<script>
    import ClassTitleList from "./ClassTitleList"
    import ClassProList from "./ClassProList"
    export default {
        name: "ClassContent",
        components:{
          ClassTitleList,
          ClassProList
        }
    }
</script>

<style scoped>
  /*产品分类*/
  .content{
    position: relative;
    display: -webkit-flex;
    margin-top: 1px;
    margin-bottom: 1px;
    height: 100%;
    flex:1;
    overflow-y: auto;
  }
</style>
