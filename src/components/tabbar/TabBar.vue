<template>
  <ul class="tabbar">
    <tab-bar-item path="/home">
      <i slot="icon" class="icon-home"></i>
      <i slot="icon-active" class="icon-home_active"></i>
      <span slot="text">首页</span>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <i slot="icon" class="icon-category"></i>
      <i slot="icon-active" class="icon-category_active"></i>
      <span slot="text">分类</span>
    </tab-bar-item>
    <tab-bar-item path="/shopcart">
      <i slot="icon" class="icon-shopcart"></i>
      <i slot="icon-active" class="icon-shopcart_active"></i>
      <span slot="text">购物车</span>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <i slot="icon" class="icon-profile"></i>
      <i slot="icon-active" class="icon-profile_active"></i>
      <span slot="text">我的</span>
    </tab-bar-item>
  </ul>
</template>

<script>
import TabBarItem from "@/components/tabbar/TabBarItem.vue";
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
