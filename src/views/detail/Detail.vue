<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll ref="scroll" class="wrapper" :probeType="3">
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailInfo="detailInfo" @imageLoaded="imageLoaded" />
      <detail-param-info :paramInfo="paramInfo" />
      <detail-comment :commentInfo="commentInfo" />
    </scroll>
  </div>
</template>

<script>
import { backTop } from "@/common/mixins/backtop";
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
export default {
  name: "Detail",
  mixins: [backTop],
  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailComment
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {}
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
  methods: {
    imageLoaded() {
      this.$refs.scroll.refresh();
    },
    _getDetail() {
      getDetail(this.iid).then(res => {
        console.log(res);
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
        console.log(res);
      });
    }
  }
};
</script>
<style lang="less" scoped>
.detail {
  height: 100vh;
  position: relative;
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
