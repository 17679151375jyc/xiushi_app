<template>
  <div>    
    <van-nav-bar
      title="我的优惠券"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
      onClickLeft(){
          this.$router.back()
      }
  },
};
</script>
<style scoped>
</style>