<template>
  <div class="cart">
    <nav-bar type="primary">
      <h3 slot="center" class="title">
        购物车<span>({{ length }})</span>
      </h3>
    </nav-bar>
    <scroll
      ref="scroll"
      class="wrapper"
      :probeType="probeType"
      :listenScroll="listenScroll"
      v-if="length"
    >
      <cart-list />
      <cart-footer-bar />
    </scroll>
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
      listenScroll: true,
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
  mounted() {
    this.cart = this.list;
  }
};
</script>
<style lang="less" scoped>
.cart {
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
}
</style>
