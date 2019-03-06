<template>
      <li class="goods_pro" >
        <span class="checbox2" @click="bian(spid)">
          <!--<input type="checkbox" v-model="product.checked">-->
        </span>
        <img src="../../assets/img/female01.jpg" alt="">
        <div class="good_show_info">
          <p class="good_info">{{product.title}}</p>
          <p class="good_spec">{{product.attrs.size}}<span>选服务</span></p>
          <div class="good_price">
            <span class="god_pri">￥<strong>{{product.price}}</strong></span>
            <p class="good_num"><input type="button" value="-"><span>1</span><input type="button" value="+"></p>
          </div>
        </div>
      </li>

</template>

<script>
    export default {
        name: "VsCartsShopProduct",
        props:["product","pid"],
        // data(){
        //    return {
        //      flag:1,
        //      url1:'url('+require('../../assets/img/xuant.jpg'),
        //      url2:require("../../assets/img/xuanf.jpg")
        //    }
        // },
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
        }
    }
</script>

<style scoped>
  .goods_pro{
    display: -webkit-flex;
    position: relative;
    padding: .2rem;
  }
  .goods_pro .checbox{
    width: .18rem;
    height: .18rem;
    border-radius: 50%;
    background-image: url(../../assets/img/xuant.jpg);
    background-repeat:no-repeat;
    background-position: 0 0;
    -webkit-background-size: 100%;
    background-size: 100%;
    position: absolute;
    top: .45rem;
    left: 0;
  }
  .checbox2{
    width: .18rem;
    height: .18rem;
    border-radius: 50%;
    background-image: url(../../assets/img/xuanf.jpg);
    background-repeat:no-repeat;
    background-position: 0 0;
    -webkit-background-size: 100%;
    background-size: 100%;
    position: absolute;
    top: .45rem;
    left: 0;
  }
  .good_show_info{
    flex: 1;
  }
  .shop_title input{
    width: .1rem;
    height: .1rem;
    display: block;
    outline: none;
    border: none;
    border-radius: 50%;
    background: transparent;
    opacity: 0;
  }
  .goods_pro img{
    width: .85rem;
    height: .85rem;
    margin: 0 .08rem;
  }
  .good_info{
    font-size: .12rem;
    /*color: #232326;*/
    font-weight: 500;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
  }
  .good_spec {
    font-size: .12rem;
    color: #666;
    line-height: .35rem;
  }
  .good_spec span{
    float: right;
  }
  .good_price{
    font-size: .14rem;
    color: #999;
  }
  .god_pri{
    float: left;
    color: #ef0000;
  }
  .good_num{
    float: right;
    font-size: .14rem;
    display: -webkit-flex;
  }
  .good_num input{
    width: .15rem;
    height: .15rem;
    border: none;
    outline: none;
  }
  .good_num span{
    display: block;
    width: .25rem;
    height: .16rem;
    text-align: center;
    background-color: rgb(246,246,246);
  }
</style>
