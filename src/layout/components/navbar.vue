<template>
  <div class="sticky">
    <div class="navbarItem container">
      <div class="logo">
        <img src="../../assets/images/logo.png" alt="" />
      </div>

      <ul class="nav">
        <li>首页</li>
        <li v-for="item in categoryList" :key="item.id">
          {{ item.name }}
          <el-card class="card">
            <ul class="children">
              <li class="item" v-for="v in item.children" :key="v.id">
                <div>
                  <img :src="v.picture" alt="" />
                </div>
                <p>{{ v.name }}</p>
              </li>
            </ul>
          </el-card>
        </li>
      </ul>
      <ShoppingCart></ShoppingCart>
    </div>
  </div>
</template>
<script setup lang="ts">
import ShoppingCart from "@/components/shopping-cart.vue";
import { reactive, ref } from "vue";

type Props = {
  categoryList: Array<any>;
};
defineProps<Props>();
</script>

<style lang="less" scoped>
.sticky {
  position: sticky;
  top: 0;
  z-index: 9999;
  background-color: #fff;
  .navbarItem {
    display: flex;
    position: relative;
    .logo {
      width: 200px;
      height: 132px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .nav {
      display: flex;
      flex: 1;
      justify-content: space-around;
      align-items: center;

      li {
        font-size: 16px;
        color: #333;
        cursor: pointer;
      }
      li:hover {
        color: #66bcaf;
      }
      li:hover .card {
        display: block;
      }
      .card {
        height: 133px;
        width: 1240px;
        position: absolute;
        top: 108px;
        left: 0;
        padding: 0 75px;
        display: none;
        .children {
          display: flex;
          align-items: center;
          .item {
            margin-right: 35px;
            img {
              height: 70px;
              width: 76px;
            }
            p {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}
</style>
