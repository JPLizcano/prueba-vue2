import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueAxios from "vue-axios";
import Axios from "axios";
// import VueCompositionAPI from "@vue/composition-api";
import { createPinia, PiniaVuePlugin } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import './assets/tailwind.css'

Vue.config.productionTip = false;
Vue.use(VueAxios, Axios);

// Habilitar composition API
// Vue.use(VueCompositionAPI);
// Habilitar plugin de Pinia
Vue.use(PiniaVuePlugin);
const pinia = createPinia();

pinia.use(piniaPluginPersistedstate)

new Vue({
  router,
  render: (h) => h(App),
  pinia,
}).$mount("#app");
