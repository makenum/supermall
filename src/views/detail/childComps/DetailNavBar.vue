<template>
  <nav-bar>
    <button slot="left" class="back" @click="backClick">
      <i class="icon-back"></i>
    </button>
    <div slot="center" class="menu">
      <div
        class="menu-item"
        v-for="(item, index) in menu"
        :key="index"
        @click="menuClick(index)"
        :class="{ active: currentIndex === index }"
      >
        {{ item }}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "@/components/navbar/NavBar.vue";
export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      menu: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    menuClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
    backClick() {
      this.$router.back();
    }
  }
};
</script>
<style lang="less" scoped>
.menu {
  display: flex;
  &-item {
    flex: 1;
    text-align: center;
    font-size: 14px;
    &.active {
      color: @color-primary;
    }
  }
}
</style>
