<template>
  <div class="content">
    <div class="loginForm">
      <div class="account">
        <div class="title">
          <span
            @click="accountLogin"
            style="cursor: pointer"
            :class="{ active: account }"
            >账户登录</span
          >
          <span
            @click="codeLogin"
            style="cursor: pointer"
            :class="{ active: !account }"
            >扫码登录</span
          >
        </div>
        <el-form v-if="account" :model="loginForm" style="padding: 0 40px">
          <div class="useMsg">
            <a href="">
              <el-icon class="message"><Message /></el-icon>
              <span>使用短信登录</span>
            </a>
          </div>
          <el-form-item>
            <el-input v-model="loginForm.user" placeholder="请输入用户名">
              <template #prepend>
                <el-icon><User /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="loginForm.region" placeholder="请输入密码">
              <template #prepend>
                <el-icon><Lock /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <div>
              <el-checkbox v-model="checked" size="large">
                <span style="color: #333">我已同意</span>
                <a style="color: #069" href="">《隐私条款》</a>
                <span style="color: #333">和</span>
                <a href="" style="color: #069">《服务条例》</a>
              </el-checkbox>
            </div>
          </el-form-item>
          <el-form-item>
            <a class="loginBtn" @click="onSubmit">登录</a>
          </el-form-item>
          <div class="login-bottom">
            <a
              href="https://graph.qq.com/oauth2.0/show?which=Login&display=pc&client_id=100556005&response_type=token&scope=all&redirect_uri=http%3A%2F%2Fwww.corho.com%3A8080%2F%23%2Flogin%2Fcallback"
            >
              <img
                src="https://qzonestyle.gtimg.cn/qzone/vas/opensns/res/img/Connect_logo_7.png"
                alt=""
              />
            </a>
            <div>
              <a href="">忘记密码</a>
              <a href="">免费注册</a>
            </div>
          </div>
        </el-form>
        <div v-else class="codeLogin">
          <div>
            <img src="../../../assets/images/qrcode.jpg" alt="" />
          </div>
          <div class="supplyInfo">
            <span>打开</span>
            <a href="">小兔鲜App</a>
            <span>扫码登录</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import { Lock, User, Message } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";

const loginForm = reactive({
  user: "",
  region: "",
});
let account = ref(true);
const checked = ref(true);
const router = useRouter();
const onSubmit = () => {
  router.push("/dashboard");
};

const accountLogin = () => {
  account.value = true;
};
const codeLogin = () => {
  account.value = false;
};
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  height: 488px;
  background: url("../../../assets/images/login-bg.png") no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  .loginForm {
    background-color: #fff;
    width: 380px;
    height: 400px;
    position: absolute;
    top: 50px;
    right: 20%;
    .account {
      // padding: 0 40px;
      .title {
        display: flex;
        padding: 0 40px;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
        height: 55px;
        line-height: 55px;
        font-size: 18px;
        font-weight: 600;
      }
      .useMsg {
        margin: 15px 0;
        font-size: 14px;
        display: flex;
        justify-content: flex-end;
        a {
          color: #66bcaf;
          .message {
            transform: translateY(3px);
          }
        }
      }
      .loginBtn {
        width: 100%;
        height: 40px;
        background-color: #66bcaf;
        color: #fff;
        font-size: 14px;
        // border: 0;
        cursor: pointer;
      }
      .login-bottom {
        display: flex;
        justify-content: space-between;
        a {
          margin-left: 10px;
          color: #ccc;
        }
      }
      .codeLogin {
        display: flex;
        flex-direction: column;
        padding: 40px;
        .supplyInfo {
          margin-top: 30px;
          a {
            color: #66bcaf;
            font-size: 16px;
          }
        }
      }
    }
  }
}

.active {
  color: #66bcaf;
}
</style>
