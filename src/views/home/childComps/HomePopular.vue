<template>
  <div class="popular">
    <h3 class="title">{{ title }}</h3>
    <div class="popular-list">
      <a
        href="https://act.mogujie.com/zzlx67"
        class="popular-list-item"
        v-for="(item, index) in popular"
        :key="index"
      >
        <div class="thumb">
          <img :src="item.show.img" :alt="item.title" />
        </div>
        <p class="text">{{ item.title }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePopular",
  props: {
    title: {
      type: String,
      default: ""
    },
    popular: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style lang="less" scoped>
.popular {
  background-color: @color-white;
  padding-top: 15px;
  border-bottom: 10px solid @color-gutter;
  .title {
    font-size: 18px;
    text-align: center;
  }
  &-list {
    display: flex;
    flex-wrap: wrap;
    padding: 5px 0;
    &-item {
      width: 25%;
      margin: 10px 0;
      text-align: center;
      padding: 0 10px;
      .thumb {
        width: 70px;
        height: 70px;
        margin: 0 auto 5px;
        img {
          border-radius: 50%;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .text {
        font-size: 12px;
        .ellipsis();
        color: @color-med-gray;
      }
    }
  }
}
</style>
