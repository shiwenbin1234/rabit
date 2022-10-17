<template>
  <div class="bg container">
    <div>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>promotion management</el-breadcrumb-item>
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ArrowRight } from "@element-plus/icons-vue";
</script>

<style lang="less" scoped>
.bg {
  height: 2000px;
}
</style>
