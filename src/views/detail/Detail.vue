<template>
  <div class="detail">
    <detail-nav-bar @tabClick="onTabClick" ref="navbar" />
    <scroll
      ref="scroll"
      class="wrapper"
      @scroll="onScroll"
      :probeType="probeType"
      :listenScroll="listenScroll"
    >
      <detail-swiper :topImages="topImages" />
      <detail-base-info :baseInfo="baseInfo" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info
        :detailInfo="detailInfo"
        @imageLoaded="imageLoaded"
        ref="goods"
      />
      <detail-param-info :paramInfo="paramInfo" ref="param" />
      <detail-comment :commentInfo="commentInfo" ref="comment" />
      <goods-list :goods="recommend" ref="recommend" />
    </scroll>
    <detail-footer-bar @addCart="addCart"></detail-footer-bar>
    <!-- 组件必须带事件修饰符 -->
    <back-top v-if="isShowBackTop" @click.native="backTopClick"></back-top>
  </div>
</template>

<script>
import { imageLoadListenerMixin, backTopMixin } from "@/common/mixins";
import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam
} from "@/network/detail";
import Scroll from "@/components/scroll/Scroll.vue";
import GoodsList from "@/components/goods/GoodsList.vue";

import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailComment from "./childComps/DetailComment.vue";
import DetailFooterBar from "./childComps/DetailFooterBar.vue";

export default {
  name: "Detail",
  mixins: [imageLoadListenerMixin, backTopMixin],
  components: {
    Scroll,
    GoodsList,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailComment,
    DetailFooterBar
  },
  data() {
    return {
      listenScroll: true,
      probeType: 3,
      iid: null,
      topImages: [],
      baseInfo: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      calcScrollY: [],
      currentIndex: 0
    };
  },
  created() {
    // 获取iid
    this.iid = this.$route.params.iid;
    // 请求详情页数据
    this._getDetail();
    // 请求推荐数据
    this._getRecommend();
  },
  destroyed() {
    this.$EventBus.$off("imageLoad", this.imageLoadListner);
  },
  methods: {
    _getDetail() {
      getDetail(this.iid).then(res => {
        console.log(res);
        const data = res.result;
        this.topImages = data.itemInfo.topImages;
        this.baseInfo = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        this.shop = new Shop(data.shopInfo);
        this.detailInfo = data.detailInfo;
        this.paramInfo = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );
        if (data.rate.list) {
          this.commentInfo = data.rate.list[0];
        }
      });
    },
    _getRecommend() {
      getRecommend().then(res => {
        this.recommend = res.data.list;
      });
    },
    onTabClick(index) {
      this.$refs.scroll.scrollTo(0, -this.calcScrollY[index], 200);
    },
    imageLoaded() {
      this.newRefresh();
      // this.$refs.scroll.refresh();
      this.calcScrollY.push(0);
      this.calcScrollY.push(this.$refs.param.$el.offsetTop);
      this.calcScrollY.push(this.$refs.comment.$el.offsetTop);
      this.calcScrollY.push(this.$refs.recommend.$el.offsetTop);
      // 添加一个最大数字
      this.calcScrollY.push(Number.MAX_VALUE);
      console.log(this.calcScrollY);
    },
    onScroll(pos) {
      let posY = Math.abs(pos.y);
      this.isShowBackTop = posY >= 500;
      // 计算高度
      let length = this.calcScrollY.length - 1;
      for (let i = 0; i < length; i++) {
        if (
          this.currentIndex !== i &&
          (posY >= this.calcScrollY[i] && posY < this.calcScrollY[i + 1])
        ) {
          this.currentIndex = i;
          this.$refs.navbar.currentIndex = this.currentIndex;
        }
      }
    },
    addCart() {
      //获取购物车需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.baseInfo.title;
      product.desc = this.baseInfo.desc;
      product.realPrice = this.baseInfo.realPrice;
      product.iid = this.iid;
      // 将商品添加到购物车
      this.$store.dispatch("addCart", product);
    }
  }
};
</script>
<style lang="less" scoped>
.detail {
  height: 100vh;
  position: relative;
  .navbar {
    position: relative;
    z-index: 10;
  }
  .back-top {
    bottom: 55px;
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
