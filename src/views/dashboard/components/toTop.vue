<template>
  <div class="bg">
    <div class="container">
      <header>
        <div class="title">
          <h2>热门品牌</h2>
          <span class="introduce">国际经典 品质保证</span>
        </div>
        <div class="icon">
          <div :class="{ active: index === 0 }" @click="next">
            <span>&lt;</span>
          </div>
          <div :class="{ active: index === 1 }" @click="prev">
            <span>></span>
          </div>
        </div>
      </header>
      <div class="box">
        <transition name="fade">
          <ul
            class="content"
            :style="{ transform: `translateX(-${index * 50}%)` }"
          >
            <li class="brand" v-for="item in list" :key="item.id">
              <img :src="item.picture" alt="" />
            </li>
          </ul>
        </transition>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import { findBrand } from "@/api/home";
import "animate.css";
let list: any = ref([]);
let index = ref(0);

const getBands = async () => {
  const res: any = await findBrand(10);
  list.value = res.result;
};

const next = () => {
  index.value = 0;
};
const prev = () => {
  index.value = 1;
};
getBands();
</script>

<style lang="less" scoped>
.bg {
  height: 460px;
  background-color: #f5f5f5;
}
header {
  display: flex;
  height: 115px;
  line-height: 115px;
  justify-content: space-between;
  align-items: center;
  .title {
    display: flex;
    h2 {
      font-size: 32px;
    }
    .introduce {
      margin-left: 20px;
      font-size: 16px;
      color: #999;
    }
  }
  .icon {
    display: flex;
    div {
      width: 20px;
      height: 20px;
      background-color: #999;
      // border: 1px solid #ccc;
      position: relative;
      margin-left: 5px;
      cursor: pointer;
      span {
        position: absolute;
        // font-size: 20px;
        color: #fff;
        top: -47px;
        left: 35%;
      }
    }
    .active {
      background-color: #66bcaf;
    }
  }
}
.box {
  overflow: hidden;
  .content {
    display: flex;
    justify-content: space-between;
    width: 200%;
    img {
      width: 240px;
      height: 305px;
    }
  }
}
</style>
