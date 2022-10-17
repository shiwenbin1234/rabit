<template>
  <div class="login-top container">
    <div class="logo">
      <img class="logo-img" src="../../../assets/images/logo.png" alt="" />
    </div>
    <div class="link">
      <span class="link-title"> 欢迎登录 </span>
      <span class="link-nav">进入网站首页<i class="icon">>></i></span>
    </div>
  </div>
</template>
<script setup lang="ts"></script>

<style lang="less" scoped>
.login-top {
  display: flex;
  height: 130px;
  justify-content: space-between;
  .logo {
    margin-right: 30px;
    .logo-img {
      width: 200px;
      height: 100px;
    }
  }
  .link {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-size: 24px;
    line-height: 130px;
    margin-top: 40px;
    .link-title {
    }
    .link-nav {
      .icon {
        margin-left: 10px;
        color: #66bcaf;
      }
    }
  }
}
</style>
