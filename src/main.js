import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from "element-ui";
import {CommonUI} from "common-ui";
// import "amp-common-ui/lib/iconfont/iconfont.css";
import "element-ui/lib/theme-chalk/index.css";
import 'common-ui/src/assets/css/style.scss';
import '../src/assets/css/style.scss';
import i18n from "./i18n/index";

// 引入element-ui的资源文件
const language = localStorage.getItem("language") || "zh-CN";
let local = require(`element-ui/lib/locale/lang/${language}`).default;
Vue.use(ElementUI, {size: 'small', local: local});
Vue.use(CommonUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
