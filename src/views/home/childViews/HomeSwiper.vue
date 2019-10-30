<template>
  <swiper v-if="banners.length > 0" :options="swiperOption">
    <swiper-slide v-for="(banner, index) in banners" :key="index">
      <a :href="banner.link">
        <img :src="banner.image" :alt="banner.title" />
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
.swiper-slide {
  a {
    display: block;
    img {
      width: 100%;
    }
  }
}
</style>
