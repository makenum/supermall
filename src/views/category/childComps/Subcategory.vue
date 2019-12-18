<template>
  <div class="subcategory">
    <div
      class="subcategory-item"
      v-for="(item, index) in subcategoryList"
      :key="index"
    >
      <a :href="item.link"><img :src="item.image"/></a>
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Subcategory",
  props: {
    subcategoryList: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style lang="less">
.subcategory {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
  &-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 100px;
    margin-bottom: 10px;
    img {
      width: 65px;
      margin-bottom: 7px;
    }

    p {
      font-size: 14px;
    }
  }
}
</style>
