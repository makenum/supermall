<template>
  <div class="home">
    <nav-bar type="primary">
      <h3 slot="center" class="title">购物街</h3>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
    <home-popular :popular="popular" title="本周流行"></home-popular>
    <tab-control :titles="titles" @tabClick="tabClick"></tab-control>
  </div>
</template>

<script>
import { getHomeMultidata, getHomePopularData } from "network/home";
import NavBar from "components/navbar/NavBar";
import TabControl from "components/tabControl/TabControl";

import HomeSwiper from "./childViews/HomeSwiper";
import HomeRecommend from "./childViews/HomeRecommend";
import HomePopular from "./childViews/HomePopular";

export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    HomeRecommend,
    HomePopular
  },
  data() {
    return {
      banners: [],
      recommends: [],
      popular: [],
      titles: ["流行", "新款", "精选"]
    };
  },
  created() {
    this._getHomeMultidata();
    this._getHomePopularData();
  },
  methods: {
    _getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    _getHomePopularData() {
      getHomePopularData().then(res => {
        const list = res.data.data.list;
        for (let index = 0; index < 8; index++) {
          this.popular.push(list[index]);
        }
      });
    },
    tabClick(index) {
      console.log(index);
    }
  }
};
</script>
<style lang="less">
.home {
  padding-top: 44px;
  padding-bottom: 49px;
  .swiper-pagination-bullet-active {
    background: @color-primary;
  }
  .navbar {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
}
</style>
