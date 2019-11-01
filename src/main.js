import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "assets/fonts.css";
import "swiper/dist/css/swiper.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
import VueLazyload from "vue-lazyload";

Vue.use(VueAwesomeSwiper);
Vue.use(VueLazyload, {
  preLoad: 1.3, //预加载的宽高比
  error: require("assets/img/placeholder.png"), //图片加载失败时使用的图片源
  loading: require("assets/img/loading.svg"), //图片加载的路径
  attempt: 3, //尝试加载次数
  observer: true
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
