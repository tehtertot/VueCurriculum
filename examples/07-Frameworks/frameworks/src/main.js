import Vue from "vue";
// import bootstrap-vue
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";

// import css files
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
// use bootstrap-vue as Vue middleware
Vue.use(BootstrapVue);

new Vue({
  render: h => h(App)
}).$mount("#app");
