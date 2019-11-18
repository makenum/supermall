<template>
  <div class="check-button" :class="{ active: isChecked }">
    <i class="icon-tick" v-show="isChecked"></i>
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default() {
        return false;
      }
    }
  }
};
</script>

<style lang="less">
.check-button {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid @color-deep-gray;
  display: flex;
  align-items: center;
  justify-content: center;
  &.active {
    background-color: @color-primary;
    border-color: @color-primary;
  }
}
</style>
