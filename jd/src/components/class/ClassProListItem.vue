<template>
    <div>
      <li class="produt_list">
        <h4>厨房小店</h4>
        <ul class="pro_show_list">
          <li class="pro_show">
            <img src="../../assets/img/hw.jpg" alt="">
            <span>华为手机</span>
          </li>
          <li class="pro_show">
            <img src="../../assets/img/hw.jpg" alt="">
            <span>华为手机</span>
          </li>
          <li class="pro_show">
            <img src="../../assets/img/hw.jpg" alt="">
            <span>华为手机</span>
          </li>
          <li class="pro_show">
            <img src="../../assets/img/hw.jpg" alt="">
            <span>华为手机</span>
          </li>
          <li class="pro_show">
            <img src="../../assets/img/hw.jpg" alt="">
            <span>华为手机</span>
          </li>
          <li class="pro_show">
            <img src="../../assets/img/hw.jpg" alt="">
            <span>华为手机</span>
          </li>
        </ul>
      </li>
      <li class="produt_list">
        <h4>热门分类</h4>
        <p><span class="peihang"><img src="../../assets/img/pei.png" alt="">排行榜<img src="../../assets/img/02.png" alt=""></span></p>
        <ul class="pro_show_list">
          <li class="pro_show">
            <img src="../../assets/img/hw.jpg" alt="">
            <span>华为手机</span>
          </li>
          <li class="pro_show">
            <img src="../../assets/img/hw.jpg" alt="">
            <span>华为手机</span>
          </li>
          <li class="pro_show">
            <img src="../../assets/img/hw.jpg" alt="">
            <span>华为手机</span>
          </li>
          <li class="pro_show">
            <img src="../../assets/img/hw.jpg" alt="">
            <span>华为手机</span>
          </li>
          <li class="pro_show">
            <img src="../../assets/img/hw.jpg" alt="">
            <span>华为手机</span>
          </li>
          <li class="pro_show">
            <img src="../../assets/img/hw.jpg" alt="">
            <span>华为手机</span>
          </li>
        </ul>
      </li>
      <li class="produt_list">
        <h4>厨房小店</h4>
        <ul class="pro_show_list">
          <li class="pro_show">
            <img src="../../assets/img/hw.jpg" alt="">
            <span>华为手机</span>
          </li>
          <li class="pro_show">
            <img src="../../assets/img/hw.jpg" alt="">
            <span>华为手机</span>
          </li>
          <li class="pro_show">
            <img src="../../assets/img/hw.jpg" alt="">
            <span>华为手机</span>
          </li>
          <li class="pro_show">
            <img src="../../assets/img/hw.jpg" alt="">
            <span>华为手机</span>
          </li>
          <li class="pro_show">
            <img src="../../assets/img/hw.jpg" alt="">
            <span>华为手机</span>
          </li>
          <li class="pro_show">
            <img src="../../assets/img/hw.jpg" alt="">
            <span>华为手机</span>
          </li>
        </ul>
      </li>
    </div>
</template>

<script>
    export default {
        name: "ClassProListItem"
    }
</script>

<style scoped>
  .produt_list{
    width: 100%;
    margin:.1rem 0;
    position: relative;
  }
  .produt_list h4{
    font-size: .14rem;
    line-height: .2rem;
    color: #333;
  }
  .peihang{
    position: absolute;
    right: .05rem ;
    top: .05rem;
    display: flex;
    font-size: .12rem;
    color: #848689;
  }
  .peihang img{
    width: .15rem;
    height: .15rem;
    margin: 0 .05rem;
  }
  .pro_show_list{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .1rem;
    flex-wrap: wrap;
  }
  .pro_show{
    padding-bottom:.15rem ;
    text-align: center;
  }
  .pro_show img{
    width: .7rem;
    height: .7rem;
  }
  .pro_show span{
    display: block;
    font-size: .12rem;
    color: #333;
    margin:.05rem 0;
  }
</style>
