<template>
  <div>
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
          <span class="date">{{ commentInfo.created | displayDate }}</span>
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
    <div v-else class="comment-error">
      <h3>暂无评论</h3>
      <p>快来抢沙发吧！</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailComment",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style lang="less">
.comment-error {
  padding: 15px 12px 10px;
  background-color: #fff;
  line-height: 1.5;
  h3 {
    font-size: 16px;
  }
  p {
    color: @color-deep-gray;
    font-size: 12px;
  }
}
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
    display: flex;
    margin-top: 10px;
    img {
      width: 70px;
      height: 70px;
      object-fit: cover;
      margin-right: 5px;
    }
  }
}
</style>
