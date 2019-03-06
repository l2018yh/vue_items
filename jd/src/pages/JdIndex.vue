<template>
    <div class="content">
      <index-head></index-head>
         <index-content :shopImg ="indexShop"></index-content>
      <index-footer></index-footer>
    </div>
</template>

<script>
    import IndexHead from "../components/index/IndexHead"
    import IndexContent from "../components/index/IndexContent"
    import IndexFooter from "./IndexFooter"
    import JdIndex from "../apis/JdIndex";
    // import
    export default {
        name: "JdIndex",
        components: {
          IndexHead,
          IndexContent,
          IndexFooter
        },
        data(){
          return {
            indexShop:[]
          }
        },
        methods:{
            _initdata(){
              JdIndex.indexdata((data)=>{
                this.indexShop = data;
                console.log(this.indexShop)
              })
            }
        },
        created(){
          this._initdata()
        },

    }
</script>

<style scoped>
  .content{
      height: 100%;
      display: -webkit-flex;
      flex-direction: column;

  }
</style>
