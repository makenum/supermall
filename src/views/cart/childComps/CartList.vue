<template>
  <div class="cart-list">
    <div class="cart-list__item" v-for="(item, index) in cartList" :key="index">
      <check-button
        :isChecked="item.checked"
        @click.native="checkClick(index)"
      />
      <cart-list-content :item="item" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CheckButton from "@/components/checkButton/CheckButton.vue";
import CartListContent from "./CartListContent.vue";

export default {
  name: "CartList",
  components: {
    CartListContent,
    CheckButton
  },
  computed: {
    ...mapGetters(["cartList"])
  },
  methods: {
    checkClick(index) {
      this.cartList[index].checked = !this.cartList[index].checked;
    }
  }
};
</script>
<style lang="less">
.cart-list {
  padding-left: 10px;
  padding-right: 10px;
}
.cart-list__item {
  display: flex;
  align-items: center;
  .cart-list-content {
    flex: 1;
  }
}
</style>
