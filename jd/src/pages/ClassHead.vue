<template>
    <div>
        <!--头部-->
        <header>
            <i class="iconfont icon-right" @click="goback"></i>
          <div class="h_middle"><i class="iconfont icon-ICON-search
  "></i>食品超级品类日礼盒直降</div>
          <img class="h_right" src="../../static/images/dian.jpg" alt="">


          <router-view></router-view>
        </header>
        <!--右侧点击导航-->
        <ul class="nav_li">
        <span class="sanjiao"></span>
        <li class="nav_list">
          <a href="##">
            <span></span>
            <strong>首页</strong>
          </a>
        </li>
        <li class="nav_list">
          <a href="##">
            <span></span>
            <strong>分类搜索</strong>
          </a>
        </li>
        <li class="nav_list">
          <a href="##">
            <span></span>
            <strong>购物车</strong>
          </a>
        </li>
        <li class="nav_list">
          <a href="##">
            <span></span>
            <strong>我的京东</strong>
          </a>
        </li>
        <li class="nav_list">
          <a href="##">
            <span></span>
            <strong>浏览记录</strong>
          </a>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "ClassHead",
        data:{

        },
        methods:{
          goback(){
            this.$router.go(-1)
          }
        },
        mounted(){
          $(".h_right").mouseover(function () {
            $(".nav_li").toggle();
          })
        }
    }
</script>

<style scoped>
  @import "../assets/css/classHead.css";
</style>
