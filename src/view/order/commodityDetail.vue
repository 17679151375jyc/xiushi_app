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
    <div class="gundonghezi_css">
      <div
        class="dis_row_between_center conterbox_css color2"
        v-if="type === 'yinliao'"
      >
        <div class="header_box_css">
          <i class="iconfont iconguige"></i>
          <span class="span_left_css">规格：</span>
        </div>
        <div class="dis_row_start_center contert_box_xss">
          <div
            class="guige_but_css"
            :class="{ active_box: specificationsFlag === item.value }"
            v-for="(item, index) in specificationsList"
            :key="index"
            @click="specificationsClick(item.value, item.name)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
      <div
        class="dis_row_between_center conterbox_css color2"
        v-if="type === 'yinliao'"
      >
        <div class="header_box_css">
          <i class="iconfont icon7 color2"></i>
          <span class="span_left_css">甜度：</span>
        </div>
        <div class="dis_row_start_center contert_box_xss">
          <div
            class="guige_but_css"
            :class="{ active_box: sugarFlag === item.value }"
            v-for="(item, index) in sugarList"
            :key="index"
            @click="sugarClick(item.value, item.name)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
      <div
        class="dis_row_between_center conterbox_css color2"
        v-if="type === 'xiaochi'"
      >
        <div class="header_box_css">
          <i class="iconfont iconladu color2"></i>
          <span class="span_left_css">辣度：</span>
        </div>
        <div class="dis_row_start_center contert_box_xss">
          <div
            class="guige_but_css"
            :class="{ active_box: spicyFlag === item.value }"
            v-for="(item, index) in spicyList"
            :key="index"
            @click="spicyClick(item.value, item.name)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
      <div class="conterbox_css color2">
        <i class="iconfont icondianpu"></i>
        <span style="margin-left: 2vw">小小奶茶店</span>
      </div>
      <div class="dis_row_between_center conterbox_css colorfont">
        <div style="color: #999">
          <i class="iconfont iconxuzhixiao"></i>
          <span class="span_left_css">购买须知：</span>
        </div>
        <div style="width: 67vw">购买须知购买须知购</div>
      </div>
    </div>
    <div class="dis_row_between_center qian_dibu_css">
      <div class="dis_row_end_start qian_box_css">
        <span>￥：</span>
        <span class="title2_header_css">20.00</span>
      </div>
      <div class="">
        <van-tag type="warning" v-if="type === 'yinliao'">{{
          specificationsName
        }}</van-tag>
        <van-tag
          type="warning"
          style="margin-left: 1vw"
          v-if="type === 'yinliao'"
          >{{ sugarName }}</van-tag
        >
        <van-tag
          type="warning"
          style="margin-left: 1vw"
          v-if="type === 'xiaochi'"
          >{{ spicyName }}</van-tag
        >
      </div>
      <div class="dis_row_center_center anniu_css">
        <i class="iconfont iconjiahao"></i>
        <span style="margin-left: 1vw">加入购物车</span>
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
      specificationsFlag: 0,
      specificationsName: "大杯",
      sugarFlag: 0,
      sugarName: "7分糖",
      spicyFlag: 0,
      spicyName: "中辣",
      type: "yinliao",
    };
  },
  methods: {
    //规格点击
    specificationsClick(value, name) {
      this.specificationsFlag = value;
      this.specificationsName = name;
    },
    //甜度
    sugarClick(value, name) {
      this.sugarFlag = value;
      this.sugarName = name;
    },
    //辣度
    spicyClick(value, name) {
      this.spicyFlag = value;
      this.spicyName = name;
    },
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
.colorfont {
  font-size: 3vw;
  margin-bottom: 10vw;
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
.gundonghezi_css {
  width: 100vw;
  height: calc(100vh - 130vw);
  overflow-y: scroll;
}
.span_left_css {
  margin-left: 2vw;
  font-size: 3vw;
}
.qian_dibu_css {
  border-top: 1px solid #ccc;
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
  width: 28vw;
  height: 8vw;
  line-height: 10vw;
  color: #fff;
  margin-right: 3vw;
  text-align: center;
  border-radius: 10vw;
  background-color: #fca85f;
  font-size: 3.74vw;
}
.header_box_css {
  width: 20vw;
}
.contert_box_xss {
  width: 70vw;
  margin-top: 1vw;
}
.guige_but_css {
  width: 12vw;
  height: 6vw;
  border: 1px solid #fca85f;
  text-align: center;
  line-height: 6vw;
  border-radius: 1vw;
  color: #fca85f;
  font-size: 2.8vw;
  margin-right: 3vw;
}
</style>