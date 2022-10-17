<template>
  <div class="container">
    <header>
      <div class="title">
        <h2>{{ title }}</h2>
        <span class="introduce">{{ introduce }}</span>
      </div>
      <slot></slot>
    </header>
    <div>
      <transition name="fade">
        <ul class="proList">
          <li class="proDetail" v-for="item in list" :key="item.id">
            <div class="img">
              <img :src="item.picture" alt="" />
            </div>
            <div :class="['content', title === '新鲜好物' ? 'bgc' : '']">
              <h4>{{ title === "新鲜好物" ? item.name : item.title }}</h4>
              <span :class="[title === '新鲜好物' ? 'price' : 'alt']">{{
                title === "新鲜好物" ? `￥${item.price}` : item.alt
              }}</span>
            </div>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>
<script setup lang="ts">
type Props = {
  list?: any;
  title?: string;
  introduce?: string;
};
withDefaults(defineProps<Props>(), {
  title: "新鲜好物",
  introduce: "新鲜出炉 品质靠谱",
  list: () => [],
});
</script>

<style lang="less" scoped>
header {
  display: flex;
  height: 115px;
  line-height: 115px;
  justify-content: space-between;
  .title {
    display: flex;
    h2 {
      font-size: 32px;
    }
  }
  .introduce {
    margin-left: 20px;
    font-size: 16px;
    color: #999;
  }
}

.proList {
  width: 100%;
  height: 406px;
  display: flex;
  justify-content: space-between;
  .proDetail {
    display: flex;
    flex-direction: column;
    width: 306px;
    height: 406px;
    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
      transition: all 0.5s;
    }
    // &:hover {
    //   box-shadow: 0 16px 32px 0 rgba(48, 55, 66, 0.15); /* 鼠标悬浮时盒子出现的阴影 */
    //   transform: translateY(-5px); /* 鼠标悬浮时盒子上移10px */
    // }
    .img {
      width: 306px;
      height: 306px;
    }
    .content {
      height: 100px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      h4 {
        color: #333;
        font-size: 22px;
        width: 280px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .price {
        color: #cf4444;
        font-size: 22px;
      }
      .alt {
        font-size: 18px;
        color: #999;
      }
    }
    .bgc {
      background-color: #f0f9f4;
    }
  }
}
</style>
