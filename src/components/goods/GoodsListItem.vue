<template>
  <div class="goods-item">
    <div class="img">
      <img v-lazy="goodsItem.show.img" />
    </div>
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <div class="info">
        <span class="price">{{ goodsItem.price }}</span>
        <span class="icon-collect">{{ goodsItem.cfav }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  data() {
    return {
      imgUrl: require("assets/img/loading.svg")
    };
  },
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
  width: 48%;
  .img {
    width: 100%;
    padding-bottom: percentage(480/320);
    position: relative;
    img[lazy="loaded"] {
      border-radius: 5px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    img[lazy="loading"] {
      width: 44px;
      height: 44px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
.goods-info {
  font-size: 12px;
  text-align: center;
  padding: 5px 0;
  p {
    .ellipsis();
    margin-bottom: 3px;
  }
  .info {
    display: flex;
    align-items: center;
    justify-content: center;
    .price {
      color: @color-primary;
      margin-right: 5px;
    }
    .icon-collect {
      display: flex;
      align-items: center;
      justify-content: center;
      &:before {
        margin-right: 2px;
      }
    }
  }
}
</style>
