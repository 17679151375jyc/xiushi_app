<template>
  <div class="pageA">
    <van-nav-bar
      title="我的收货地址"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
      @click-item="itemClick"
    />
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "",
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "秀市镇-蒋家村委会-蒋家村 蒋家19号",
          isDefault: true,
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "秀市镇-蒋家村委会-范家村 范家19号",
        },
      ],
    };
  },
  methods: {
    onAdd() {
      Toast("新增地址");
    },
    onEdit(item) {
      console.log(item);
      this.$router.push({
        path: "/personalCenter/addressAdd",
        query: {
          data: JSON.stringify(item),
        },
      });
    },
    itemClick(value){
      localStorage.setItem('addressData', JSON.stringify(value))
      this.onClickLeft();
    },
    onClickLeft() {
      this.$router.back();
    },
  },
};
</script>
<style scoped>
</style>