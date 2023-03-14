// ImporTS FROM VUE ROUTER
import { createRouter, createWebHistory } from "vue-router";

//IMPORTING PAGES COMPONENTS
import LandingPage from "../pages/LandingPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "landing",
      component: LandingPage,
    },
    {
      path: "/view-repo",
      name: "viewRepo",
      component: () => import("../pages/RepoData.vue"), //Implementing Lazy loading
    },
    {
      path: "/:pathMatch(.*)*",
      name: "error",
      component: () => import("../pages/Notfound.vue"), //Implementing Lazy loading
    },
  ],
});

export default router;
