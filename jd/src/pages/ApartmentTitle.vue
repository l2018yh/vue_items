<template>
  <div class="all">
    <h3>部门职位变化</h3>
    <div id="bumen"></div>
    <table>
      <tr>
        <td>部门</td>
        <td>男性员工</td>
        <td>女性员工</td>
        <td>人员变动</td>
        <td>数据编辑</td>
      </tr>
      <tr v-for="(i,index) in allData" :key="index" class="oneData">
        <td>{{i.bumen}}</td>
        <td>{{i.data[0].data}}</td>
        <td>{{i.data[1].data}}</td>
        <td>{{i.data[2].data}}</td>
        <td class="ad"><span @click="addGoods(index)">编辑</span><span class="del" @click="deleteData(index)">删除</span></td>
      </tr>
    </table>
    <div class="alert" v-show="false">
      <p>部门：<input type="text" v-model="bumen"></p>
      <p>男性：<input type="text" v-model="man"></p>
      <p>女性：<input type="text" v-model="woman"></p>
      <p>人员：<input type="text" v-model="cha"></p>
      <p class="choose">
        <button @click="submit">提交</button>
        <button @click="cancle">取消</button>
      </p>
    </div>
  </div>
</template>

<script>

import ApartmentApi from "../../../Apis/ApartmentApi";
// import $ from 'jquery'

export default {
  name: "ApartmentTitle",
  mounted(){
    this.initData();
  },
  data(){
    return{
      index:0,
      man:"",
      woman:"",
      bumen:"",
      cha:"",
      allData:[],
      apartData:[],
      manData:[],
      womanData:[],
      perdata:[]
    }
  },
  methods:{
    initData(){
      ApartmentApi.getData(this.handelGetData);
    },
    handelGetData(res){
      res = res.data;
      this.allData = res.data;
      console.log(this.allData)
      this.initChart();
    },
    initChart(){
      var myChart = this.$echarts.init(document.getElementById('bumen'));
      myChart.setOption(this.handelEchars());
      setTimeout(function(){
        window.onresize = function(){
          myChart.resize();
        }
      })
    },
    handelEchars(){
      this.allData.forEach((val,key)=>{
        this.apartData.push(val.bumen);
        this.manData.push(val.data[0].data);
        this.womanData.push(val.data[1].data);
        this.perdata.push(val.data[2].data);
      })
      let option =
        {
          backgroundColor:"transparent",
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          grid: {
            left: '0%',
            right: '0%',
            top:'30%',
            bottom:'10%',
            containLabel: true
          },
          legend: {
            top:'10%',
            itemWidth: 16,
            itemHeight: 16,
            itemGap: 16,
            data:[{
              name:'男性员工',
              icon:"rect",
              textStyle: {
                color: '#15fed1',
                fontSize:"20"
              }
            },{
              name:'女性员工',
              icon:"rect",
              textStyle: {
                color: '#fca805',
                fontSize:"20"
              }
            },
              {
                name:'人员变动',
                icon:"rect",
                textStyle: {
                  color: '#ff6261',
                  fontSize:"20"
                }
              },
            ],
            textStyle:{
              color:"#fff"
            }
          },
          xAxis: [
            {
              type: 'category',
              data: this.apartData,
              axisLabel: {
                show: true,
                interval: 0,
                textStyle: {
                  color: '#fff',
                  fontSize:'16'
                }
              },
              axisTick: {
                show: false
              },
              axisLine: {show:false}
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '单位：人',
              min: 0,
              max: 1000,
              interval: 200,
              axisLabel: {
                formatter: '{value}',
                textStyle:{
                  color:"#fff",
                  fontSize:"20"
                },
              },
              nameTextStyle: {
                fontSize: 20,
                color:'white'
              },
              axisTick: {
                show: false
              },
              axisLine: {show:false},
            },
            {
              type: 'value',
              name: '单位：%',
              min: 0,
              max: 100,
              interval: 20,
              axisLabel: {
                formatter: '{value}',
                textStyle:{
                  color:"white",
                  fontSize:"20"
                },
              },
              nameTextStyle: {
                fontSize: 20,
                color:'white'
              },
              axisTick: {
                show: false
              },
              axisLine: {show:false}
            }
          ],
          series: [
            {
              name:'男性员工',
              type:'bar',
              barWidth: 30,
              barGap:'100%',
              data:this.manData,
              itemStyle:{
                normal:{
                  color:'#0b7062',
                  borderColor:'#11ccaa'
                }
              },
            },
            {
              name:'女性员工',
              type:'bar',
              barWidth: 30,
              barGap:'70%',
              data:this.womanData,
              itemStyle:{
                normal:{
                  color:'#ca8e15',
                  borderColor:"#fca805"
                }
              },
            },
            {
              name:'人员变动',
              type:'line',
              yAxisIndex: 1,
              data:this.perdata,
              itemStyle:{
                normal:{
                  color:'#ff0c0c'
                }
              },
            }
          ]
        }
      return option;
    },
    addGoods(index){
      this.index = index;
      this.bumen = this.allData[index].bumen;
      this.man   = this.allData[index].data[0].data;
      this.woman = this.allData[index].data[1].data;
      this.cha   = this.allData[index].data[2].data;
      $(".alert").fadeIn();

    },
    submit(){
      // this.allData.splice(this.index);
        this.allData[this.index].bumen         =  this.bumen;
        this.allData[this.index].data[0].data  =  this.man;
        this.allData[this.index].data[1].data  =  this.woman;
        this.allData[this.index].data[2].data  =  this.cha;
        $(".alert").fadeOut();
        this.apartData = [];
        this.manData = [];
        this.womanData = [];
        this.perdata = [];
        this.initChart();
      },
    deleteData(index){
      this.allData.splice(index,1);
      this.apartData = [];
      this.manData = [];
      this.womanData = [];
      this.perdata = [];
      this.initChart();
    },
    cancle(){
      $(".alert").fadeOut();
    }
  }
}
</script>

