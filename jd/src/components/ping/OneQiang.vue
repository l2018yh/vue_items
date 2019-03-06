<template>
  <!--一元疯狂抢购-->
  <div class="qiang">
    <ul class="qiang_pro">
      <li>
        <img src="../../assets/img/yiyuan01.jpg" alt="">
      </li>
      <li>
        <img src="../../assets/img/yiyuan02.jpg" alt="">
      </li>
      <li>
        <img src="../../assets/img/yiyuan01.jpg" alt="">
      </li>
      <li>
        <img src="../../assets/img/yiyuan01.jpg" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "OneQiang"
    }
</script>

<style scoped>
  /*一元疯狂抢购*/
  .qiang{
    width: 100%;
    height: 2.7rem;
    background: url(../../assets/img/bd174155243630c8.gif);
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    position: relative;
  }
  .qiang_pro{
    display: -webkit-flex;
    justify-content: space-between;
    position: absolute;
    bottom: .2rem;
    left: 0;
  }
  .qiang_pro li{
    width: 25%;
    height: 1.3rem;
  }
  .qiang_pro li img{
    width: 100%;
    height: 100%;
  }
</style>
