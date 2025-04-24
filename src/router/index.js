import Vue from "vue";
import VueRouter from "vue-router";
import RegisterView from "../views/RegisterView.vue";
import HomeView from "../views/HomeView.vue";
import ProfileView from "../views/ProfileView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/registro",
    name: "Registro",
    component: RegisterView,
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/perfil",
    name: "Perfil",
    component: ProfileView,
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
