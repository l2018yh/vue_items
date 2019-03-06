<template>
  <div>
    <p class="baitiao">
      <span class="bt_tle">送至</span>
      <span class="manjia guige">北京朝阳区三环到四环之间<br/>
                    <i>现货</i> 由商家  从浙江杭州市  发货
                </span>
      <span class="right_img"><img src="../../assets/img/dian.jpg" alt=""></span>
    </p>
    <p class="baitiao yunfei">
      <span class="bt_tle">运费</span>
      <span class="guige">店铺单笔订单不满69元，货到付款运费8元，在线支付运费9元</span>
    </p>
    <div class="baitiao">
      <div class="bt_tle fahuo_way">
        <span class="fahuo_img"><img class="" src="../../assets/img/05.png">商家发货&售后</span>
        <span class="fahuo_img"><img class="" src="../../assets/img/05.png">商家发货&售后</span>
        <span class="fahuo_img"><img class="" src="../../assets/img/05.png">商家发货&售后</span>
        <span class="fahuo_img"><img class="" src="../../assets/img/05.png">商家发货&售后</span>
        <span class="fahuo_img"><img class="" src="../../assets/img/05.png">商家发货&售后</span>
      </div>
      <span class="right_img"><img src="../../assets/img/dian.jpg" alt=""></span>
    </div>
    <div class="yixuan"></div>

    <div class="sever">
      <img src="../../assets/img/sever.png" alt="">
      <div class="sever_tle">
        <h4>增值服务</h4>
        <span>本商品支持保障服务，点击可选择服务</span>
      </div>
      <img class="right_img" src="../../assets/img/02.png" alt="">
    </div>

    <div class="sever">
      <img src="../../assets/img/sever.png" alt="">
      <div class="sever_tle">
        <h4>闲置回收</h4>
        <span>以旧换新</span>
      </div>
      <img class="right_img" src="../../assets/img/02.png" alt="">
    </div>
    <div class="yixuan"></div>

  </div>

</template>

<script>
    export default {
        name: "ProToAdd"
    }
</script>

<style scoped>
  .baitiao{
    padding: .15rem .1rem;
    display: -webkit-flex;
    font-size: .12rem;
    color: #333;
    position: relative;
    border-top: 1px solid #eee;
    background: #fff;
  }
  .baitiao .bt_tle{
    color: #999;
    margin-right: .15rem;
  }
  .baitiao .right_img{
    position: absolute;
    top: .18rem;
    right: .1rem;
  }
  .manjia i{
    float: left;
    font-style: normal;
    margin-right: .02rem;
    padding: 0 .02rem;
    border: 1px solid #e4393c;
    color: #e4393c;
  }
  .yixuan{
    border-top: .1rem solid #e8e8ed;
  }
  .yunfei{
    border-top: none;
    padding: 0 .1rem .1rem;
  }
  .yunfei .guige{
    width: 80%;
    font-size: .14rem;
    color: #333;
    margin:0 .15rem 0;
  }
  .fahuo_way{
    width: 100%;
    display: -webkit-flex;
    flex-wrap: wrap;
    flex-shrink: 0;
  }
  .fahuo_img{
    display: -webkit-flex;
    margin-right: .1rem;
  }
  .fahuo_img img{
    width: .12rem;
    height: .12rem;
    margin-right: .05rem;
    margin-top: .02rem;
  }
  .sever {
    display: -webkit-flex;
    padding: .1rem;
    background: #fff;
    position: relative;
    border-top:1px solid #eee;
  }
  .sever img{
    width: .15rem;
    height: .15rem;
  }
  .sever img:nth-child(1){
    margin-right: .1rem;
  }
  .sever .right_img{
    position: absolute;
    top: .1rem;
    right: .1rem;
  }
  .sever_tle h4{
    color: #333;
    font-size: .14rem;
  }
  .sever_tle span{
    display: block;
    color: #999;
    font-size: .12rem;
  }
</style>
