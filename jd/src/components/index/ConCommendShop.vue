<template>
    <div>
      <!--为您推荐-->
      <div class="recommend">
        <div class="rem_title"><p><img src="../../assets/img/下载.png" alt="">为您推荐</p></div>
      </div>
      <!--推荐商品-->
      <ul class="rem_list">
        <li class="rem_show":key="n.sid" v-for="(n,index) of commendshop">
          <div class="shop_pho">
            <img :src="n.simg" alt="">
          </div>
          <div class="shop_info_all">
            <div class="shop_info">
              {{n.sinfo}}
            </div>
            <div class="shop_pirce">
              <span class="price_left">￥{{n.spri}}</span>
              <span class="price_right">找相似</span>
            </div>
            <div class="shop_pirce similar_price" v-if="n.oldpri">
                  ￥{{n.oldpri}}<img :src="n.plus"/>
            </div>
            <div class="shop_pirce similar_price" v-else="null">

            </div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "ConCommendShop",
        props:["commendshop"]
    }
</script>

<style scoped>
  /*为你推荐*/
  .recommend{
    width: 100%;
    overflow: hidden;
  }
  .rem_title{
    width: 95%;
    height: .2rem;
    border-top: .001rem solid #cbcbcb;
    position: relative;
    margin: .2rem auto 0rem;
  }
  .rem_title p{
    width: 26%;
    font-size: .14rem;
    line-height: .14rem;
    color: #848689;
    background: #f5f5f5;
    position: absolute;
    top: -.08rem;
    left: 35%;
  }
  .rem_title img{
    float: left;
    width: .14rem;
    height: .14rem;
    margin: 0 .08rem;
    vertical-align: middle;
  }
  /*推荐商品*/
  .rem_list{
    width: 100%;
    display: -webkit-flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .rem_show{
    width: 49.8%;
    background: #fff;
    margin-top: .03rem;
  }
  .rem_show .shop_pho{
    width: 1.86rem;
    height: 1.86rem;
  }
  .rem_show img {
    width: 100%;
    height: 100%;
  }
  .shop_info_all{
    margin: .05rem .06rem 0;
  }
  .shop_info{
    font-size: .12rem;
    color: #232326;
    display: -webkit-box;
    -webkit-line-clamp:2;
    overflow: hidden;
    text-overflow:ellipsis;
    -webkit-box-orient: vertical;
  }
  .shop_pirce{
    color:#000;
    height: .26rem;
    display: -webkit-flex;
    justify-content: space-between;
    align-items: center;
  }
  .shop_info_all .similar_price{
    font-size:.14rem;
    height: .26rem;
    display: -webkit-flex;
    justify-content: start;
  }
  .similar_price img{
    width: .28rem;
    height: .1rem;
    margin-left:.02rem;
  }
  .price_left{
    font-size: .14rem;
    line-height: .3rem;
    color: #f23030;
  }
  .price_right{
    font-size: .12rem;
    padding:.04rem .05rem;
    border: 1px solid #bfbfbf;
    color: #686868;
  }

  .shop_pro_info{
    width: 100%;
    height: .3rem;
    background: #fff;
  }
</style>
