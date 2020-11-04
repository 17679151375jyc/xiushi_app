<template>
  <div class="pageA">
    <van-nav-bar
      title="我要找代购"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="page_css">
      
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
  },
};
</script>
<style scoped>
</style>