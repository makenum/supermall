<template>
  <transition name="fade">
    <div class="back-top">
      <img src="~@/assets/img/top.png" alt="返回顶部" />
    </div>
  </transition>
</template>

<script>
export default {
  name: "BackTop"
};
</script>
<style lang="less">
.back-top {
  position: fixed;
  right: 8px;
  width: 43px;
  height: 43px;
  z-index: 99;
}
</style>
