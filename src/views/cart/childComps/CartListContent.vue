<template>
  <div class="cart-list-content">
    <div class="thumb" @click="goDetail(item.iid)">
      <img :src="item.image" />
    </div>
    <div class="info" @click="goDetail(item.iid)">
      <h3 class="info-title">{{ item.title }}</h3>
      <p class="info-desc">{{ item.desc }}</p>
      <div class="info-ft">
        <strong>{{ item.price | formatPrice }}</strong>
        <span class="count">x{{ item.count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "item",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    goDetail(iid) {
      console.log("去商品详情");
      if (iid) {
        this.$router.push(`/detail/${iid}`);
      }
    }
  }
};
</script>
<style lang="less">
.cart-list-content {
  display: flex;
  align-items: center;
  position: relative;
  padding-top: 10px;
  padding-bottom: 10px;
  &:not(:last-child) {
    &:after {
      .setBottomLine();
    }
  }
  .thumb {
    width: 70px;
    height: 105px;
    margin-left: 10px;
    margin-right: 10px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
  }
  .info {
    .flexGrow;
    min-height: 105px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    &-title {
      font-size: 15px;
      .ellipsisLn(2);
    }
    &-desc {
      color: @color-deep-gray;
      .ellipsis();
    }
    &-ft {
      display: flex;
      align-items: center;
      justify-content: space-between;
      strong {
        color: @color-primary;
        font-size: 15px;
      }
      .count {
        font-size: 14px;
        color: @color-med-gray;
      }
    }
  }
}
</style>
