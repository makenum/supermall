<template>
  <swiper v-if="banners.length > 0" :options="swiperOption" class="home-swiper">
    <swiper-slide v-for="(banner, index) in banners" :key="index">
      <a :href="banner.link">
        <img :src="banner.image" />
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    banners: {
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
.home-swiper {
  .swiper-slide {
    background-color: @color-white;
    padding-bottom: percentage(195/375);
    a {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