<style scoped lang="less">
  .all{
    width: 100%;
    padding:60px;
    box-sizing: border-box;
  }
  h3{
    height:16px;
    font-size: 32px;
    margin:10px 10px 0;
    color:white;
  }
  #bumen{
    height:550px;
  }
  table{
    width: 100%;
    color:white;
    tr{
      font-size: 16px;
      border-bottom:1px solid #ccc;
      td{
        padding:8px 0;
        text-align: center;
      }
      .ad{
        span{
          margin:0 5px;
          width: 45px;
          line-height: 23px;
          border-radius: 5px;
          border:1px solid darkgray;
          font-size: 12px;
          display: inline-block;
        }
        span:nth-child(2){
          border:1px solid plum;
          background: darkred;
          color:white;
        }
      }
    }
    tr:nth-child(2n){
      /*background: #eee;*/
    }
    tr:nth-child(2n-1){
      /*background: white;*/
    }
  }
  .alert{
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    right: 0;
    margin: auto;
    padding:20px;
    background: black;
    width: 250px;
    height: 300px;
    display: flex;
    justify-content: center;
    color:white;
    align-items: flex-start;
    flex-direction: column;
    font-size: 12px;
    border: 1px solid white;
    border-radius: 10px;
    box-shadow: 3px 3px 20px skyblue ;
    p{
      margin:20px 10px;
      input{
        margin-top: -3px;
        height: 20px;
        border:0;
        border-radius:10px;
        outline: none;
        text-indent: 10px;
      }
    }
    .choose{
      align-self: center;
      button{
        width: 80px;
        height: 30px;
        font-size: 12px;
        background: darkred;
        border:0;
        margin:0 10px;
        border-radius: 15px;
        color:white;
        outline: none;
      }
    }

  }
</style>
