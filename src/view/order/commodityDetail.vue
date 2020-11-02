<template>
  <div>
    <van-nav-bar
      title="商品详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-swipe :autoplay="4000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <div class="conterbox_css">
      <span class="title_header_css">珍珠奶茶</span>
      <span class="title1_header_css">珍珠奶茶的配料</span>
    </div>
    <div class="conterbox_css" style="color: purple">
      <i class="iconfont icondianpu" style="color: purple"></i>
      <span style="margin-left: 2vw">有爱小吃摊</span>
    </div>
    <div class="dis_row_between_center conterbox_css colorfont">
      <div>
        <i class="iconfont iconxuzhixiao" style="font-size:3.74vw;color:#555"></i>
        <span style="margin-left: 2vw">购买须知：</span>
      </div>
      <div style="width:67vw">
        购买须知购买须知购
      </div>
    </div>
    <div></div>
    <div class="dis_row_between_center qian_dibu_css">
      <div class="dis_row_end_start qian_box_css">
        <span>￥：</span>
        <span class="title2_header_css">20.00</span>
      </div>
      <div class="dis_row_center_center anniu_css">
        <!-- <i class="iconfont iconjiahao"></i> -->
        <span style="margin-left: 2vw">加入购物车</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
      ],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
  },
};
</script>
<style scoped>
.conterbox_css {
  width: 94vw;
  margin: 2vw auto;
  padding: 1vw;
  padding-bottom: 2vw;
  border-radius: 1vw;
  background-color: #fafafa;
}
.colorfont{
  font-size: 3.74vw;
}
.title_header_css {
  font-family: "微软雅黑";
  display: block;
  margin: 3vw 0;
  font-size: 5.5vw;
}
.title1_header_css {
  display: block;
  width: 100%;
  font-size: 3.2vw;
  color: #888;
}
.qian_dibu_css {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 14vw;
  background-color: #fafafa;
}
.qian_box_css {
  font-size: 3.2vw;
  width: 30%;
  color: #888;
  margin-left: 3vw;
}
.title2_header_css {
  display: block;
  width: 100%;
  font-size: 6.6vw;
  color: red;
  line-height: 6vw;
}
.anniu_css {
  width: 38vw;
  height: 10vw;
  line-height: 10vw;
  color: #fff;
  margin-right: 3vw;
  text-align: center;
  border-radius: 10vw;
  background-color: #fca85f;
  font-size: 3.74vw;
}
</style>