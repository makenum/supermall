<template>
  <img :src="url" />
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      url: "./assets/img/loading.svg"
    };
  },
  mounted() {
    var newImg = new Image();
    newImg.src = this.src;
    newImg.onerror = () => {
      newImg.src = "./assets/img/placeholder.png";
    };
    newImg.onload = () => {
      // 图片加载成功后把地址给原来的img
      this.url = newImg.src;
    };
  }
};
</script>
