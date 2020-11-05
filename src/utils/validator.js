import Vue from 'vue'
Vue.prototype.validatorName = (val)=>{
    return /^[\u4E00-\u9FA5]{2,4}$/.test(val);
}
Vue.prototype.validatorphone = (val)=>{
    return /(^1[3|4|5|7|8|9]\d{9}$)|(^09\d{8}$)/.test(val);
}
Vue.prototype.rules=[{
    required: true
}]