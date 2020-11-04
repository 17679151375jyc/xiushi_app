<template>
  <div>    
    <van-nav-bar
      title="预订"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
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