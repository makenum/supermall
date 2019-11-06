<template>
  <swiper
    v-if="topImages.length > 0"
    :options="swiperOption"
    class="detail-swiper"
  >
    <swiper-slide v-for="(item, index) in topImages" :key="index">
      <img :src="item" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  }
};
</script>
<style lang="less" scoped>
.detail-swiper {
  .swiper-slide {
    padding-bottom: percentage(300/375);
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
