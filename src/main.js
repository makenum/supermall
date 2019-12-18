import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// font
import "@/assets/fonts.css";

// fastclick
import FastClick from "fastclick";
if ("addEventListener" in document) {
  document.addEventListener(
    "DOMContentLoaded",
    function() {
      FastClick.attach(document.body);
    },
    false
  );
}

// swiper
import "swiper/dist/css/swiper.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
Vue.use(VueAwesomeSwiper);

// toast
import "vue2-toast/lib/toast.css";
import Toast from "vue2-toast";
Vue.use(Toast, {
  type: "center",
  duration: 2000,
  wordWrap: true
});

// lazyload
import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload, {
  preLoad: 1,
  loading: require("./assets/img/placeholder.png")
});

// vue过滤器
import * as filter from "@/common/filter";
// 导出的是对象，可以直接通过 key 和 value 来获得过滤器的名和过滤器的方法
Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key]);
});

// 事件总线
Vue.prototype.$EventBus = new Vue();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
