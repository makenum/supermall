import Vue from "vue";
import VueRouter from "vue-router";

// 使用箭头函数import引入,可以实现路由懒加载
const Home = () => import("@/views/home/Home");
const Category = () => import("@/views/category/Category");
const Cart = () => import("@/views/cart/Cart.vue");
const Profile = () => import("@/views/profile/Profile.vue");
const Detail = () => import("@/views/detail/Detail.vue");

Vue.use(VueRouter);

// 定义路由
const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/category",
    name: "category",
    component: Category
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile
  },
  {
    path: "/detail/:iid",
    name: "detail",
    component: Detail,
    meta: {
      hideTabBar: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
