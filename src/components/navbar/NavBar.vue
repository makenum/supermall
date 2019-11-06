<template>
  <div class="navbar" :class="navbarType">
    <div class="navbar__left">
      <slot name="left"></slot>
    </div>
    <div class="navbar__center">
      <slot name="center"></slot>
    </div>
    <div class="navbar__right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  computed: {
    navbarType() {
      return `navbar--${this.type}`;
    }
  }
};
</script>
<style lang="less">
.navbar {
  display: flex;
  height: 44px;
  line-height: 44px;
  &__left,
  &__right {
    width: 25%;
  }
  &__center {
    flex: 1;
    .title {
      text-align: center;
      font-size: 15px;
    }
  }
  .back {
    width: 44px;
    height: 44px;
    background-color: transparent;
    font-size: 20px;
  }
  &--default {
    background-color: @color-white;
    color: @color-gray;
  }
  &--primary {
    background-color: @color-primary;
    color: @color-white;
  }
}
</style>
