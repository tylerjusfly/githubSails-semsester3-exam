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
      component: () => import("../pages/SingleRepo.vue"), //Implementing Lazy loading
    },
  ],
});

export default router;
