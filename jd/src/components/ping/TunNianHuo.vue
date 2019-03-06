<template>
  <div>
    <!--囤年货-->
    <ul class="tun">
      <li>
        <img src="../../assets/img/tun01.jpg" alt="">
      </li>
      <li>
        <img src="../../assets/img/tun02.jpg" alt="">
      </li>
      <li>
        <img src="../../assets/img/tun03.jpg" alt="">
      </li>
    </ul>
    <!--今日必拼-->
    <tun-day-need></tun-day-need>
    <!--一元疯抢-->
    <one-qiang></one-qiang>

  </div>
</template>

<script>
  import TunDayNeed from "./TunDayNeed"
  import OneQiang from "./OneQiang"
    export default {
        name: "TunNianHuo",
        components:{
          TunDayNeed,
          OneQiang
        }
    }
</script>

<style scoped>
  /*囤年货*/
  .tun{
    width: 100%;
    height: .8rem;
    background: #fff;
    display: -webkit-flex;
  }
  .tun li{
    width: 30%;
  }
  .tun li:nth-of-type(2){
    width: 40%;
  }
  .tun li img{
    width: 100%;
    height: 100%;
  }

</style>
