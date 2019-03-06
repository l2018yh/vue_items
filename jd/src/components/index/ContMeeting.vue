<template>
    <div>
      <!--年货榜单-->
      <div class="billboard">
        <div class="nian_bang">
          <a href="##"><img src="../../assets/img/nav02.jpg" alt=""></a>
        </div>
        <ul class="nian_bang_list">
          <li class="nian_bang_li_b">
            <a href="##"><img src="../../assets/img/pen.jpg" alt=""></a>
            <h4>硬件榜</h4>
            <span>健步如飞</span>

          <li class="nian_bang_li_b">
            <a href="##"><img src="../../assets/img/pen.jpg" alt=""></a>
            <h4>硬件榜</h4>
            <span>健步如飞</span>
          </li>
          <li class="nian_bang_li_b">
            <a href="##"><img src="../../assets/img/pen.jpg" alt=""></a>
            <h4>硬件榜</h4>
            <span>健步如飞</span>
          </li>
          <li class="nian_bang_li_b">
            <a href="##"><img src="../../assets/img/pen.jpg" alt=""></a>
            <h4>硬件榜</h4>
            <span>健步如飞</span>
          </li>
        </ul>
      </div>
      <!--主会场-->
      <div class="main_place">
        <div class="huichang">
          <a href="##"><img src="../../assets/img/huic.jpg" alt=""></a>
        </div>
        <ul class="nian_bang_list main_room_list">
          <li class="nian_bang_li_b nian_bang_li_a">
            <a href="##"><img src="../../assets/img/pen.jpg" alt=""></a>
            <h4>硬件榜</h4>
            <span>健步如飞</span>
          </li>
          <li class="nian_bang_li_b nian_bang_li_a">
            <a href="##"><img src="../../assets/img/pen.jpg" alt=""></a>
            <h4>硬件榜</h4>
            <span>健步如飞</span>
          </li>
          <li class="nian_bang_li_b nian_bang_li_a">
            <a href="##"><img src="../../assets/img/pen.jpg" alt=""></a>
            <h4>硬件榜</h4>
            <span>健步如飞</span>
          </li>
          <li class="nian_bang_li_b nian_bang_li_a">
            <a href="##"><img src="../../assets/img/pen.jpg" alt=""></a>
            <h4>硬件榜</h4>
            <span>健步如飞</span>
          </li>
          <li class="nian_bang_li_b nian_bang_li_a">
            <a href="##"><img src="../../assets/img/pen.jpg" alt=""></a>
            <h4>硬件榜</h4>
            <span>健步如飞</span>
          </li>
          <li class="nian_bang_li_b nian_bang_li_a">
            <a href="##"><img src="../../assets/img/pen.jpg" alt=""></a>
            <h4>硬件榜</h4>
            <span>健步如飞</span>
          </li>
          <li class="nian_bang_li_b nian_bang_li_a">
            <a href="##"><img src="../../assets/img/pen.jpg" alt=""></a>
            <h4>硬件榜</h4>
            <span>健步如飞</span>
          </li>
          <li class="nian_bang_li_b nian_bang_li_a">
            <a href="##"><img src="../../assets/img/pen.jpg" alt=""></a>
            <h4>硬件榜</h4>
            <span>健步如飞</span>
          </li>

        </ul>
      </div>
    </div>
</template>

<script>

    export default {
        name: "ContMeeting"
    }
</script>

<style scoped>
  /*年货榜单*/
  .billboard{
    width: 100%;
  }
  .nian_bang{
    width: 100%;
    height: 1.15rem;
  }
  .nian_bang a{
    display: block;
    width: 100%;
  }
  .nian_bang img{
    width: 100%;
    height: 100%;
  }
  .nian_bang_list{
    width: 100%;
    display: -webkit-flex;
    justify-content: space-between;
    align-items: center;
  }
  .nian_bang_li_b{
    width: 24.5%;
    height: 1.4rem;
    background: url(../../assets/img/bg.png) no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .nian_bang_li_b a{
    display: block;
    width: .69rem;
    height: .69rem;
    margin: .1rem 0;
  }
  .nian_bang_li_b img{
    width: 100%;
    height: 100%;
  }
  .nian_bang_li_b h4{
    margin-top: .12rem;
    font-size: .16rem;
    color: #fff;
  }
  .nian_bang_li_b span{
    display: block;
    font-size:.12em;
    margin-bottom: .05rem;
    color: #fff;
  }
  /*主会场*/
  .main_place{
    width: 100%;
  }
  .huichang{
    width:3.75rem;
    height: .35rem;
  }
  .huichang img{
    width: 100%;
    height: 100%;
  }
  .main_room_list{
    flex-wrap: wrap;
  }
  .nian_bang_li_a{
    background: url(../../assets/img/hui.png) no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }
</style>
