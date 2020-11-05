<template>
  <div>
    <van-nav-bar
      title="我的优惠券"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="beijing_css">
      <youhui @youhuiClick="youhuiClick"/>
      <youhui/>
      <youhui/>
      <youhui/>
      <youhui/>
      <youhui/>
      <youhui/>
      <youhui/>
      <youhui/>
      <youhui/>
      <br/>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  components: {
    youhui: () => import("@/components/youhui.vue"),
  },
  methods: {
    youhuiClick(){
      localStorage.setItem('flag', 1)
      this.$router.replace({path: '/index/home/homeindex'})
    },
    onClickLeft() {
      this.$router.back();
    },
  },
};
</script>
<style scoped>
.beijing_css {
  width: 100vw;
  height: calc(100vh - 11vw);
  background-color: #fafafa;
  padding-top: 3vw;
  overflow-y: scroll;
}
</style>