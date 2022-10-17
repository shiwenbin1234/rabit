<template>
  <div class="bg">
    <div class="container">
      <div>
        <el-breadcrumb class="bread" :separator-icon="ArrowRight">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>promotion management</el-breadcrumb-item>
          <el-breadcrumb-item>promotion list</el-breadcrumb-item>
          <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <main>
        <div class="main-ft">
          <div>
            <img src="" alt="" />
            <ul class="appraise">
              <li>
                <p>销量人气</p>
                <p>200</p>
                <p>销量人气</p>
              </li>
              <li>
                <p>销量人气</p>
                <p>200</p>
                <p>销量人气</p>
              </li>
              <li>
                <p>销量人气</p>
                <p>200</p>
                <p>销量人气</p>
              </li>
              <li>
                <p>销量人气</p>
                <p>200</p>
                <p>销量人气</p>
              </li>
            </ul>
          </div>
          <ul class="picDetail">
            <li v-for="item in 5" :key="item">
              <img src="" alt="" />
            </li>
          </ul>
        </div>
        <div class="main-rt">
          <p class="title">这是标题</p>
          <p class="desc">这是描述</p>
          <div class="price">
            <span class="new-price">29.9</span>
            <span class="old-price">47</span>
          </div>
          <div class="service">
            <div>
              <span>促销</span>
              <span>12月好物放送，App领券购买直降120元</span>
            </div>
            <div>
              <span>配送</span>
              <span>至</span>
              <el-cascader :options="options" :show-all-levels="false" />
            </div>
            <div>
              <span>服务</span>
              <span>无忧退货</span>
              <span>快速退款</span>
              <span>免费包邮</span>
              <a href="">了解详情</a>
            </div>
          </div>
          <div class="sku">
            <span>规格</span>
            <button class="height">350g</button>
          </div>
          <div class="number">
            <span>数量</span>
            <el-input-number
              v-model="number"
              :min="1"
              :max="10"
              @change="handleChange"
              style="margin-left: 20px"
            />
          </div>
          <button class="submit">加入购物车</button>
        </div>
      </main>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ArrowRight } from "@element-plus/icons-vue";
import { ref } from "vue";
const number = ref(0);

