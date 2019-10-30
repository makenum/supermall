<template>
  <ul class="tabbar">
    <tab-bar-item path="/home">
      <img slot="icon" src="~assets/img/tabbar/home.svg" alt="" />
      <img slot="icon-active" src="~assets/img/tabbar/home_active.svg" alt="" />
      <span slot="text">首页</span>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="icon" src="~assets/img/tabbar/category.svg" alt="" />
      <img
        slot="icon-active"
        src="~assets/img/tabbar/category_active.svg"
        alt=""
      />
      <span slot="text">分类</span>
    </tab-bar-item>
    <tab-bar-item path="/shopcart">
      <img slot="icon" src="~assets/img/tabbar/shopcart.svg" alt="" />
      <img
        slot="icon-active"
        src="~assets/img/tabbar/shopcart_active.svg"
        alt=""
      />
      <span slot="text">购物车</span>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="icon" src="~assets/img/tabbar/profile.svg" alt="" />
      <img
        slot="icon-active"
        src="~assets/img/tabbar/profile_active.svg"
        alt=""
      />
      <span slot="text">我的</span>
    </tab-bar-item>
  </ul>
</template>

<script>
import TabBarItem from "components/tabbar/TabBarItem";
export default {
  name: "TabBar",
  components: {
    TabBarItem
  }
};
</script>

<style lang="less">
.tabbar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
}
</style>
