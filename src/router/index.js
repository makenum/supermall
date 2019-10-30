import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "views/home/Home")
  },
  {
    path: "/category",
    name: "category",
    component: () =>
      import(/* webpackChunkName: "category" */ "views/category/Category")
  },
  {
    path: "/shopcart",
    name: "shopcart",
    component: () =>
      import(/* webpackChunkName: "shopcart" */ "views/shopcart/ShopCart.vue")
  },
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "views/profile/Profile.vue")
  },
  {
    path: "/detail",
    name: "detail",
    component: () =>
      import(/* webpackChunkName: "detail" */ "views/detail/Detail.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
