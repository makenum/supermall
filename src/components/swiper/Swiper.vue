<template>
  <section :class="className">
    <swiper :options="options" v-if="items.length > 0">
      <swiper-slide v-for="(item, index) in items" :key="index">
        <slot name="content"></slot>
      </swiper-slide>
      <div
        class="swiper-pagination"
        v-if="options.pagination"
        slot="pagination"
      />
    </swiper>
  </section>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Swiper",
  props: {
    className: {
      type: String,
      default: ""
    },
    options: {
      type: Object,
      default() {
        return {
          loop: {
            type: Boolean,
            default: false
          },
          autoplay: {
            delay: 3000
          },
          effect: {
            type: String,
            default: "slide"
          },
          direction: {
            type: String,
            default: "horizontal"
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
          paginationType: {
            type: String,
            default: "bullets"
          },
          lazy: {
            type: Boolean,
            default: false
          }
        };
      }
    },
    items: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>
<style></style>
