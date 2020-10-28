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
          <van-swipe-item style="background-color: #fca85f">1</van-swipe-item>
          <van-swipe-item style="background-color: #ffffff">2</van-swipe-item>
          <van-swipe-item style="background-color: #75c6f7">3</van-swipe-item>
          <van-swipe-item style="background-color: #f0f860">4</van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="gongge_css">
      <van-grid :column-num="5">
        <van-grid-item v-for="(item, index) in indexCaiList" :key="index">
          <i :class="item.icon"></i>
          <span>{{item.title}}</span>
        </van-grid-item>
      </van-grid>
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
  border-radius: 2vw;
}
.icon_css{
    font-size: 5vw;
}
.gongge_css span{
    margin-top: 1.5vw;
    color: #888;
    font-size: 3.2vw;
}
</style>