const handleChange = (value: number) => {
  console.log(value);
};
const options = [
  {
    value: "guide",
    label: "Guide",
    children: [
      {
        value: "disciplines",
        label: "Disciplines",
        children: [
          {
            value: "consistency",
            label: "Consistency",
          },
          {
            value: "feedback",
            label: "Feedback",
          },
          {
            value: "efficiency",
            label: "Efficiency",
          },
          {
            value: "controllability",
            label: "Controllability",
          },
        ],
      },
      {
        value: "navigation",
        label: "Navigation",
        children: [
          {
            value: "side nav",
            label: "Side Navigation",
          },
          {
            value: "top nav",
            label: "Top Navigation",
          },
        ],
      },
    ],
  },
  {
    value: "component",
    label: "Component",
    children: [
      {
        value: "basic",
        label: "Basic",
        children: [
          {
            value: "layout",
            label: "Layout",
          },
          {
            value: "color",
            label: "Color",
          },
          {
            value: "typography",
            label: "Typography",
          },
          {
            value: "icon",
            label: "Icon",
          },
          {
            value: "button",
            label: "Button",
          },
        ],
      },
      {
        value: "form",
        label: "Form",
        children: [
          {
            value: "radio",
            label: "Radio",
          },
          {
            value: "checkbox",
            label: "Checkbox",
          },
          {
            value: "input",
            label: "Input",
          },
          {
            value: "input-number",
            label: "InputNumber",
          },
          {
            value: "select",
            label: "Select",
          },
          {
            value: "cascader",
            label: "Cascader",
          },
          {
            value: "switch",
            label: "Switch",
          },
          {
            value: "slider",
            label: "Slider",
          },
          {
            value: "time-picker",
            label: "TimePicker",
          },
          {
            value: "date-picker",
            label: "DatePicker",
          },
          {
            value: "datetime-picker",
            label: "DateTimePicker",
          },
          {
            value: "upload",
            label: "Upload",
          },
          {
            value: "rate",
            label: "Rate",
          },
          {
            value: "form",
            label: "Form",
          },
        ],
      },
      {
        value: "data",
        label: "Data",
        children: [
          {
            value: "table",
            label: "Table",
          },
          {
            value: "tag",
            label: "Tag",
          },
          {
            value: "progress",
            label: "Progress",
          },
          {
            value: "tree",
            label: "Tree",
          },
          {
            value: "pagination",
            label: "Pagination",
          },
          {
            value: "badge",
            label: "Badge",
          },
        ],
      },
      {
        value: "notice",
        label: "Notice",
        children: [
          {
            value: "alert",
            label: "Alert",
          },
          {
            value: "loading",
            label: "Loading",
          },
          {
            value: "message",
            label: "Message",
          },
          {
            value: "message-box",
            label: "MessageBox",
          },
          {
            value: "notification",
            label: "Notification",
          },
        ],
      },
      {
        value: "navigation",
        label: "Navigation",
        children: [
          {
            value: "menu",
            label: "Menu",
          },
          {
            value: "tabs",
            label: "Tabs",
          },
          {
            value: "breadcrumb",
            label: "Breadcrumb",
          },
          {
            value: "dropdown",
            label: "Dropdown",
          },
          {
            value: "steps",
            label: "Steps",
          },
        ],
      },
      {
        value: "others",
        label: "Others",
        children: [
          {
            value: "dialog",
            label: "Dialog",
          },
          {
            value: "tooltip",
            label: "Tooltip",
          },
          {
            value: "popover",
            label: "Popover",
          },
          {
            value: "card",
            label: "Card",
          },
          {
            value: "carousel",
            label: "Carousel",
          },
          {
            value: "collapse",
            label: "Collapse",
          },
        ],
      },
    ],
  },
  {
    value: "resource",
    label: "Resource",
    children: [
      {
        value: "axure",
        label: "Axure Components",
      },
      {
        value: "sketch",
        label: "Sketch Templates",
      },
      {
        value: "docs",
        label: "Design Documentation",
      },
    ],
  },
];
</script>

<style lang="less" scoped>
.bg {
  height: 2000px;
  background-color: #f5f5f5;
  .bread {
    height: 72px;
    line-height: 72px;
  }
  main {
    height: 600px;
    background-color: #fff;
    display: flex;
    .main-ft {
      width: 580px;
      height: 600px;
      padding: 30px 50px;
      display: flex;
      justify-content: space-between;
      img {
        width: 400px;
        height: 400px;
        background-color: pink;
      }
      .appraise {
        display: grid;
        height: 140px;
        padding: 30px 0;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        // grid-template-rows: 1fr 1fr 1fr;
        li {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-right: 1px solid #f5f5f5;
          text-align: center;
        }
      }
      .picDetail {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 400px;
        img {
          width: 64px;
          height: 64px;
          background-color: antiquewhite;
        }
      }
    }
    .main-rt {
      flex: 1;
      padding: 30px 30px 30px 0;
      .title {
        font-size: 22px;
      }
      .desc {
        color: #999;
        margin-top: 10px;
      }
      .price {
        margin: 10px 0;

        .new-price {
          color: #cf4444;
          font-size: 22px;
          margin-right: 15px;
        }
        .old-price {
          font-size: 16px;
          color: #999;
        }
      }
      .service {
        width: 500px;
        height: 150px;
        background-color: #f5f5f5;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        div > span {
          margin-right: 20px;
          color: #999;
        }
      }
      .sku {
        height: 70px;
        padding-left: 10px;
        display: flex;
        align-items: center;
        .height {
          width: 75px;
          height: 30px;
          line-height: 30px;
          margin-left: 20px;
          background-color: #fff;
          border: 1px solid #ccc;
        }
      }
      .number {
        display: flex;
        align-items: center;
        padding-left: 10px;
      }
      .submit {
        margin-top: 20px;
        width: 180px;
        height: 50px;
        background-color: #27ba9b;
        border-radius: 5px;
        font-size: 16px;
        color: #fff;
        border: none;
      }
    }
  }
}
</style>
