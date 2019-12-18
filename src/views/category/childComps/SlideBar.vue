<template>
  <div class="slide-bar">
    <scroll
      class="slide-bar-height"
      :probeType="probeType"
      :listenScroll="listenScroll"
    >
      <template v-for="(item, index) in slideBarList">
        <div
          class="slide-bar-item"
          :key="index"
          :class="{ active: index === currentIndex }"
          @click="slideBarItemClick(index)"
        >
          {{ item.title }}
        </div>
      </template>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/scroll/Scroll.vue";

export default {
  name: "SlideBar",
  components: {
    Scroll
  },
  props: {
    slideBarList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      listenScroll: true,
      probeType: 3,
      currentIndex: 0
    };
  },
  methods: {
    slideBarItemClick(index) {
      this.currentIndex = index;
      this.$emit("click", index);
    }
  }
};
</script>
<style lang="less" scoped>
.slide-bar {
  width: 100%;
  &-height {
    width: 100px;
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    background-color: #f6f6f6;
    overflow: hidden;
  }
  &-item {
    width: 100px;
    height: 45px;
    font-size: 14px;
    color: #666666;
    text-align: center;
    line-height: 45px;
    position: relative;
    &.active {
      font-weight: 700;
      color: @color-primary;
      background-color: #ffffff;
      &:before {
        content: "";
        border-left: 3px solid @color-primary;
        width: 0;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
      }
    }
  }
}
</style>
