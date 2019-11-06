<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="goods-info__desc">
      <div class="start"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div class="goods-info__key">{{ detailInfo.detailImage[0].key }}</div>
    <div class="goods-info__list">
      <img
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :key="index"
        :src="item"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object
    }
  }
};
</script>

<style lang="less" scoped>
.goods-info {
  padding: 20px 0;
  margin-bottom: 5px;
  background-color: #fff;
  &__desc {
    padding: 0 15px;
    .desc {
      padding: 15px 0;
      line-height: 1.5;
    }
    .start,
    .end {
      width: 90px;
      height: 1px;
      background-color: #a3a3a5;
      position: relative;
    }
    .start {
      float: left;
    }

    .end {
      float: right;
    }
    .start::before,
    .end::after {
      content: "";
      position: absolute;
      width: 5px;
      height: 5px;
      background-color: #333;
      bottom: 0;
    }
    .end::after {
      right: 0;
    }
  }
  &__key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }
  &__list img {
    width: 100%;
  }
}
</style>
