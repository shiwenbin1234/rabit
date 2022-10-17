<template>
  <div class="main">
    <Header></Header>
    <Navbar :categoryList="categoryList"></Navbar>
    <!-- <main>
    </main> -->
    <RouterView></RouterView>
    <Footer></Footer>
  </div>
</template>
<script setup lang="ts">
import Header from "@/layout/components/header.vue";
import Navbar from "@/layout/components/navbar.vue";
import Footer from "@/layout/components/footer.vue";
import { findAllCategory } from "@/api/navbar";
import { useStore } from "vuex";

import { ref } from "vue";
const store = useStore();
let categoryList: any = ref([]);
const getTestData = async () => {
  const res: any = await findAllCategory();
  categoryList.value = res.result;
  store.commit("saveCategory", categoryList.value);
};
getTestData();
</script>

<style lang="less" scoped>
.main {
  height: max-content;
}
</style>
