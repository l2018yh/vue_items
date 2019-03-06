<template>
    <div class="content">
      <!--广告-->
      <main>
        <cont-advert></cont-advert>
        <content-shop :contentShop = "shopImg.shopList"></content-shop>
        <cont-kuai-new></cont-kuai-new>
        <cont-meeting></cont-meeting>
        <cont-yard-shopping></cont-yard-shopping>
        <con-commend-shop :commendshop = "shopImg.commendshop"></con-commend-shop>
        <login-regist></login-regist>
      </main>

    </div>

</template>

<script>
    import ContAdvert from "./ContAdvert"
    import ContentShop from "./ContentShop"
    import ContKuaiNew from "./ContKuaiNew"
    import ContMeeting from "./ContMeeting"
    import ContYardShopping from "./ContYardShopping"
    import ConCommendShop from "./ConCommendShop"
    import LoginRegist from "./LoginRegist"
    export default {
        name: "IndexContent",
        props:["shopImg"],
        mounted () {
          $("main").scroll(function(){
            if($("main").scrollTop()>50){
              $("header").css({"background":"rgb(228, 49, 48)"})
            }else{
              $("header").css({"background":"transparent"})
            }
          })
        },
        components:{
          ContAdvert,
          ContentShop,
          ContKuaiNew,
          ContMeeting,
          ContYardShopping,
          ConCommendShop,
          LoginRegist
        }
    }
</script>

<style scoped>
  .content{
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
  }
  main{
    position: relative;
    overflow-y: auto;
    flex: 1;
    overflow-x: hidden;
  }
</style>
