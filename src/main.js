import Vue from 'vue'
import router from './router/router'
import App from './App.vue'
import Vant from 'vant';
Vue.use(Vant);
import 'vant/lib/index.css';
import '@/style/commont.css'
import '@/style/style.css'
import '@/style/style_flew.css'
import '@/style/transfrom.css'
import '@/utils/tools.js'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
