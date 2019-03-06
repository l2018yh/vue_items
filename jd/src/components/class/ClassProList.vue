<template>
  <!--分类产品-->
  <ul class="pro_list">
    <!--<li>-->
    <ul class="pro_li pro_li_a">
      <li class="new_li">
        <img src="../../assets/img/newb-wps图片.jpg" alt="">
      </li>
      <class-pro-list-item></class-pro-list-item>
      <class-pro-list-item></class-pro-list-item>
    </ul>
    <!--</li>-->
    <ul class="pro_li">
        <class-pro-list-item></class-pro-list-item>
        <class-pro-list-item></class-pro-list-item>
    </ul>
    <ul class="pro_li">
      <class-pro-list-item></class-pro-list-item>
      <class-pro-list-item></class-pro-list-item>
    </ul>
    <ul class="pro_li">
      <class-pro-list-item></class-pro-list-item>
      <class-pro-list-item></class-pro-list-item>
      <class-pro-list-item></class-pro-list-item>
      <class-pro-list-item></class-pro-list-item>
    </ul>
    <ul class="pro_li">
      <class-pro-list-item></class-pro-list-item>
      <class-pro-list-item></class-pro-list-item>
    </ul>
    <ul class="pro_li">
      <class-pro-list-item></class-pro-list-item>
      <class-pro-list-item></class-pro-list-item>
    </ul>
    <ul class="pro_li">
      <class-pro-list-item></class-pro-list-item>
      <class-pro-list-item></class-pro-list-item>
    </ul>
    <ul class="pro_li">
      <class-pro-list-item></class-pro-list-item>
      <class-pro-list-item></class-pro-list-item>
    </ul>
    <ul class="pro_li">
      <class-pro-list-item></class-pro-list-item>
      <class-pro-list-item></class-pro-list-item>
    </ul>
    <ul class="pro_li">
      <class-pro-list-item></class-pro-list-item>
      <class-pro-list-item></class-pro-list-item>
    </ul>
  </ul>
</template>

<script>
  import ClassProListItem from "./ClassProListItem"
    export default {
        name: "ClassProList",
        components:{
          ClassProListItem
        },
        mounted(){
          $('.content .title_list li').mouseover(function(){
            $(this).addClass("act").siblings().removeClass();
            var i = $(this).index();
            $(".pro_li").eq(i).show().siblings().hide();
          }).hover(function(){
            $(this).addClass("act");
          }),function(){
            $(this).removeClass("act");
          }
        }
    }
</script>

<style scoped>
  /*分类产品*/
  .pro_list{
    flex: 1;
    background: #fff;
    overflow-y: auto;
    position: relative;
  }
  .pro_li{
    position: absolute;
    padding: .08rem;
    display: none;
  }
  .pro_li_a{
    display: block;
  }

  .new_li{
    width:100%;
    height: .93rem;
  }
  .new_li img{
    width: 100%;
    height: 100%;
  }

</style>
