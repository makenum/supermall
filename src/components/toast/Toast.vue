<template>
  <div class="toast" v-show="show">
    <i class="toast-icon" v-if="icon"></i>
    <p class="toast-message" v-text="message"></p>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    message: {
      type: String,
      default: ""
    },
    show: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="less" scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  padding: 8px 10px;
  border-radius: 3px;
}
</style>
