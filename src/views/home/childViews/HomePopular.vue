<template>
  <div class="popular">
    <h3 class="title">{{ title }}</h3>
    <div class="popular-list">
      <a
        href="https://act.mogujie.com/zzlx67"
        class="popular-list-item"
        v-for="item in popular"
        :key="item.iid"
      >
        <img :src="item.show.img" :alt="item.title" />
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
<style lang="less">
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
      img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 5px;
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
