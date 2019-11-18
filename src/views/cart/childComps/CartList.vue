<template>
  <div class="cart-list">
    <cart-list-item v-for="(item, index) in list" :key="index" :item="item" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartListItem from "./CartListItem.vue";

export default {
  name: "CartList",
  components: {
    CartListItem
  },
  computed: {
    ...mapGetters({
      list: "cartList"
    })
  }
};
</script>
<style lang="less">
.cart-list {
  padding-left: 10px;
  padding-right: 10px;
}
</style>
