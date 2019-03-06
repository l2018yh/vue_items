<template>
  <ul class="title_list">
    <li class="act"><a href="##">热门推荐</a></li>
    <li><a href="##">数码相机</a></li>
    <li><a href="##">家用电器</a></li>
    <li><a href="##">电脑办公</a></li>
    <li><a href="##">美妆护肤</a></li>
    <li><a href="##">个护清洁</a></li>
    <li><a href="##">热门推荐</a></li>
    <li><a href="##">数码相机</a></li>
    <li><a href="##">家用电器</a></li>
    <li><a href="##">电脑办公</a></li>
    <li><a href="##">美妆护肤</a></li>
    <li><a href="##">个护清洁</a></li>
    <li><a href="##">女装</a></li>
    <li><a href="##">数码相机</a></li>
    <li><a href="##">家用电器</a></li>
    <li><a href="##">电脑办公</a></li>
    <li><a href="##">美妆护肤</a></li>
    <li><a href="##">个护清洁</a></li>
  </ul>
</template>

<script>
    export default {
        name: "ClassTitleList"
    }
</script>

<style scoped>
  .title_list{
    width:.86rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    overflow-y: auto;
  }
  .title_list li{
    height: .46rem;
    text-align: center;
    display: block;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: center;
  }
  .title_list a{
    color:#696969;
    font-size: .14rem;
    line-height: .46rem;
  }
  .title_list .act a{
    background: #fff;
    color:#f23030;
  }
</style>
