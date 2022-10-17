<template>
  <div class="container">
    <div class="footer">
      <ul class="footer-link">
        <li>
          <a href="">关于我们</a>
        </li>
        <li>|</li>
        <li>
          <a href="">帮助中心</a>
        </li>
        <li>|</li>
        <li>
          <a href="">售后服务</a>
        </li>
        <li>|</li>
        <li>
          <a href="">配送与验收</a>
        </li>
        <li>|</li>
        <li>
          <a href="">商务合作</a>
        </li>
        <li>|</li>
        <li>
          <a href="">探索推荐</a>
        </li>
        <li>|</li>
        <li>
          <a href="">友情链接</a>
        </li>
      </ul>
      <div class="footer-coopRight">
        <span style="color: #999">CopyRight © 小兔鲜儿</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>

<style lang="less" scoped>
@greyColor: #999;
.footer {
  display: flex;
  flex-direction: column;
  .footer-link {
    display: flex;
    justify-content: center;
    margin: 50px 0 30px 0;
    li {
      color: @greyColor;
      margin-right: 10px;
      a {
        color: @greyColor;
      }
    }
  }
}
</style>
