import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/tentang",
      name: "tentang",
      component: () => import("../views/TentangView.vue"),
    },
    {
      path: "/penjelasan-materi",
      name: "penjelasan-materi",
      component: () => import("../views/PenjelasanMateriView.vue"),
    },
    {
      path: "/penjelasan-materi/converging",
      name: "penjelasan-materi-converging",
      component: () => import("../views/MateriConvergingView.vue"),
    },
    {
      path: "/penjelasan-materi/assimilating",
      name: "penjelasan-materi-assimilating",
      component: () => import("../views/MateriAssimilatingView.vue"),
    },
    {
      path: "/penjelasan-materi/accommodating",
      name: "penjelasan-materi-accommodating",
      component: () => import("../views/MateriAccommodatingView.vue"),
    },
    {
      path: "/penjelasan-materi/diverging",
      name: "penjelasan-materi-diverging",
      component: () => import("../views/MateriDivergingView.vue"),
    },
    {
      path: "/petunjuk",
      name: "petunjuk",
      component: () => import("../views/PetunjukView.vue"),
    },
    {
      path: "/petunjuk-pengisian",
      name: "petunjuk-pengisian",
      component: () => import("../views/PetunjukPengisianView.vue"),
    },
    {
      path: "/tes-gaya-belajar",
      name: "tes-gaya-belajar",
      component: () => import("../views/TesGayaBelajarView.vue"),
    },
    {
      path: "/hasil-tes-gaya-belajar",
      name: "hasil-tes-gaya-belajar",
      component: () => import("../views/HasilTesGayaBelajarView.vue"),
    },
    {
      path: "/evaluasi-hasil-tes-gaya-belajar",
      name: "evaluasi-hasil-tes-gaya-belajar",
      component: () => import("../views/EvaluasiHasilTesGayaBelajarView.vue"),
    },
    {
      path: "/pre-test",
      name: "pre-test",
      component: () => import("../views/PreTestView.vue"),
    },
    {
      path: "/post-test",
      name: "post-test",
      component: () => import("../views/PostTestView.vue"),
    },
    {
      path: "/respon-evaluasi",
      name: "respon-evaluasi",
      component: () => import("../views/ResponEvaluasiView.vue"),
    },
    {
      path: "/sign-up",
      name: "sign-up",
      component: () => import("../views/SignUpView.vue"),
    },
    {
      path: "/admin/dashboard",
      name: "admin-dashboard",
      component: () => import("../views/AdminDashboardView.vue"),
    },
    {
      path: "/admin",
      name: "admin-login",
      component: () => import("../views/AdminLoginView.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
