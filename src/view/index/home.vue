<template>
  <div>
    <router-view></router-view>
    <div class="dis_row_between_start bottom_css">
      <div class="dis_column_center_center div" @click="flag = 1">
        <i
          class="iconfont iconzhuye1 icon_css"
          :class="{ active: flag == 1 }"
        ></i>
        <span :class="{ active: flag == 1 }">主页</span>
      </div>
      <div class="dis_column_center_center div" @click="flag = 2">
        <i
          class="iconfont icongouwuche1 icon_css"
          :class="{ active: flag == 2 }"
        ></i>
        <span :class="{ active: flag == 2 }">购物车</span>
      </div>
      <div class="dis_column_center_center div" @click="flag = 3">
        <i
          class="iconfont iconwode icon_css"
          :class="{ active: flag == 3 }"
        ></i>
        <span :class="{ active: flag == 3 }">我的</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      flag: 1,
    };
  },
  watch: {
    flag: function (val, oldVal) {
      if (val == oldVal) {
        return;
      }
      this.topage(val);
    },
  },
  methods: {
    topage(val) {
      localStorage.setItem("flag", val);
      switch (val) {
        case 1:
          this.$router.replace({ path: "/index/home/homeindex" });
          break;
        case 2:
          this.$router.replace({ path: "/index/home/shopCart" });
          break;
        case 3:
          this.$router.replace({ path: "/index/home/my" });
          break;
      }
    },
  },
  created() {
      this.flag = localStorage.getItem('flag')?localStorage.getItem('flag'):1
  },
};
</script>
<style scoped>
.bottom_css {
  position: absolute;
  bottom: 0;
  left: 1vw;
  right: 1vw;
  border-top: 1px solid #ccc;
  height: 14vw;
  padding: 0 1vw;
}
.bottom_css .div {
  font-size: 3.74vw;
  height: 100%;
  width: 15vw;
  color: #888;
}
.icon_css {
  font-size: 6vw;
}
.active {
  color: #fca85f !important;
}
</style>