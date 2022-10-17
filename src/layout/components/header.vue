<template>
  <div class="header">
    <ul class="navbar container">
      <li>请先登录</li>
      <li>|</li>
      <li>免费注册</li>
      <li>|</li>
      <li>我的订单</li>
      <li>|</li>
      <li>会员中心</li>
      <li>|</li>
      <li>帮助中心</li>
      <li>|</li>
      <li>关于我们</li>
      <li>|</li>
      <li>手机版</li>
    </ul>
  </div>
</template>
<script setup lang="ts"></script>

<style lang="less" scoped>
.header {
  background-color: #333333;

  .navbar {
    height: 50px;
    line-height: 50px;
    display: flex;
    justify-content: flex-end;
    color: #fff;
    li:nth-child(even) {
      padding: 0 10px;
    }
  }
}
</style>
