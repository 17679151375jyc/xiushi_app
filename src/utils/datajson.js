import Vue from 'vue'
Vue.prototype.specificationsList = [{
    name: "大杯",
    value: 0
}, {
    name: "中杯",
    value: 1
}, {
    name: "小杯",
    value: 2
}];
Vue.prototype.spicyList = [{
    name: "微辣",
    value: 0
}, {
    name: "中辣",
    value: 1
}, {
    name: "特辣",
    value: 2
}];
Vue.prototype.sugarList = [{
    name: "7分糖",
    value: 0
}, {
    name: "5分糖",
    value: 1
}, {
    name: '无糖',
    value: 2
}]

Vue.prototype.largeList = ["无大物件", "单件有1.5米以上长", "单件有10kg以上"]
Vue.prototype.getlargeName = (text) => {
    let value = 0;
    switch (text) {
        case '无大物件':
            value = 0
            break;
        case '单件有1.5米以上长':
            value = 1
            break;
        case '单件有10kg以上':
            value = 2
            break;
    }
    return value
}

Vue.prototype.superList = ["秀市1家超市", "秀市粤客隆", '其他门店']
Vue.prototype.getSuperName = (text) => {
    let value = 0;
    switch (text) {
        case '任意门店':
            value = 0
            break;
        case '秀市1家超市':
            value = 1
            break;
        case '秀市粤客隆':
            value = 2
            break;
    }
    return value
}