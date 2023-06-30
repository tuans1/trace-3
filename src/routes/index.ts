import HelloWord from "../components/404.vue";
import Main from "../pages/Main.vue";
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Main,
  },
  {
    path: "/about",
    name: "About",
    component: HelloWord,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
