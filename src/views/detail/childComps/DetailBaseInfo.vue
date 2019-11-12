<template>
  <div class="base-info" v-if="Object.keys(baseInfo).length !== 0">
    <h3 class="base-info__title">{{ baseInfo.title }}</h3>
    <div class="base-info__price">
      <span class="new">{{ baseInfo.newPrice }}</span>
      <span class="old">{{ baseInfo.oldPrice }}</span>
      <span class="discount" v-if="baseInfo.discount">{{
        baseInfo.discount
      }}</span>
    </div>
    <div class="base-info__other">
      <span v-for="(column, index) in baseInfo.columns" :key="index">{{
        column
      }}</span>
    </div>
    <div class="base-info__service">
      <div class="item" v-for="(item, index) in baseInfo.services" :key="index">
        <img :src="defaultIcon" />
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailBaseInfo",
  props: {
    baseInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      defaultIcon:
        "//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png"
    };
  }
};
</script>

<style lang="less" scoped>
.base-info {
  padding: 15px 8px 0;
  background-color: #fff;
  margin-bottom: 5px;

  &__title {
    font-weight: bolder;
    line-height: 1.4;
  }

  &__price {
    margin-top: 10px;
    .new {
      font-size: 24px;
      color: @color-primary;
    }
    .old {
      font-size: 13px;
      margin-left: 5px;
      text-decoration: line-through;
      color: @color-deep-gray;
    }
    .discount {
      font-size: 12px;
      padding: 2px 5px;
      color: #fff;
      background-color: @color-primary;
      border-radius: 5px;
      margin-left: 5px;
      position: relative;
      top: -8px;
    }
  }
  &__other {
    color: @color-deep-gray;
    margin-top: 15px;
    line-height: 30px;
    display: flex;
    font-size: 13px;
    justify-content: space-between;
    position: relative;
    &:after {
      .setBottomLine();
    }
  }
  &__service {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 7px 0;
    .item {
      display: flex;
      align-items: center;
      padding: 3px 0;
      img {
        width: 14px;
        height: 14px;
        margin-right: 5px;
      }
      span {
        font-size: 12px;
      }
    }
  }
}
</style>
