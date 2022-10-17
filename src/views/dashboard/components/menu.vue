<template>
  <div class="content">
    <div class="carousel container">
      <el-carousel height="500px" :autoplay="true">
        <el-carousel-item v-for="item in bannerList" :key="item.id">
          <img :src="item.imgUrl" alt="" />
        </el-carousel-item>
      </el-carousel>
      <HomeCategory></HomeCategory>
    </div>
  </div>
</template>
<script setup lang="ts">
import HomeCategory from "./home-category.vue";
import { findBanner } from "@/api/home";
import { ref } from "vue";

const bannerList: any = ref([]);
const getBanner = async () => {
  const res: any = await findBanner();
  bannerList.value = res.result;
};
getBanner();
</script>

<style lang="less" scoped>
.content {
  height: 500px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  .carousel {
    height: 500px;
    position: relative;
    .el-carousel__item img {
      display: flex;
      color: #475669;
      opacity: 0.75;
      height: 500px;
      line-height: 500px;
      margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
      background-color: #d3dce6;
    }
  }
}
</style>
