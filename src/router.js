import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children: [
        {
          path: "/about",
          name: "about",
          component: () => import("./views/About.vue")
        },
        {
          path: "/about2",
          name: "about2",
          component: () => import("./views/About2.vue")
        },
      ]
    }
  ]
});
