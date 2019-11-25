<template>
  <div class="cart-footer-bar" v-if="cartListLength">
    <div @click="checkAll" class="check-button-group">
      <check-button :isChecked="isAllChecked" />
      <span class="desc">全选</span>
    </div>
    <div class="total">合计:{{ totalPrice | formatPrice }}</div>
    <button class="settlement" @click="settlement" :disabled="!checkLength">
      去结算<span v-if="checkLength">({{ checkLength }})</span>
    </button>
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
  computed: {
    ...mapGetters(["cartListLength", "cartList"]),
    totalPrice() {
      return this.cartList
        .filter(item => {
          return item.checked;
        })
        .reduce((accumulator, currentValue) => {
          return accumulator + currentValue.price * currentValue.count;
        }, 0);
    },
    checkLength() {
      return this.cartList.filter(item => item.checked).length;
    },
    isAllChecked() {
      // 判断是否有数据
      if (this.cartList.length === 0) {
        return false;
      }
      // 过滤方法
      // return this.cartList.filter(item => !item.checked).length ? false : true;

      // 遍历方法
      // for (const item of this.cartList) {
      //   if (!item.checked) {
      //     return false;
      //   }
      // }
      // return true;

      // 查找方法
      return this.cartList.find(item => !item.checked) ? false : true;
    }
  },
  methods: {
    checkAll() {
      // 遍历两次分别赋值
      if (this.isAllChecked) {
        this.cartList.forEach(item => (item.checked = false));
      } else {
        this.cartList.forEach(item => (item.checked = true));
      }
    },
    // 去结算
    settlement() {
      this.$toast(`合计: ￥${parseFloat(this.totalPrice).toFixed(2)} 元`);
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
    padding-left: 10px;
    padding-right: 10px;
    width: 100px;
    font-size: 15px;
    &:disabled {
      opacity: 0.5;
    }
  }
}
</style>
