import { debounce } from "@/common/utils";
import BackTop from "@/components/backTop/BackTop.vue";
// 等待图片加载完刷新scroll
export const imageLoadListenerMixin = {
  data() {
    return {
      imageLoadListner: null,
      newRefresh: null
    };
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.refresh, 50);
    this.imageLoadListner = () => {
      this.newRefresh();
    };
    this.$EventBus.$on("imageLoad", this.imageLoadListner);
  }
};

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    };
  },
  methods: {
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    }
  }
};
