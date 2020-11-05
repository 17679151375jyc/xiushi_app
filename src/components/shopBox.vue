<template>
   <div>
       <div class="shop_css" @click="commodityClick">
         <img src="@/assets/img/login_beijing.jpg" class="img_css">
         <div class="dis_column_space_start wenan_css">
           <span>叫花鸡一只不要钱叫花鸡一只不要钱</span>
           <span>已售100份</span>
           <span>￥：100.00</span>
         </div>
       </div>
   </div>
</template>

<script>
export default {
   name: 'shopBox',
   data() {
       return {
           
       }
   },
   methods:{
       commodityClick(){
         this.$emit('commodityClick')
       }
   }
}

</script>
<style scoped>
.shop_css{
  width: 42vw;
  height: 60vw;
  margin: 1.3vw;
  float: left;
  border-radius: 2vw;
  background-color: #F5F5F5;
}
.shop_css:nth-child(2n+1){
  margin-left: 4vw;
}
.img_css{
  width: 100%;
  height: 35vw;
}
.wenan_css{
  width: 41vw;
  height: 19vw;
  padding: 1vw;
}
.wenan_css span:first-child{
  font-size: 3.74vw;
}
.wenan_css span:nth-child(2){
  font-size: 3vw;
  margin: 0.5vw 0;
  color: #888;
}
.wenan_css span:last-child{
  font-size: 3.4vw;
  color: red;
}
</style>