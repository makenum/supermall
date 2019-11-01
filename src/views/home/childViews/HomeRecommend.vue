<template>
  <div class="recommend">
    <a
      :href="item.link"
      class="recommend-item"
      v-for="(item, index) in recommends"
      :key="index"
    >
      <img :src="item.image" alt="" />
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
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 20px 0 20px;
  border-bottom: 10px solid @color-gutter;
  &-item {
    flex: 1;
    color: @color-med-gray;
    img {
      width: 70px;
      height: 70px;
      margin-bottom: 10px;
    }
  }
}
</style>
