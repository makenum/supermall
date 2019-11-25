<template>
  <div class="recommend">
    <a
      :href="item.link"
      class="recommend-item"
      v-for="(item, index) in recommends"
      :key="index"
    >
      <div class="thumb">
        <img v-lazy="item.image" alt="item.title" />
      </div>
      <p class="title">{{ item.title }}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style lang="less" scoped>
.recommend {
  background-color: @color-white;
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 20px 0 20px;
  margin-bottom: 10px;
  &-item {
    flex: 1;
    color: @color-med-gray;
    .thumb {
      width: 70px;
      height: 70px;
      margin: 0 auto 10px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
      }
    }
  }
}
</style>
