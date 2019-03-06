<template>
  <div class="lg_title">
    <i class="iconfont icon-right" @click="goback"></i>
    <p>京东登录</p>
  </div>
</template>

<script>
    export default {
        name: "LoginHead",
        methods:{
          goback(){
            this.$router.go(-1)
          }
        }
    }
</script>

<style scoped>
  .lg_title{
    height: .36rem;
    width: 100%;
    line-height: .36rem;
  }
  .lg_title i{
    float: left;
    font-size: .16rem;
    margin-left:.16rem;
  }
  .lg_title p{
    font-size: .16rem;
    text-align: center;
  }
</style>
