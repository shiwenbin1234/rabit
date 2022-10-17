<template>
  <div class="other container">
    <ul class="content">
      <li v-for="item in 4" :key="item">
        <p>客户服务</p>
        <div class="service">
          <div class="left">
            <el-icon :size="40"><ChatDotRound /></el-icon>
            <p>在线客服</p>
          </div>
          <div class="right">
            <el-icon :size="40"><QuestionFilled /></el-icon>
            <p>问题反馈</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { ChatDotRound, QuestionFilled } from "@element-plus/icons-vue";
</script>

<style lang="less" scoped>
.other {
  height: 290px;
  .content {
    display: flex;
    justify-content: space-between;
    padding: 60px 0 40px 25px;
    li {
      width: 300px;
      height: 190px;
      text-align: center;
      border-right: 1px solid #f2f2f2;
      > p {
        font-size: 18px;
        color: #999;
      }
      .service {
        display: flex;
        justify-content: space-around;
        .left {
          width: 90px;
          height: 90px;
          border: 1px solid #f2f2f2;
          margin-top: 36px;
          padding: 10px;
        }
        .right {
          width: 90px;
          height: 90px;
          border: 1px solid #f2f2f2;
          margin-top: 36px;
          padding: 10px;
        }
      }
    }
  }
}
</style>
