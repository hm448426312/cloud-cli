import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import CloudUI from "cloud-ui";
import "cloud-ui/lib/theme-chalk/index.css";
// import '../src/assets/css/style.scss';
import i18n from "./i18n/index";

// 引入cloud-ui的资源文件
const language = localStorage.getItem("language") || "zh-CN";
let local = require(`cloud-ui/lib/locale/lang/${language}`).default;
Vue.use(CloudUI, {size: 'small', local: local});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
