<template>
  <li class="tabbar-item" @click="itemClick" :class="{ active: isActive }">
    <div v-if="!isActive"><slot name="icon"></slot></div>
    <div v-else><slot name="icon-active"></slot></div>
    <p><slot name="text"></slot></p>
  </li>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: {
      type: String,
      default: ""
    }
  },
  computed: {
    isActive() {
      return this.$route.path === this.path;
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    }
  }
};
</script>
<style lang="less">
.tabbar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  [class^="icon-"],
  [class*=" icon-"] {
    font-size: 24px;
  }
  &.active {
    color: @color-primary;
  }
}
</style>
