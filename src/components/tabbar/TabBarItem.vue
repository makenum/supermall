<template>
  <li class="tabbar-item" @click="itemClick" :class="{ active: isActive }">
    <div v-if="!isActive" class="icon"><slot name="icon"></slot></div>
    <div v-else class="icon"><slot name="icon-active"></slot></div>
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
  .icon {
    width: 24px;
    height: 24px;
    margin-bottom: 2px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &.active {
    color: @color-primary;
  }
}
</style>
