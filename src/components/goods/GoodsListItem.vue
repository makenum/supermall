<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" :alt="goodsItem.title" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="icon-collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style lang="less">
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
  p {
    .ellipsis();
    margin-bottom: 3px;
  }
  .price {
    color: @color-primary;
    margin-right: 20px;
  }
}
</style>
