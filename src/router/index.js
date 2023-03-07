
import WelcomePage from "@/pages/WelcomePage.vue";

import { createWebHistory, createRouter } from "vue-router";


const routes = [
  { path: "/:catchAll(.*)", redirect: '/' },
  {
    path: "/",
    name: "Home",
    component: WelcomePage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;