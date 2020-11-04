<template>
  <div class="pageA">
    <van-nav-bar
      title="单号001代购清单"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="page_css div_row_end_warp">
      <div class="hezi_css" v-for="(item, index) in 9" :key="index">
        <span class="jiaobiao_css">0{{ index + 1 }}</span>
        <img class="img_css" src="@/assets/img/login_beijing.jpg" />
        <div class="miaosu_css">
          <div style="border-bottom: 1px solid #ccc">
            <span class="color8">火腿肠</span>&#12288;×&#12288;<span
              class="color8"
              >3</span
            >
          </div>
          <div>描述: <span>错误一日报是我我一而恢复为不以稳步二位</span></div>
        </div>
      </div>
      <div class="dis_row_around_center but_css">
        <span @click="onClickLeft">返回</span>
        <span @click="jiedanClick">接单</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog, Toast } from "vant";
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    jiedanClick() {
      Dialog.confirm({
        title: "确定要接单吗",
      })
        .then(() => {
          localStorage.setItem("flag", 1);
          Toast.success("接单成功");
          this.onClickLeft()
        })
        .catch(() => {});
    },
    onClickLeft() {
      this.$router.back();
    },
  },
};
</script>
<style scoped>
.page_css {
  height: calc(100vh - 46px - 18vw);
}
.hezi_css {
  width: 40vw;
  min-height: 50vw;
  background-color: #fff;
  float: left;
  margin-top: 3vw;
  border-radius: 2.5vw;
  position: relative;
  overflow: hidden;
}
.hezi_css:nth-child(2n + 1) {
  margin-left: 6vw;
}
.hezi_css:nth-child(2n) {
  margin-left: 7vw;
}
.jiaobiao_css {
  background-color: #fca85f;
  position: absolute;
  left: -6vw;
  top: 0vw;
  width: 15vw;
  text-align: center;
  display: block;
  padding: 1vw;
  font-size: 3vw;
  color: #fff;
  transform: rotate(-45deg);
}
.img_css {
  width: 100%;
  height: 30vw;
}
.miaosu_css {
  font-size: 3vw;
  width: calc(100% - 4vw);
  min-height: 16vw;
  padding: 2vw;
  padding-top: 1vw;
  overflow: hidden;
  line-height: 6vw;
  text-overflow: ellipsis;
}
.but_css {
  width: 100vw;
  position: fixed;
  height: 15vw;
  left: 0;
  right: 0;
  bottom: 0vw;
  background: rgba(255, 255, 255, 0.6);
  border-top: 1px solid #e9e8e8;
}
.but_css span {
  font-size: 3.74vw;
  width: 32vw;
  height: 9vw;
  line-height: 9vw;
  text-align: center;
  background-color: #fff;
  border-radius: 10vw;
  border: 1px solid #e9e8e8;
  color: #555;
}
.but_css span:last-child {
  background-color: #fca85f;
  color: #fff;
  border: 0;
}
</style>