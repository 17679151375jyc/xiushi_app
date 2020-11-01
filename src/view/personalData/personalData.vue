<template>
  <div>
    <van-nav-bar
      title="我的信息"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="box_box">
      <ul>
        <li class="dis_row_between_center li_css" @click="pageClick(0)">
          <span>
            <i class="iconfont iconavatar" style="margin-right: 0vw"></i>
            {{ titleList[0] }}</span
          >
          <div class="headerImg_css">
            <img :src="formData.headerImg" />
          </div>
        </li>
        <li class="dis_row_between_center li_css" @click="pageClick(1)">
          <span>
            <i class="iconfont iconzhanghao1" style="margin-right: 0vw"></i>
            {{ titleList[1] }}</span
          >
          <input
            :placeholder="placeholderText"
            v-model="formData.name"
            type="text"
            :readonly="status"
            class="Input_css"
          />
        </li>
        <li class="dis_row_between_center li_css" @click="pageClick(2)">
          <span>
            <i class="iconfont iconshoujihao" style="margin-right: 0vw"></i>
            {{ titleList[2] }}</span
          >
          <input
            :placeholder="placeholderText"
            v-model="formData.phone"
            type="text"
            :readonly="status"
            class="Input_css"
          />
        </li>
        <li class="dis_row_between_center li_css" @click="pageClick(3)">
          <span>
            <i class="iconfont iconwenjian" style="margin-right: 0vw"></i>
            {{ titleList[3] }}</span
          >
          <input
            :placeholder="placeholderText"
            v-model="formData.sex"
            type="text"
            :readonly="status"
            class="Input_css"
          />
        </li>
        <li class="dis_row_between_center li_css" @click="pageClick(4)">
          <span>
            <i class="iconfont iconxingbie" style="margin-right: 0vw"></i>
            {{ titleList[4] }}</span
          >
          <input
            :placeholder="placeholderText"
            v-model="formData.address"
            type="text"
            :readonly="status"
            class="Input_css"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      title: "头像",
      formData: {
        headerImg: require("@/assets/img/login_beijing.jpg"),
        name: "偷猪的韩信",
        phone: "13712345678",
        sex: "男",
        address: '秀市镇'
      },
      text: "",
      status: true,
      placeholderText: "点击更改",
      titleList: [
        "头像",
        "名称",
        "手机号",
        "性别",
        "常住地"
      ],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },

    pageClick(index) {
      console.log(index);
      //   const T = this.$createToast({
      //     time: 1000,
      //     txt: "该信息不可更改",
      //     type: "txt",
      //   });
      //   if (index == 1) {
      //     T.show();
      //   } else {
      //     this.title = this.titleList[index];
      //     this.$router.push({ path: "/myInfo/editInfo" });
      //   }
    },
  },
};
</script>
<style scoped>

.box_box{
    width: 100vw;
    min-height: 50vh;
    margin-top: 3vw;
}
.li_css{
    width: 92%;
    padding: 0 4vw;
    min-height: 15vw;
    border-bottom: 1px solid #fafafa;
    font-size: 4vw;
    line-height: 12vw;
    color: #FCA85F;
}
.Input_css{
    max-width: 70vw;
    height: 11vw;
    outline: none;
    text-align: right; 
    padding: 0 2vw;
    border: 0;
    background-color: transparent;
    color: #333;
    overflow: hidden;
    font-size: 4vw;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.headerImg_css{
    width: 12vw;
    height: 12vw;
    border-radius: 50%;
    margin: 1vw; 
    overflow: hidden;
}
.headerImg_css img{
    width: 100%;
    height: 100%;
}
</style>