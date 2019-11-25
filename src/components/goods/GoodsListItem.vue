<template>
  <div class="goods-item" @click="itemClick">
    <div class="img">
      <img v-lazy="showImage" @load="load" />
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
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img;
    }
  },
  methods: {
    itemClick() {
      if (this.goodsItem.iid) {
        this.$router.push(`/detail/${this.goodsItem.iid}`);
      }
    },
    load() {
      this.$EventBus.$emit("imageLoad");
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
    img {
      border-radius: 5px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
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
