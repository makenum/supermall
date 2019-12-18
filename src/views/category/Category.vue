<template>
  <div class="category">
    <nav-bar type="primary">
      <h3 class="title" slot="center">商品分类</h3>
    </nav-bar>
    <slide-bar
      :slide-bar-list="slideBarList"
      @slideBarItemClick="slideBarItemClick"
    ></slide-bar>
    <scroll
      class="scroll-height"
      :probeType="probeType"
      :listenScroll="listenScroll"
    >
      <subcategory :subcategory-list="subcategoryList"></subcategory>
    </scroll>
  </div>
</template>

<script>
import { getCategory, getSubcategory } from "@/network/category";
import Scroll from "@/components/scroll/Scroll.vue";
import NavBar from "@/components/navbar/NavBar.vue";
import SlideBar from "./childComps/SlideBar.vue";
import Subcategory from "./childComps/Subcategory.vue";

export default {
  name: "Category",
  components: {
    Scroll,
    NavBar,
    SlideBar,
    Subcategory
  },
  data() {
    return {
      listenScroll: true,
      probeType: 3,
      slideBarList: [],
      subcategoryList: [],
      dataList: []
    };
  },
  created() {
    this._getCategory();
  },
  methods: {
    _getCategory() {
      getCategory().then(res => {
        console.log(res);
        const self = this;
        self.slideBarList = res.data.category.list;
        if (self.slideBarList.length > 0) {
          self._getSubcategory(self.slideBarList[0].maitKey, 0);
        }
      });
    },
    _getSubcategory(key, index) {
      getSubcategory(key).then(res => {
        this.dataList[index] = res.data.list;
        if (this.dataList.length > 1) {
          this.subcategoryList = this.dataList[index];
        } else {
          this.subcategoryList = this.dataList[0];
        }
      });
    },
    slideBarItemClick(index) {
      console.log(index);
    }
  }
};
</script>
<style lang="less">
.category {
  height: 100vh;
  background-color: @color-white;
}
.scroll-height {
  position: fixed;
  left: 100px;
  right: 0;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
</style>
