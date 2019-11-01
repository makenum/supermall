<template>
  <div class="home">
    <nav-bar type="primary">
      <h3 slot="center" class="title">购物街</h3>
    </nav-bar>
    <tab-control
      :titles="tabTitles"
      @tabClick="tabClick"
      v-show="isTabFixed"
      ref="tabControl2"
      class="sticky-tab-control"
    ></tab-control>
    <scroll
      ref="scroll"
      class="wrapper"
      :probeType="probeType"
      :listenScroll="listenScroll"
      :pullup="true"
      @scroll="onScroll"
      @pullingUp="onPullingUp"
    >
      <div class="content">
        <home-swiper :banners="banners"></home-swiper>
        <home-recommend :recommends="recommends"></home-recommend>
        <home-popular :popular="popular" title="本周流行"></home-popular>
        <tab-control
          :titles="tabTitles"
          @tabClick="tabClick"
          ref="tabControl1"
        ></tab-control>
        <goods-list :goods="showGoods"></goods-list>
      </div>
    </scroll>
    <!-- 组件必须带事件修饰符 -->
    <back-top v-if="isShowBackTop" @click.native="backTopClick"></back-top>
  </div>
</template>

<script>
import { debounce } from "common/utils";
import {
  getHomeMultidata,
  getHomePopularData,
  getHomeGoods
} from "network/home";

import NavBar from "components/navbar/NavBar";
import TabControl from "components/tabControl/TabControl";
import GoodsList from "components/goods/GoodsList";
import BackTop from "components/backTop/BackTop";
import Scroll from "components/scroll/Scroll";

import HomeSwiper from "./childViews/HomeSwiper";
import HomeRecommend from "./childViews/HomeRecommend";
import HomePopular from "./childViews/HomePopular";

export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    Scroll,
    BackTop,
    GoodsList,
    HomeSwiper,
    HomeRecommend,
    HomePopular
  },
  data() {
    return {
      tabTitles: ["流行", "新款", "精选"],
      tabCurrentIndex: 0,
      tabControlOffsetTop: 0,
      isTabFixed: false,
      isShowBackTop: false,
      listenScroll: true,
      probeType: 3,
      banners: [],
      recommends: [],
      popular: [],
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
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.$Lazyload.$on("loaded", () => {
      refresh();
    });
  },
  updated() {
    this.tabControlOffsetTop = this.$refs.tabControl1.$el.offsetTop;
  },
  methods: {
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
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },

    // 获取轮播、推荐数据
    _getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    // 获取流行前8条数据
    _getHomePopularData() {
      getHomePopularData().then(res => {
        const list = res.data.list;
        for (let index = 0; index < 8; index++) {
          this.popular.push(list[index]);
        }
      });
    },
    // 获取商品数据
    _getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    },
    // bscroll滚动事件
    onScroll(pos) {
      let y = Math.abs(pos.y);
      this.isShowBackTop = y >= 500;
      this.isTabFixed = y >= this.tabControlOffsetTop;
    },
    onPullingUp() {
      this._getHomeGoods(this.currentType);
    },
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    }
  }
};
</script>
<style lang="less">
.home {
  height: 100vh;
  position: relative;
  .swiper-pagination-bullet-active {
    background: @color-primary;
  }
  .sticky-tab-control {
    position: relative;
    z-index: 10;
  }
  .wrapper {
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
    overflow: hidden;
  }
}
</style>
