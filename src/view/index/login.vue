<template>
  <div>
    <div class="body_box_css"></div>
    <div class="box_css">
      <img src="@/assets/img/login_beijing.jpg" class="img_logo_css" />
      <van-field
        clearable
        autofocus
        left-icon="manager"
        v-model="form.codeValue"
        label="账号"
        placeholder="请输入账号"
      />
      <van-field
        clearable
        left-icon="lock"
        style="margin-top: 15px"
        v-model="form.password"
        label="密码"
        placeholder="请输入密码"
        type="password"
      />
      <div class="span_box_css dis_row_between_start">
        <span @click="$router.push({ path: '/index/register' })">注册账号</span>
        <span @click="$router.push({ path: '/index/forget' })">忘记密码</span>
      </div>
      <div>
        <van-button
          class="but_css"
          color="#DFA93B"
          type="warning"
          @click="toPage"
          >登录</van-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { Notify } from 'vant';
export default {
  name: "login",
  data() {
    return {
      form: {
        codeValue: null,
        password: null,
      },
    };
  },
  methods: {
    toPage() {
      // window.open("http://49.234.22.146/img/logo.png");
      Notify({ type: 'success', message: '登录成功' });
      this.$router.push({ path: "/index/home" });
    },
  },
};
</script>
<style scoped>
>>> .van-field__label {
  width: 10vw;
}
>>> .van-cell {
  padding: 2vw;
  height: 11vw;
  line-height: 8vw;
  font-size: 3.74vw;
  border-radius: 1.5vw;
}
.body_box_css {
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  background: url("~@/assets/img/login_beijing.jpg");
  background-size: cover;
  filter: blur(4px);
  z-index: 0;
}
.box_css {
  position: absolute;
  z-index: 1;
  left: 7.5vw;
  width: 85vw;
  margin: 0 auto;
  margin-top: 10vw;
}
.img_logo_css {
  width: 25vw;
  height: 25vw;
  margin: 7vw auto;
  margin-left: 29vw;
  border-radius: 50%;
  border: 2px solid #fff;
}
.span_box_css {
  width: 85vw;
  margin: 10px auto;
}
.span_box_css span {
  color: #ffffff;
  display: block;
  font-size: 3.74vw;
  border-bottom: 1px solid #fff;
}
.but_css {
  width: 85vw;
  margin: 2vw auto;
  border-radius: 10vw;
}
</style>