<template>
  <swiper v-if="banners.length > 0" :options="swiperOption">
    <swiper-slide v-for="(banner, index) in banners" :key="index">
      <a :href="banner.link">
        <img :data-src="banner.image" class="swiper-lazy" />
        <div class="swiper-lazy-preloader"></div>
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
        lazy: true,
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
  padding-bottom: percentage(390/750);
  a {
    background-color: #fff;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
    }
  }
}
.swiper-lazy-preloader {
  width: 44px;
  height: 44px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -22px;
  margin-top: -22px;
  animation: none;
  &:after {
    background-image: none;
    background-color: @color-primary;
    mask-image: url("~assets/img/loading.svg");
    mask-position: center center;
    mask-size: contain;
  }
}
.swiper-pagination-bullets {
  bottom: 5px;
}
</style>
