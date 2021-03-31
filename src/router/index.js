import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    redirect: "/install",
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/main",
        component: () => import('../views/Home.vue'),
      },
      {
        path: "/button",
        component: () => import('../views/button.vue'),
      },
      {
        path: "/dialog",
        component: () => import('../views/dialog.vue'),
      },
      {
        path: "/install",
        component: () => import('../views/install.vue'),
      },
      {
        path: "/development",
        component: () => import('../views/development.vue'),
      },
      {
        path: "/message",
        component: () => import('../views/message.vue'),
      },
    ],
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
