import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../src/fonts/iconfont.css";
import "./assets/css/global.css";
import axios from "axios";
import "./plugins/element";

// 配置请求的路径
axios.defaults.baseURL = "http://127.0.0.1:8888/api/private/v1";
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
