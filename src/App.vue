<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <tab-bar v-if="showTabBar"></tab-bar>
  </div>
</template>
<script>
import TabBar from "@/components/tabbar/TabBar.vue";
export default {
  name: "App",
  components: {
    TabBar
  },
  computed: {
    showTabBar() {
      return !this.$route.meta.hideTabBar;
    }
  }
};
</script>

<style lang="less">
#app {
  .swiper-lazy-preloader {
    width: 44px;
    height: 44px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -22px;
    margin-top: -22px;
    animation: none;
    &:after {
      background-image: none;
      background-color: @color-primary;
      mask-image: url("~@/assets/img/loading.svg");
      mask-position: center center;
      mask-size: contain;
    }
  }

  .swiper-pagination-bullet-active {
    background: @color-primary;
  }

  .swiper-pagination-bullets {
    outline: none;
    bottom: 5px;
  }
}
</style>
