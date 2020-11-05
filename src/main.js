import Vue from 'vue'
import router from './router/router'
import App from './App.vue'
import Vant from 'vant';
import { Lazyload } from 'vant';
Vue.use(Lazyload);
Vue.use(Vant);
import 'vant/lib/index.css';
import '@/style/commont.css'
import '@/style/style.css'
import '@/style/style_flew.css'
import '@/style/transfrom.css'
import '@/utils/tools.js'
import '@/utils/validator.js'
import '@/utils/datajson.js'
import '@/utils/common.js'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
