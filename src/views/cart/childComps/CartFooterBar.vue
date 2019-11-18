<template>
  <div class="cart-footer-bar">
    <div @click="checkButtonClick" class="check-button-group">
      <check-button :isChecked="isChecked" />
      <span class="desc">全选</span>
    </div>
    <div class="total">合计:</div>
    <button class="settlement">去结算({{ length }})</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CheckButton from "@/components/checkButton/CheckButton.vue";
export default {
  name: "CartFooterBar",
  components: {
    CheckButton
  },
  data() {
    return {
      isChecked: false
    };
  },
  computed: {
    ...mapGetters({
      length: "cartListLength",
      list: "cartList"
    })
  },
  methods: {
    checkButtonClick() {
      this.isChecked = !this.isChecked;
      for (let index = 0; index < this.list.length; index++) {
        this.list[index].checked = true;
      }
      this.$store.dispatch("AllChecked", this.list);
    }
  }
};
</script>

<style lang="less" scoped>
.cart-footer-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
  background: #eeeeee;
  height: 40px;
  display: flex;
  align-items: center;
  .check-button-group {
    display: flex;
    align-items: center;
    margin-left: 10px;
    .desc {
      margin-left: 10px;
      color: @color-med-gray;
    }
  }
  .total {
    flex: 1;
    margin-left: 10px;
  }
  .settlement {
    color: @color-white;
    background: @color-primary;
    line-height: 40px;
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
