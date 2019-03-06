<template>

    <!--店铺分类-->
    <div class="shop_list">
      <a href="##" @click="go" :key="index" v-for="(i,index) of contentShop">
        <img :src="i.shopImg"/>{{i.shoptitle}}
      </a>
    </div>

</template>

<script>
    export default {
        name: "ContentShop",
        props:["contentShop"],
        methods:{
          go(){
            this.$router.push("/shopList")
          }
        }
    }
</script>

<style scoped>

  /*店铺分类*/
  .shop_list{
    width: 100%;
    display: -webkit-flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background: #fff;
  }
  .shop_list a{
    width: 20%;
    height: .65rem;
    font-size: .12rem;
    color: #666;
    display: -webkit-flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin: .1rem 0;
  }
  .shop_list img{
    width: .4rem;
  }
</style>
