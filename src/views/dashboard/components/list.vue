<template>
  <div class="container">
    <header>
      <div class="left">
        <h2>{{ title }}</h2>
      </div>
      <div class="right">
        <ul class="nav">
          <li v-for="item in navBar" :key="item.id">{{ item.name }}</li>
        </ul>
        <span class="introduce">查看全部 ></span>
      </div>
    </header>
    <div class="content">
      <div class="ft-list">
        <img :src="pic" alt="" />
      </div>
      <div class="rt-list">
        <ul>
          <li v-for="item in list" :key="item.id" @click="goDetail(item.id)">
            <img :src="item.picture" alt="" />
            <div class="bottom">
              <p class="title">{{ item.name }}</p>
              <p class="desc">{{ item.desc }}</p>
              <p class="price">￥{{ item.price }}</p>
            </div>

            <div class="extra animate__animated animate__fadeIn">
              <RouterLink to="/">
                <p>找相似</p>
                <span>发现现多宝贝 &gt;</span>
              </RouterLink>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import "animate.css";
import { useRouter } from "vue-router";
const router = useRouter();
type Props = {
  title: string;
  list: any;
  navBar: any;
  pic: string;
};
defineProps<Props>();
const goDetail = (id: string) => {
  router.push({
    name: "Product",
    query: {
      id: id,
    },
  });
};
</script>

<style lang="less" scoped>
header {
  display: flex;
  height: 115px;
  line-height: 115px;
  justify-content: space-between;
  .left {
    h2 {
      font-size: 32px;
    }
  }
  .right {
    display: flex;
    .nav {
      display: flex;
      margin-right: 50px;
      li {
        margin-left: 30px;
        font-size: 16px;
        &:hover {
          color: #27ba9b;
          cursor: pointer;
        }
      }
    }
    .introduce {
      flex: 1;
      margin-left: 20px;
      font-size: 16px;
      color: #999;
      cursor: pointer;
    }
  }
}
.content {
  display: flex;
  .ft-list {
    width: 240px;
    height: 610px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .rt-list {
    flex: 1;
    ul {
      margin-left: 10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        width: 240px;
        height: 300px;
        padding: 10px 20px;
        margin-bottom: 10px;
        position: relative;
        border: 1px solid #fff;
        &:hover {
          border: 1px solid #66bcaf;
        }
        &:hover {
          .extra {
            display: block;
          }
        }
        img {
          width: 170px;
          height: 170px;
          cursor: pointer;
        }
        .bottom {
          height: 110px;
          text-align: left;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .title {
            font-size: 16px;
          }
          .desc {
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            font-size: 14px;
            color: #999;
            padding: 10px 0;
          }
          .price {
            font-size: 18px;
            text-align: left;
            color: #cf4444;
          }
        }
        .extra {
          width: 240px;
          height: 85px;
          background-color: #27ba9b;
          position: absolute;
          bottom: 0;
          left: 0;
          display: none;
          padding: 10px;
          p {
            color: #fff;
            font-size: 18px;
            width: 120px;
            margin: 0 auto;
            padding: 5px 0;
            border-bottom: 1px solid #fff;
            margin-bottom: 5px;
          }
          span {
            color: #fff;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
