<template>
  <!--<div>-->
    <li class="car_list" >
        <div class="shop_title">
          <span class="checbox" @click="bian">
            <input type="checkbox"/>
          </span>
          <img class="shop_pho" src="../../assets/img/03.png" alt="">
          <h4>{{shopItem.shopName}}</h4>
          <img class="youjian" src="../../assets/img/youjiantou.jpg" alt="">
        </div>
        <p class="manjian">
          <span class="mj">满减</span>已购满<span>799</span>元，已减<span>200</span>元
          <strong class="guang">再逛逛<img src="../../assets/img/youjianhun.jpg"></strong>
        </p>
        <vs-carts-shop-product-list :key="index" :pid="sid" v-for="(n,index) of shopItem.products" :prolist="n"></vs-carts-shop-product-list>
    </li>

  <!--</div>-->

</template>

<script>
    import VsCartsShopProductList from "./VsCartsShopProductList"
    export default {
        name: "VsCartsShop",
        props:["shopItem","sid"],
        methods:{
          bian(spid){
            console.log(this.flag)
            if(this.flag == 1){
              // $(".checbox2").css({"background-image":"url(../../assets/img/xuant.jpg)"});
              // $(".checbox2").addClass("checbox");
              $(".checbox2").attr("class","checbox");
              this.flag = 0;
            }else{
              $(".checbox").attr("class","checbox2");
              this.flag = 1;
            }
        }
      },
        components:{
            VsCartsShopProductList
        }
    }
</script>

<style scoped>
  .car_list{
    width: 92%;
    padding: .2rem;
  }
  .shop_title{
    display: -webkit-flex;
    position: relative;
    margin: 0 0 .15rem;
  }
  .shop_title .checbox{
    width: .18rem;
    height: .18rem;
    border-radius: 50%;
    background: url(../../assets/img/xuant.jpg) no-repeat left top;
    -webkit-background-size: 100%;
    background-size: 100%;
  }
  /*.goods_pro .checbox{*/
    /*width: .18rem;*/
    /*height: .18rem;*/
    /*border-radius: 50%;*/
    /*background-image: url(../../assets/img/xuant.jpg);*/
    /*background-repeat:no-repeat;*/
    /*background-position: 0 0;*/
    /*-webkit-background-size: 100%;*/
    /*background-size: 100%;*/
    /*position: absolute;*/
    /*top: .45rem;*/
    /*left: 0;*/
  /*}*/
  .checbox2{
    width: .18rem;
    height: .18rem;
    border-radius: 50%;
    background-image: url(../../assets/img/xuanf.jpg);
    background-repeat:no-repeat;
    background-position: 0 0;
    -webkit-background-size: 100%;
    background-size: 100%;
    /*position: absolute;*/
    /*top: .45rem;*/
    /*left: 0;*/
  }
  .shop_title input{
    width: .18rem;
    height: .18rem;
    display: block;
    outline: none;
    border: none;
    border-radius: 50%;
    background: transparent;
    opacity: 0;
  }
  .shop_pho{
    width: .14rem;
    height: .14rem;
    margin: .02rem .05rem 0 .2rem;
  }
  .shop_title h4{
    font-size: .14rem;
  }
  .youjian{
    width: .14rem;
    height: .14rem;
    margin-top: .02rem;
    margin-left:.05rem;
  }
  .manjian{
    width: 85%;
    margin-left: .35rem;
    font-size: .12rem;
    color: #333;
  }
  .mj{
    padding: .01rem .06rem;
    border-radius: .4rem;
    color: #fff;
    background: #f0250f;
    margin-right: .05rem;
  }
  .guang{
    float: right;
    color: #f0250f;
  }
  .guang img{
    float: right;
    width: .08rem;
    height: .12rem;
    margin-top: .03rem;
    margin-left: .02rem;
  }
</style>
