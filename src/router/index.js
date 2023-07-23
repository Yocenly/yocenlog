import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/home-page")
    },
    {
      path: "/team",
      name: "team",
      component: () => import("@/views/team-project")
    },
    {
      path: "/personal",
      name: "personal",
      component: () => import("@/views/personal-project")
    },
    {
      path: "/academic",
      name: "academic",
      component: () => import("@/views/academic-achievement")
    },
    {
      path: "/note",
      name: "note",
      component: () => import("@/views/learning-note")
    }
  ],
})

export default router;
