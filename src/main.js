import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/fonts.css";
import "swiper/dist/css/swiper.css";
import VueAwesomeSwiper from "vue-awesome-swiper";

// filter
import * as filter from "@/common/filter";
// 导出的是对象，可以直接通过 key 和 value 来获得过滤器的名和过滤器的方法
Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key]);
});

Vue.use(VueAwesomeSwiper);
Vue.prototype.$EventBus = new Vue();
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
