<template>
  <div class="bg">
    <div class="container">
      <header>
        <div class="title">
          <h2>最新专题</h2>
        </div>
        <div>
          <span class="introduce">查看全部 ></span>
        </div>
      </header>
      <div class="content">
        <ul class="">
          <li
            v-for="item in list"
            :key="item.id"
            :style="{ backgroundImage: `url(${item.detailsUrl})` }"
          >
            <div class="img">
              <!-- <img src="item.detailsUrl" alt="" /> -->
              <div class="img-left">
                <span class="title ellipsis">{{ item.title }}</span>
                <span class="detail ellipsis">{{ item.summary }}</span>
              </div>
              <div class="img-right">
                <span class="price">￥{{ item.lowestPrice }}</span>
              </div>
            </div>
            <div class="comments">
              <div>
                <span></span>{{ item.collectNum }}
                <span>{{ item.viewNum }}</span>
              </div>
              <span>{{ item.replyNum }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
type Props = {
  list: any;
};
defineProps<Props>();
</script>

<style lang="less" scoped>
.bg {
  height: 495px;
  background: #f5f5f5;
  header {
    display: flex;
    height: 115px;
    line-height: 115px;
    justify-content: space-between;

    h2 {
      font-size: 32px;
    }

    .introduce {
      margin-left: 20px;
      font-size: 16px;
      color: #999;
    }
  }
  .content {
    ul {
      display: flex;
      justify-content: space-between;
      li {
        width: 404px;
        height: 360px;
        display: flex;
        flex-direction: column;
        background-size: cover;
        // text-align: left;

        .img {
          width: 404px;
          height: 288px;
          display: flex;
          justify-content: space-between;
          padding: 16px;
          .img-left {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            .title {
              font-size: 22px;
              width: 267px;
              color: #fff;
            }
            .detail {
              font-size: 19px;
              color: #999;
              width: 267px;
            }
          }
          .img-right {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            margin-bottom: 10px;
            .price {
              width: 72px;
              height: 30px;
              line-height: 30px;
              border-radius: 4px;
              font-size: 17px;
              background-color: #fff;
              color: #cf4444;
            }
          }
        }
        .comments {
          height: 72px;
          background-color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding: 16px;
          font-size: 16px;
          span:nth-child(2) {
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>
