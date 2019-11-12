<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="info-header">
      <div class="title">用户评价</div>
      <div class="more">更多<i class="icon-arrow-left"></i></div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" />
      <span>{{ commentInfo.user.uname }}</span>
    </div>
    <div class="info-detail">
      <p>{{ commentInfo.content }}</p>
      <div class="info-other">
        <span class="date">{{ commentInfo.created | showDate }}</span>
        <span>{{ commentInfo.style }}</span>
      </div>
      <div class="info-imgs" v-if="commentInfo.images">
        <img
          :src="item"
          v-for="(item, index) in commentInfo.images"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "@/common/utils";
export default {
  name: "DetailComment",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    showDate(value) {
      // 将时间戳转为Date对象
      const date = new Date(value * 1000); //如果date为13位不需要乘1000
      // 将date进行格式化
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    },
    _formatDate(value) {
      // 将时间戳转为Date对象
      const date = new Date(value * 1000);
      // 将date进行格式化
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      if (month < 10) {
        month = `0${month}`;
      }
      if (day < 10) {
        day = `0${day}`;
      }
      return `${year}-${month}-${day}`;
    }
  }
};
</script>
<style lang="less">
.comment-info {
  padding: 5px 12px;
  background-color: #fff;
  .info-header {
    display: flex;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid @color-border;
    .title {
      flex: 1;
      font-size: 15px;
    }
    .more {
      font-size: 13px;
      display: flex;
      align-items: center;
      .icon-arrow-left {
        &:before {
          color: @color-gray;
        }
      }
    }
  }
  .info-user {
    padding: 10px 0;
    display: flex;
    align-items: center;
    img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
  .info-detail {
    padding: 0 5px 15px;
    p {
      font-size: 14px;
      color: #777;
      line-height: 1.5;
    }
  }
  .info-other {
    font-size: 12px;
    color: #999;
    margin-top: 5px;
    .date {
      margin-right: 8px;
    }
  }
  .info-imgs {
    margin-top: 10px;
    img {
      width: 70px;
      height: 70px;
      margin-right: 5px;
    }
  }
}
</style>
