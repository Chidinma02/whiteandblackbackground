import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Kudacase from "../views/Kuda.vue";
import weatherApp from "../views/weather.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/kudacase",
    name: "Kudacase",
    component: Kudacase,
    meta: {
      hideNavbar: true,
     }
  },
  {
    path: "/kudacase",
    name: "Kudacase",
    component: Kudacase,
    meta: {
      hideNavbar: true,
     }
  },
  {
    path: "/weatherApp",
    name: "weatherApp",
    component: weatherApp,
    meta: {
      hideNavbar: true,
     }
  },
  
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
