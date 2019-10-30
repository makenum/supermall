<template>
  <div class="home">
    <nav-bar type="primary">
      <h3 slot="center" class="title">购物街</h3>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
    <home-popular :popular="popular" title="本周流行"></home-popular>
    <tab-control :titles="titles" @tabClick="tabClick"></tab-control>
    <goods-list :goods="showGoods"></goods-list>
  </div>
</template>

<script>
import { getHomeMultidata, getHomeGoods } from "network/home";
import NavBar from "components/navbar/NavBar";
import TabControl from "components/tabControl/TabControl";
import GoodsList from "components/goods/GoodsList";

import HomeSwiper from "./childViews/HomeSwiper";
import HomeRecommend from "./childViews/HomeRecommend";
import HomePopular from "./childViews/HomePopular";

export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    GoodsList,
    HomeSwiper,
    HomeRecommend,
    HomePopular
  },
  data() {
    return {
      banners: [],
      recommends: [],
      popular: [],
      titles: ["流行", "新款", "精选"],
      currentType: "pop",
      goods: {
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      }
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    this._getHomeMultidata();
    this._getHomePopularData();

    this._getHomeGoods("pop");
    this._getHomeGoods("new");
    this._getHomeGoods("sell");
  },
  methods: {
    // 获取轮播、推荐数据
    _getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    // 获取流行前8条数据
    _getHomePopularData() {
      getHomeGoods("pop", 1).then(res => {
        const list = res.data.data.list;
        for (let index = 0; index < 8; index++) {
          this.popular.push(list[index]);
        }
      });
    },
    // 获取商品数据
    _getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        const list = res.data.data.list;
        this.goods[type].list.push(...list);
        this.goods[type].page += 1;
      });
    },
    // 点击切换
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
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
  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }
}
</style>
