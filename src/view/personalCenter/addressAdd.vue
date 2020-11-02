<template>
  <div class="pageA">
    <van-nav-bar
      title="编辑地址"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-address-edit
      :address-info="form"
      :show-search-result="false"
      show-delete
      :show-area="false"
      :show-detail="false"
      show-set-default
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    >
      <van-field
        label="区域"
        v-model="form.region"
        @click="show = true"
        readonly
        placeholder="请选择区域"
      />
      <van-field
        v-model="form.detailArea"
        label="详细地址"
        :maxlength="20"
        placeholder="请输入详细地址"
      />
    </van-address-edit>
    <van-popup v-model="show" position="bottom" style="height: 40%">
      <van-picker
        @confirm="confirm"
        @cancel="show = false"
        show-toolbar
        title="标题"
        :columns="areaList"
      />
    </van-popup>
  </div>
</template>

<script>
import { Toast } from "vant";
import areaList from "@/utils/area";
export default {
  data() {
    return {
      show: false,
      areaList,
      searchResult: [],
      form: {
        id: null,
        name: "1",
        tel: "2",
        region: "",
        detailArea: "",
        isDefault: false,
      },
    };
  },
  methods: {
    //区域确定按钮
    confirm(value) {
      this.form.region = value[0] + "-" + value[1] + "-" + value[2];
      this.show = false;
    },
    //返回
    onClickLeft() {
      this.$router.back();
    },
    //保存
    onSave(value) {
      let { name, tel, isDefault } = value;
      this.form.name = name;
      this.form.tel = tel;
      this.form.isDefault = isDefault;
      console.log(this.form);
    },
    //删除
    onDelete() {
      Toast("delete");
      this.$router.back();
    },
  },
  created() {
    let { name, tel, address, id, isDefault } = JSON.parse(
      this.$route.query.data
    );
    console.log(name, tel, address, isDefault);
    this.form = {
      id,
      name,
      tel,
      region: address.split(" ")[0],
      detailArea: address.split(" ")[1],
      isDefault,
    };
  },
};
</script>
<style scoped>
</style>