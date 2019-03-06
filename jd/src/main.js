// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/css/iconfont.css"
import "./assets/css/public.css"
import "./assets/js/jquery-1.8.3"
import "../node_modules/swiper/dist/css/swiper.css"
import "../node_modules/swiper/dist/js/swiper"
// import "https://unpkg.com/vue-lazyload/vue-lazyload.js"


Vue.config.productionTip = false
// Vue.use(VueLazyload)


new Vue({
  el: '#app',
  router,
  // components: { App },
  render(h){
    return h(App)
  },
  template: '<App/>'
})
