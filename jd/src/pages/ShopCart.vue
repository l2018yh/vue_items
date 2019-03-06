<template>
  <div class="cars_head">
        <vs-carts-header></vs-carts-header>
        <vs-carts-shop-list :shoplists="cats.shops"></vs-carts-shop-list>

        <!--<router-view></router-view>-->
        <vs-carts-footer :data="cats"></vs-carts-footer>
        <index-footer></index-footer>
  </div>
</template>

<script>
    import VsCartsHeader from "../components/cats/VsCartsHeader"
    import VsCartsShopList from "../components/cats/VsCartsShopList"
    import IndexFooter from "../pages/IndexFooter"
    import VsCartsFooter from "../components/cats/VsCartsFooter"
    import shopCart from "../apis/shopCart"
    import product from "../apis/product";
    export default {
        name: "ShopCart",
        components:{
            VsCartsHeader,
            VsCartsShopList,
            VsCartsFooter,
            IndexFooter
        },
        data(){
            return{
              cats:[]
            }
        },
        methods: {
          /**
           * 接受数据
           */
          _initdata() {
            shopCart.ShopCarts((data) => {
              // console.log(data)
              this.cats = data;
              // console.log(this.cats.shops)
              this._countCarts(data)
            });
          },
          /**
           * 统计总支付价格
           * @param shops
           * @private
           */
          _countCarts(shops){
            let totalPrice=0
            shops.forEach((shop,sid)=>{
                shop.product.forEach((product,pid)=>{
                    totalPrice += product.price *product.qal
                })
              })
            this.cats.totalPrice = totalPrice
          }
        },
          mounted(){
          this._initdata()
        }

    }
</script>

<style scoped>
  .cars_head{
       height: 100%;
      display: flex;
      align-content: space-between;
      flex-direction: column;
  }

</style>
