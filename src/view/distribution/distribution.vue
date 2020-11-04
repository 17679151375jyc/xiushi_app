<template>
  <div>
    <van-nav-bar
      title="订餐"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="page_css">
      <distributionShops @distributionShops="distriClick"/>
      <distributionShops @distributionShops="distriClick"/>
      <distributionShops @distributionShops="distriClick"/>
      <distributionShops @distributionShops="distriClick"/>
      <distributionShops @distributionShops="distriClick"/>
      <distributionShops @distributionShops="distriClick"/>
      <distributionShops @distributionShops="distriClick"/>
      <distributionShops @distributionShops="distriClick"/>
      <distributionShops @distributionShops="distriClick"/>
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
    distributionShops: () => import("@/components/distributionShops.vue"),
  },
  methods: {
    distriClick() {
      console.log(1)
      this.$router.push({ path: "/order/shopDeteil" });
    },
    onClickLeft() {
      this.$router.back();
    },
  },
};
</script>
<style scoped>
</style>