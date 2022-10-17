<template>
  <div class="footer">
    <div class="content container">
      <ul>
        <li>
          <el-icon><Goods /></el-icon>
          <p>价格亲民</p>
        </li>
        <li>
          <el-icon><Position /></el-icon>
          <p>物流快捷</p>
        </li>
        <li>
          <el-icon><Bell /></el-icon>
          <p>品质新鲜</p>
        </li>
      </ul>
      <footer>
        <ul>
          <li><a href="">关于我们</a></li>
          <li>|</li>
          <li><a href="">帮助中心</a></li>
          <li>|</li>
          <li><a href="">售后服务</a></li>
          <li>|</li>
          <li><a href="">配送与验收</a></li>
          <li>|</li>
          <li><a href="">商务合作</a></li>
          <li>|</li>
          <li><a href="">搜索推荐</a></li>
          <li>|</li>
          <li><a href="">友情推荐</a></li>
        </ul>
        <p>CopyRight © 小兔鲜儿</p>
      </footer>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Goods, Position, Bell } from "@element-plus/icons-vue";
</script>

<style lang="less" scoped>
.footer {
  background-color: #333;
  height: 348px;
  .content {
    > ul {
      display: flex;
      height: 178px;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #434343;
      li {
        width: 400px;
        color: #fff;
        font-size: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          margin-left: 10px;
        }
      }
    }
    footer {
      color: #999;
      font-size: 15px;
      ul {
        display: flex;
        justify-content: center;
        margin: 40px 0 20px;
        li:nth-child(even) {
          margin: 0 10px;
        }
        a {
          color: #999;
          font-size: 15px;
        }
      }
      p {
        text-align: center;
      }
    }
  }
}
</style>
