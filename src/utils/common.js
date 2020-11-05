
import Vue from 'vue'
Vue.prototype.getTimeToDate = (timestamp, type) => {
    let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
    let hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours());          // eslint-disable-line no-unused-vars
    let ii = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());    // eslint-disable-line no-unused-vars
    let ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());          // eslint-disable-line no-unused-vars
    if(type == 'M'){
        let str = (Y + M).substring(0, (Y + M).length-1)
        return str;
    }
    else if (type == 'D') {
        return Y + M + D;
    } else if (type == 'H') {
        return Y + M + D + ' ' + hh
    } else if (type == 'MM') {
        return Y + M + D + ' ' + hh + ':' + ii
    } else {
        return Y + M + D + ' ' + hh + ':' + ii + ':' + ss;
    }
}