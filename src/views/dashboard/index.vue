<template>
  <div class="box">
    <!-- <Navbar :categoryList="categoryList"></Navbar> -->
    <Menu></Menu>
    <Product :list="newList">
      <template #default>
        <div>
          <span class="checkAll">查看全部 ></span>
        </div>
      </template>
    </Product>
    <Product
      :list="hotList"
      title="人气推荐"
      introduce="人气爆款 不容错过"
    ></Product>
    <ToTop></ToTop>
    <List
      v-for="item in goodList"
      :key="item.id"
      :title="item.name"
      :list="item.goods"
      :navBar="item.children"
      :pic="item.picture"
    ></List>

    <Latest :list="specialList"></Latest>
    <AfterSale></AfterSale>
  </div>
</template>
<script setup lang="ts">
import Navbar from "../../layout/components/navbar.vue";
import Menu from "./components/menu.vue";
import Product from "./components/product.vue";
import ToTop from "./components/toTop.vue";
import List from "./components/list.vue";
import Latest from "./components/latest.vue";
import AfterSale from "./components/after-sale.vue";

import { findAllCategory } from "@/api/navbar";
import { findNew, findHot, findGoods, findSpecial } from "@/api/home";

import { ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const newList: any = ref([]);
const hotList: any = ref([]);
const goodList: any = ref([]);
const specialList: any = ref([]);
// const getTestData = async () => {
//   const res: any = await findAllCategory();
//   categoryList.value = res.result;
//   store.commit("saveCategory", categoryList.value);
// };
const getNew = async () => {
  const res: any = await findNew();
  newList.value = res.result;
};

const getHot = async () => {
  const res: any = await findHot();
  hotList.value = res.result;
};

const getGoods = async () => {
  const res: any = await findGoods();
  goodList.value = res.result;
};

const getLatest = async () => {
  const res: any = await findSpecial();
  specialList.value = res.result;
};
getNew();
getHot();
// getTestData();
getGoods();
getLatest();
</script>

<style lang="less" scoped>
.box {
  height: max-content;
  .checkAll {
    margin-left: 20px;
    font-size: 16px;
    color: #999;
    cursor: pointer;
    &:hover {
      color: #66bcaf;
    }
  }
}
</style>
