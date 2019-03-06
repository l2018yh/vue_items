<template>
  <div>
      <class-head></class-head>
      <shop-list-item :listData = "shop"></shop-list-item>
  </div>


</template>

<script>
    import ClassHead from "./ClassHead"
    import ShopListItem from "../components/shoplist/ShopListItem"
    import product from "../apis/product"
    export default {
        name: "ShopList",
        components: {
            ClassHead,
            ShopListItem
        },
        data:function(){
            return{
              shop:[]
            }
        },
        methods:{
          _initdata(){
            product.ProductLists((data)=>{
              console.log(data)
              this.shop = data.shopList;
              console.log(this.shop)
            });
            // product.ProductLists(this.cb);
          },
          // cb(res){
          //   this.shop = res.data.shopList;
          //   console.log(this.shop)
          // }
        },
        mounted(){
          this._initdata()
        }
    }
</script>

<style scoped>

</style>
