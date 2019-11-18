<template>
  <div class="footer-bar">
    <div class="link">
      <div class="link-item">
        <i class="icon service"></i>
        <p class="text">客服</p>
      </div>
      <div class="link-item">
        <i class="icon shop"></i>
        <p class="text">店铺</p>
      </div>
      <div class="link-item">
        <i class="icon collect"></i>
        <p class="text">收藏</p>
      </div>
    </div>
    <div class="btns">
      <button class="btn cart" @click="addToCart">加入购物车</button>
      <button class="btn buy">立即购买</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailFooterBar",
  methods: {
    addToCart() {
      this.$emit("addCart");
    }
  }
};
</script>
<style lang="less" scoped>
.footer-bar {
  background-color: @color-white;
  height: 49px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;

  .link {
    flex: 1;
    display: flex;
    &-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon {
        display: block;
        width: 22px;
        height: 22px;
        margin-bottom: 2px;
        background-repeat: no-repeat;
        background-size: contain;
      }
      .collect {
        background-image: url("~@/assets/img/icon-star-base.png");
      }
      .service {
        background-image: url("~@/assets/img/icon-service.png");
      }
      .shop {
        background-image: url("~@/assets/img/icon-shop.png");
      }
      .text {
        font-size: 12px;
        color: @color-deep-gray;
      }
    }
  }
  .btns {
    .btn {
      width: 100px;
      line-height: 49px;
      font-size: 15px;
    }
    .cart {
      background-color: @color-yellow;
      color: @color-gray;
    }
    .buy {
      background-color: @color-primary;
      color: @color-white;
    }
  }
}
</style>
