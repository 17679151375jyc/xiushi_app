<template>
  <div>
    <div class="shop_css" @click="commodityClick">
      <img src="@/assets/img/login_beijing.jpg" class="img_css" />
      <div class="dis_column_space_start wenan_css">
        <span>华莱士（秀市店）</span>
        <span
          >主营：汉堡、炸鸡、小吃、汉堡、炸鸡、小吃、炸鸡、小吃、汉堡、炸鸡、小吃</span
        >
        <div class="div_qisong_css">￥：<span>30.00</span>起送</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopBox",
  data() {
    return {};
  },
  methods: {
    commodityClick() {
      this.$emit("commodityClick");
    },
  },
};
</script>
<style scoped>
.shop_css {
  width: 42vw;
  min-height: 58vw;
  margin: 1.3vw;
  float: left;
  border-radius: 2vw;
  background-color: #f5f5f5;
}
.shop_css:nth-child(2n + 1) {
  margin-left: 4vw;
}
.img_css {
  width: 100%;
  height: 35vw;
}
.wenan_css {
  width: 41vw;
  min-height: 19vw;
  padding: 1vw;
}
.wenan_css span:first-child {
  font-size: 3.74vw;
}
.wenan_css span:nth-child(2) {
  font-size: 2vw;
  width: 100%;
  margin: 0.5vw 0;
  color: #888;
  display: block;
  max-height: 8vw;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.div_qisong_css {
  color: #999;
  font-size: 2vw;
}
.wenan_css span:last-child {
  font-size: 3.4vw;
  color: red;
  margin-right: 1vw;
}
</style>