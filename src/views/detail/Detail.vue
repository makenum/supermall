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

import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailComment from "./childComps/DetailComment.vue";
import GoodsList from "@/components/goods/GoodsList.vue";

export default {
  name: "Detail",
  mixins: [imageLoadListenerMixin, backTopMixin],
  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailComment,
    GoodsList
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
      calcScrollHeight: []
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
        const data = res.result;
        this.topImages = data.itemInfo.topImages;
        this.goods = new Goods(
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
        this.commentInfo = data.rate.list[0];
      });
    },
    _getRecommend() {
      getRecommend().then(res => {
        this.recommend = res.data.list;
      });
    },
    onTabClick(index) {
      this.$refs.scroll.scrollTo(0, -this.calcScrollHeight[index], 200);
    },
    imageLoaded() {
      this.$refs.scroll.refresh();
      this.$nextTick(() => {
        this.calcScrollHeight.push(0);
        this.calcScrollHeight.push(this.$refs.param.$el.offsetTop);
        this.calcScrollHeight.push(this.$refs.comment.$el.offsetTop);
        this.calcScrollHeight.push(this.$refs.recommend.$el.offsetTop);
        // console.log(this.calcScrollHeight);
      });
    },
    onScroll(pos) {
      let y = Math.abs(pos.y);
      this.isShowBackTop = y >= 500;
      for (let i = 0; i++; i < this.calcScrollHeight.length) {
        // if (this.calcScrollHeight[i] === y) {
        //   console.log(i);
        //   this.$refs.navbar.currentIndex = i;
        // }
      }
    }
  }
};
</script>
<style lang="less" scoped>
.detail {
  height: 100vh;
  position: relative;
  .back-top {
    bottom: 8px;
  }
  .wrapper {
    z-index: 10;
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
}
</style>
