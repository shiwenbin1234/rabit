<template>
  <div class="home-category" @mouseleave="currentId = ''">
    <ul class="category">
      <li
        v-for="item in list"
        :key="item.id"
        :class="[item.id === currentId ? 'active' : '']"
        @mouseenter="handleMouseEnter(item.id)"
      >
        <a href="">{{ item?.name }}</a>
        <a href="">{{ item?.children[0]?.name }}</a>
        <a href="">{{ item?.children[1]?.name }}</a>
      </li>
    </ul>
    <div class="introduce">
      <h4>
        {{ currentId === "brand" ? "品牌" : "分类" }}推荐,
        根据您的购买或浏览记录推荐
      </h4>
      <ul v-if="currentId !== 'brand'">
        <li class="notBrand" v-for="v in currentCategory?.goods" :key="v.id">
          <div class="ft">
            <img :src="v.picture" alt="" />
          </div>
          <div class="rt">
            <p class="title">{{ v.name }}</p>
            <p class="desc">{{ v.desc }}</p>
            <p class="price">￥{{ v.price }}</p>
          </div>
        </li>
      </ul>
      <ul v-else>
        <li class="ifBrand" v-for="v in currentCategory?.brands" :key="v.id">
          <div class="ifBrand-ft">
            <img class="ifBrandImg" :src="v.picture" alt="" />
          </div>
          <div class="ifBrand-rt">
            <p class="title">{{ v.name }}</p>
            <p class="desc">{{ v.desc }}</p>
            <p class="place">{{ v.place }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { ref, reactive } from "vue";
import { useStore } from "vuex";
import { findBrand } from "@/api/home";
const store = useStore();
const brand = reactive({
  id: "brand",
  name: "品牌",
  children: [{ id: "sub-id", name: "品牌推荐" }],
  brands: [],
});
findBrand().then((res: any) => {
  // console.log(res)
  brand.brands = res.result;
});
const list: any = computed(() => {
  const categoryList = store.state.category.map((item: any) => {
    return {
      id: item.id,
      name: item.name,
      goods: item.goods,
      children: item.children?.slice(0, 2),
    };
  });
  categoryList.push(brand);
  return categoryList;
  // return store.state.category;
});
const currentId = ref("");
const handleMouseEnter = (val: string) => {
  currentId.value = val;
};

const currentCategory: any = computed(() => {
  return list.value.find((item: any) => item.id === currentId.value);
});
</script>

<style lang="less" scoped>
.home-category {
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 0;
  left: 0;
  .category {
    // position: absolute;
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 500px;

    background: rgba(0, 0, 0, 0.6);
    // opacity: 0.8;
    z-index: 999;
    li {
      height: 50px;
      width: 250px;
      display: flex;
      padding: 0 20px;
      a {
        color: #fff;
        font-size: 14px;
        height: 50px;
        line-height: 50px;
        margin-right: 10px;
      }
      a:last-child {
        margin-right: 0;
      }
    }
    li:hover,
    .active {
      background-color: #66bcaf;
    }
  }
  .introduce {
    width: 990px;
    height: 500px;
    // z-index: 999;
    display: none;
    position: absolute;
    left: 250px;
    top: 0;
    background: rgba(255, 255, 255, 0.3);
    h4 {
      height: 70px;
      line-height: 70px;
      text-align: left;
      margin-left: 15px;
      font-size: 16px;
    }
    ul {
      display: flex;
      width: 100%;
      justify-content: space-around;
      flex-wrap: wrap;
      padding: 5px;
      .notBrand {
        width: 30%;
        height: 120px;
        margin-bottom: 10px;
        padding: 10px;
        display: flex;
        background-color: #fff;
        .ft {
          width: 100px;
          height: 100px;
          margin-right: 8px;
          img {
            width: 100px;
            height: 100px;
          }
        }
        .rt {
          flex: 1;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          .title {
            font-size: 16px;
            color: #666;
            text-align: left;
          }
          .desc {
            text-overflow: ellipsis;
            text-align: left;
            overflow: hidden;
            white-space: nowrap;
            width: 170px;
            font-size: 14px;
            color: #999;
            // padding: 5px 0;
          }
          .price {
            font-size: 18px;
            text-align: left;
            color: #cf4444;
          }
        }
        &:hover {
          background-color: #e3f9f4;
          cursor: pointer;
        }
      }
      .ifBrand {
        width: 30%;
        height: 180px;
        background-color: #fff;
        display: flex;
        margin-top: 20px;
        padding: 10px;
        .ifBrand-ft {
          width: 120px;
          height: 155px;
          margin-right: 8px;
          .ifBrandImg {
            width: 120px;
            height: 155px;
          }
        }
        .ifBrand-rt {
          flex: 1;
          display: flex;
          // justify-content: space-between;
          flex-direction: column;
          .title {
            font-size: 16px;
            color: #666;
            text-align: left;
          }
          .desc {
            text-overflow: ellipsis;
            text-align: left;
            overflow: hidden;
            white-space: nowrap;
            width: 150px;
            font-size: 14px;
            color: #999;
            margin: 20px 0;
            // padding: 5px 0;
          }
          .place {
            font-size: 18px;
            text-align: left;
          }
        }
      }
    }
  }
  &:hover {
    .introduce {
      display: block;
    }
  }
}
// ul:hover ~ .introduce {
//   display: block !important;
// }
</style>
