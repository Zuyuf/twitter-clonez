import { createRouter, createWebHistory } from 'vue-router';

import IndexView from '@/views/IndexView.vue';
import HomeView from '@/views/HomeView.vue';

//

const routes = [
  {
    name: 'index',
    path: '/',
    component: IndexView,
  },
  {
    name: 'home',
    path: '/home',
    component: HomeView,
  },
  // {
  //   name: 'about',
  //   path: '/about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   /* webpackChunkName: "about" */
  //   // component: () => import('../views/AboutView.vue'),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
