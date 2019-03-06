<template>

  <li>
    <router-link to="./info" :id="listImg.id">
      <img class="shp_img" :src="listImg.listImg" alt="">
      <div class="shangp_info">
        <p class="info_title">{{listImg.infoTitle}}</p>
        <strong>￥{{listImg.infoPrice}}</strong>
        <p class="info_pl" v-if="listImg.infoPl">{{listImg.infoPl}}条评论</p>
        <p class="info_pl" v-else="listImg.infoPl =='null'">暂无评论</p>
        <p class="info_pl">{{listImg.infoMinTitle}}
          <img :src="listImg.infoMinTleImg" alt="">
        </p>
      </div>
    </router-link>
  </li>

</template>

<script>

    export default {
        name: "ShopListPho",
        props:["listImg"],
        components: {

        }
    }
</script>

<style scoped>
  /* 商品图片 */
  .shangping_pho li{
    width: 49.5%;
    display: -webkit-flex;
    flex-direction: column;
    background: #fff;
    padding-bottom: .1rem;
  }
  .shp_img{
    width: 100%;
    height: 2.37rem;
  }
  .shangp_info{
    padding: .08rem;
  }
  .shangp_info .info_title{
    width: 80%;
    font-size: .14rem;
    color: #666;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .shangp_info strong{
    display: block;
    font-size: .16rem;
    color: #e43130;
  }
  .info_pl{
    font-size: .12rem;
    color: #999;
    display: -webkit-flex;
  }
  .info_pl img{
    width: .15rem;
    height: .1rem;
    margin-top: .02rem;
  }
</style>
