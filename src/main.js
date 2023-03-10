import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Notifications from 'vue-notification'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(Notifications)
// Optionally install the BootstrapVue icon components plugin
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
