<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(item, index) in titles"
      :key="index"
      @click="itemClick(index)"
      :class="{ active: index === currentIndex }"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },

  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    }
  }
};
</script>
<style lang="less">
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: @color-white;
  &-item {
    flex: 1;
    span {
      padding: 5px;
    }
    &.active {
      color: @color-primary;
      span {
        border-bottom: 3px solid @color-tint;
      }
    }
  }
}
</style>
