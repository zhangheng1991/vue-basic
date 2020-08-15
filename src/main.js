import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Element from "element-ui";//引入element-ui
import "element-ui/lib/theme-chalk/index.css"; //样式文件一定要引入
Vue.use(Element);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
