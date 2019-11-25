<template>
  <div class="cart">
    <nav-bar type="primary">
      <h3 slot="center" class="title">
        购物车<span v-if="length">({{ length }})</span>
      </h3>
    </nav-bar>
    <div class="cart-tips" v-if="!length">
      <p>您的购物车还是空的</p>
      <button type="button" @click="goHome">去逛逛</button>
    </div>
    <scroll ref="scroll" class="wrapper" :probeType="probeType" v-if="length">
      <cart-list />
    </scroll>
    <cart-footer-bar />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NavBar from "@/components/navbar/NavBar.vue";
import Scroll from "@/components/scroll/Scroll.vue";
import CartList from "./childComps/CartList.vue";
import CartFooterBar from "./childComps/CartFooterBar.vue";
export default {
  name: "Cart",
  components: {
    NavBar,
    Scroll,
    CartList,
    CartFooterBar
  },
  data() {
    return {
      cart: [],
      probeType: 3
    };
  },
  computed: {
    // 两种语法
    // ...mapGetters(["cartList", "cartListLength"]),
    ...mapGetters({
      length: "cartListLength"
    })
  },
  created() {
    this.cart = this.list;
  },
  methods: {
    goHome() {
      this.$router.push("/home");
    }
  }
};
</script>
<style lang="less" scoped>
.cart {
  height: 100vh;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  .navbar {
    position: relative;
    z-index: 10;
  }
  .wrapper {
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 89px;
    overflow: hidden;
  }
  .cart-tips {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 89px);
    p {
      font-size: 14px;
      color: @color-med-gray;
      margin-bottom: 10px;
    }
    button {
      border: 1px solid @color-primary;
      color: @color-primary;
      height: 24px;
      padding-left: 15px;
      padding-right: 15px;
      border-radius: 15px;
      background-color: transparent;
    }
  }
}
</style>
