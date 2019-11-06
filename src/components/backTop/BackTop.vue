<template>
  <Fade>
    <div class="back-top">
      <img src="~@/assets/img/top.png" alt="返回顶部" />
    </div>
  </Fade>
</template>

<script>
import Fade from "@/components/animation/Fade.vue";
export default {
  name: "BackTop",
  components: {
    Fade
  }
};
</script>
<style lang="less">
.back-top {
  position: fixed;
  right: 8px;
  bottom: 55px;
  width: 43px;
  height: 43px;
}
</style>
