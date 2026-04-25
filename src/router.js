import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/maps",
    name: "maps",
    component: () => import("./views/Maps.vue"),
  },
  {
    path: "/maps/:slug",
    name: "destination",
    component: () => import("./views/DestinationDetails.vue"),
    props: true,
  },
  {
    path: "/maps/:slug/:experienceSlug",
    name: "experience",
    component: () => import("./views/ExperienceDetails.vue"),
    props: true,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: "is-active",
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
