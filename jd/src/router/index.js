import Vue from 'vue'
import Router from 'vue-router'
import JdIndex from "../pages/JdIndex"
// import ClassHead from "../pages/ClassHead"
import JdClass from "../pages/JdClass"
import JdPing from "../pages/JdPing"
import ShopCart from "../pages/ShopCart"
import ShopInfo from "../pages/ShopInfo"
import Login from "../pages/Login"
import ShopList from "../pages/ShopList"
import ApartmentTitle from "../pages/ApartmentTitle"


Vue.use(Router)

export default new Router({
  routes: [
    // {path:"/",redirect:"JdIndex"},//首页跳转到shopList
    // {path:"news",component:"/news"}news为首页
    // {path:"/cart",component:ShopCart},  // 页面中 <a href="#/cart?id=1"
    // {path:"/cart",component:ShopCart},
    { //首页
      path:"/",
      name:"JdIndex",
      component:JdIndex
    },
    {
      path:"/apart",
      name:"ApartmentTitle",
      component:ApartmentTitle
    },

    { //商品分类
      path:"/class",
      name:"JdClass",
      component:JdClass,
      children:[
        //头部
        // {
        //   path:"head",
        //   name:"JdHead",
        //   component:"ClassHead"
        // },
      ]
    },
    { //9.9拼购
      path:"/ping",
      name:"JdPing",
      component:JdPing
    },
    {    //商品详情
      path:"/info",
      component:ShopInfo
    },
    { //商品列表
      path:"/shopList",
      name:"shoplist",
      component:ShopList

    },
    { //购物车
      path: "/cart",
      name: "cart",
      component: ShopCart
    },
    { //登录
      path:"/login",
      name:"login",
      component:Login
    },
  ]

})
