<template>
    <div>
      <!-- 加入购物车 -->
      <ul class="add_car">
        <li class="add_item">
          <ul class="add_kefu">
            <li>
              <img src="../../assets/img/03.png" alt="">
              <span>联系客服</span>
            </li>
            <li>
              <img src="../../assets/img/03.png" alt="">
              <span>进店</span>
            </li>
            <li>
              <img src="../../assets/img/03.png" alt="">
              <span>购物车</span>
            </li>
          </ul>
        </li>
        <li class="car" @click="gocar">加入购物车</li>
        <li class="buy">立即购买</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "InfoFooter",
        methods:{
          gocar(){
            this.$router.push("/cart")
          }
        }
    }
</script>

<style scoped>

  /* 加入购物车 */
  .add_car{
    height: .5rem;
    display: -webkit-flex;
    align-items: center;
    background: #fff;
    border-top: 1px solid #fdf0f0;
  }
  .add_kefu{
    display: -webkit-flex;
    align-items: center;
    justify-content: space-around;
  }
  .add_kefu li{
    width: .52rem;
    display: -webkit-flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }
  .add_kefu img{
    width: .15rem;
    height: .15rem;
  }
  .add_kefu span{
    display: block;
    font-size: .1rem;
    color: #999;
  }
  .car,.buy{
    width: 1.08rem;
    color: #fff;
    font-size: .14rem;
    background: #e4393c;
    line-height: .5rem;
    text-align: center;
  }
  .car{
    background: #ff9600;;
  }
</style>
