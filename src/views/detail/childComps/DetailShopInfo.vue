<template>
  <div class="shop-info">
    <div class="shop-info__top">
      <img :src="shop.logo" />
      <p class="title">{{ shop.name }}</p>
    </div>
    <div class="shop-info__middle">
      <div class="shop-info__middle__item left">
        <div class="info-sells">
          <div class="sells-count">
            {{ shop.sells | sellCountFilter }}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{ shop.goodsCount }}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-info__middle__item right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ 'score-better': item.isBetter }">
              {{ item.score }}
            </td>
            <td class="better" :class="{ 'better-more': item.isBetter }">
              <span>{{ item.isBetter ? "高" : "低" }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-info__bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style lang="less" scoped>
.shop-info {
  padding: 25px 8px;
  margin-bottom: 5px;
  background-color: #fff;
  &__top {
    line-height: 45px;
    display: flex;
    align-items: center;
    img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      object-fit: cover;
      border: 1px solid @color-border;
    }

    .title {
      margin-left: 10px;
    }
  }
  &__middle {
    margin-top: 15px;
    display: flex;
    align-items: center;
    &__item {
      flex: 1;
    }
    .left {
      display: flex;
      justify-content: space-evenly;
      color: #333;
      text-align: center;
      position: relative;
      &:after {
        .setRightLine();
      }
    }
    .sells-count,
    .goods-count {
      font-size: 18px;
    }

    .sells-text,
    .goods-text {
      margin-top: 10px;
      font-size: 12px;
    }
    .right {
      font-size: 13px;
      table {
        width: 120px;
        margin-left: 30px;
        td {
          padding: 5px 0;
        }
      }

      .score {
        color: #5ea732;
      }

      .score-better {
        color: #f13e3a;
        span {
          background-color: #5ea732;
          color: #fff;
          text-align: center;
        }
      }
    }
  }
  &__bottom {
    text-align: center;
    margin-top: 10px;
    .enter-shop {
      display: inline-block;
      background-color: @color-primary;
      color: @color-white;
      width: 150px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      border-radius: 5px;
    }
  }
}
</style>
