<template>
  <div class="cart">
    <div class="cart-search">
      <el-icon :size="16" class="cart-icon"><Search /></el-icon>
      <input
        v-model="content"
        class="search"
        type="text"
        placeholder="搜一搜"
      />
    </div>
    <div>
      <el-icon :size="20" style="vertical-align: middle">
        <ShoppingCart />
      </el-icon>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Search, ShoppingCart } from "@element-plus/icons-vue";
import { ref } from "vue";

let content = ref("");
</script>

<style lang="less" scoped>
.cart {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .cart-search {
    position: relative;
    .cart-icon {
      position: absolute;
      left: 0;
      top: 30%;
    }
  }
}
.search {
  border: 0;
  border-bottom: 1px solid #eee;
  padding: 10px 20px 10px;
}
</style>
