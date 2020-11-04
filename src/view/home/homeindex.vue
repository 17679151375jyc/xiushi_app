<template>
  <div class="page">
    <div class="top_box">
      <div class="index_css" :style="{ 'background-color': colors }"></div>
      <div class="img-box-css">
        <van-swipe
          :initial-swipe="0"
          class="my-swipe"
          :autoplay="5000"
          indicator-color="white"
          @change="change"
        >
          <van-swipe-item style="background-color: #fca85f">广告图1</van-swipe-item>
          <van-swipe-item style="background-color: #ffffff">广告图2</van-swipe-item>
          <van-swipe-item style="background-color: #75c6f7">广告图3</van-swipe-item>
          <van-swipe-item style="background-color: #f0f860">广告图4</van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="gongge_css">
      <van-grid :column-num="4">
        <van-grid-item
          v-for="(item, index) in indexCaiList"
          :key="index"
          @click="gonggeClick(item.value)"
        >
          <i :class="item.icon"></i>
          <span>{{ item.title }}</span>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="tongzhi_css">
      <van-notice-bar
        color="#fff"
        background="#FCA85F"
        left-icon="volume-o"
        text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
      />
    </div>
    <div class="shangjia_css">
      <pushList />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      indexSpan: 0,
    };
  },
  components: {
    pushList: () => import("./pushShop.vue"),
  },
  computed: {
    colors: function () {
      let str = "#FCA85F";
      switch (this.indexSpan) {
        case 0:
          str = "#FC7E3B";
          break;
        case 1:
          str = "#CDD5DB";
          break;
        case 2:
          str = "#39A9ED";
          break;
        case 3:
          str = "#F8DE2A";
          break;
      }
      return str;
    },
  },
  methods: {
    change(index) {
      this.indexSpan = index;
    },
    gonggeClick(index) {
      switch (index) {
        case 0:
          this.$router.push({ path: "/distribution/distribution" });
          break;
        case 1:
          this.$router.push({ path: "/reserve/reserve" });
          break;
        case 2:
          this.$router.push({ path: "/purchasingAgent/purchasingAgent" });
          break;
        case 3:
          this.$router.push({ path: "/takeAtaxi/takeAtaxi" });
          break;
        case 4:
          this.$router.push({ path: "/wechatMoments/wechatMoments" });
          break;
      }
    },
  },
};
</script>
<style scoped>
.index_css {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 30vw;
  z-index: 11;
}
.img-box-css {
  position: absolute;
  top: 5vw;
  left: 2vw;
  right: 0;
  width: 96vw;
  z-index: 12;
  height: 32vw;
  border: 1px solid #fff;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.top_box {
  width: 100vw;
  height: 45vw;
  background-color: #fff;
}
.gongge_css {
  width: 96vw;
  height: 18vw;
  background-color: #fff;
  clear: both;
  margin: 3vw auto;
  margin-top: 5vw;
  border-radius: 2vw;
}
.icon_css {
  font-size: 5vw;
}
.gongge_css span {
  margin-top: 1.5vw;
  color: #888;
  font-size: 3.2vw;
}
.tongzhi_css {
  width: 96vw;
  border-radius: 10vw;
  overflow: hidden;
  margin: 0 auto;
}
.shangjia_css {
  width: 96vw;
  margin: 0 auto;
  height: calc(100vh - 98vw);
  border-radius: 1vw;
  background-color: #fff;
  margin-top: 3vw;
  overflow-y: scroll;
}
</style>