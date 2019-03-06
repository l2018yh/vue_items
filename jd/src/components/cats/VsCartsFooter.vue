<template>
  <div>
    <!--结算-->
    <div class="total">
    <span class="total_check" @click="bian">
        <!--<input type="checkbox" checked="checked">-->
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;全选
    </span>
      <div class="total_middle">
        <strong>合计：￥1746.00</strong>
        <p>总额：￥1946.00  立减：￥200.00</p>
      </div>
      <button class="go_total">去结算(<span>3</span>)</button>
    </div>
  </div>

</template>

<script>
    export default {
        name: "VsCartsFooter",
        props:["data"],
        methods: {
          bian(spid) {
            console.log(this.flag)
            if (this.flag == 1) {
              // $(".checbox2").css({"background-image":"url(../../assets/img/xuant.jpg)"});
              // $(".checbox2").addClass("checbox");
              $(".total_check2").attr("class", "total_check");
              this.flag = 0;
            } else {
              $(".total_check").attr("class", "total_check2");
              this.flag = 1;
            }
          }
        }
    }
</script>

<style scoped>
  /*结算*/
  .total{
    /*height: .4rem;*/
    background: #fff;
    display: -webkit-flex;
    justify-content: space-between;
    padding-left: .15rem;
  }
  .total_check{
    font-size: .14rem;
    color: #666;
    margin-top: .15rem;
    background: url(../../assets/img/xuanf.jpg) left top no-repeat;
  }
  .total_check2{
    font-size: .14rem;
    color: #666;
    margin-top: .15rem;
    background: url(../../assets/img/xuant.jpg) left top no-repeat;
  }
  .total_check input{
    width: .2rem;
    height: .2rem;
    border-radius: 50%;
    border: none;
    margin-right: .08rem;
    vertical-align: middle;
    outline: none;
    background: transparent;
    opacity: 0;
  }
  .total_middle{
    font-size: .12rem;
    color: #666;
    margin-top: .1rem;
  }
  .total_middle strong{
    color: #1b1b1e;
    font-size: .14rem;
    font-weight: 600;
  }
  .go_total{
    height: .5rem;
    padding: 0 .15rem;
    color: #fff;
    border: none;
    background: #f30600;
  }
</style>
