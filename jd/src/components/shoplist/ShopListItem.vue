<template>
  <!-- 商品列表 -->
  <div class="shangping_list">
    <ul class="shangping_filter">
      <li><span>综合</span><img class="filter_img" src="../../../static/images/09.png" alt=""></li>
      <li><span>销量</span></li>
      <li><span>服务</span><img class="filter_img" src="../../../static/images/09.png" alt=""></li>
      <li><span>筛选</span></li>
    </ul>
    <ul class="size">
      <li><img class="fil_img" src="../../../static/images/nh01.png" alt=""></li>
      <li>新品</li>
      <li>品牌</li>
      <li>尺寸</li>
    </ul>

    <!--商品图片信息-->
    <ul class="shangping_pho">
        <shop-list-pho :key="index" :listImg="i" v-for="(i,index) of listData"></shop-list-pho>
    </ul>
  </div>
</template>

<script>
  import ShopListPho from "./ShopListPho"
    export default {
        name: "ShopList",
        props:["listData"],
        components:{
          ShopListPho
        },
        mounted(){
            console.log(this.listData)
        }
    }
</script>

<style scoped>
  /* 商品列表 */
  .shangping_filter{
    /* height: .44rem; */
    display: -webkit-flex;
    justify-content: space-around;
    align-items: center;
    border-bottom:1px solid #f7f7f7;
    background: #fff;
  }
  .shangping_filter li{
    text-align: center;
    width: 18%;
    /* padding: .05rem 0; */
    font-size: .14rem;
    color: #666;
    position: relative;
  }
  .shangping_filter li:nth-child(1){
    color: #e43130;
  }
  .shangping_filter span{
    display: block;
    margin: .1rem .2em;
  }
  .filter_img{
    width: .08rem;
    height: .06rem;
    position: absolute;
    top: .18rem;
    right: .08rem;
  }
  .size{
    display: -webkit-flex;
    justify-content: space-between;
    align-items: center;
    padding: .1rem ;
    background: #fff;
  }
  .size li{
    width: 15%;
    font-size: .12rem;
    padding:.06rem .14rem;
    background: #f2f2f7;
    text-align: center
  }
  .fil_img{
    width: .45rem;
    height: .14rem;
  }
  .shangping_pho {
    display: -webkit-flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    justify-content: space-between;
  }
</style>
