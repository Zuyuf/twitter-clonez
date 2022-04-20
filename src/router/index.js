import { createRouter, createWebHistory } from 'vue-router';
import SignupView from '@/views/SignupView.vue';

const routes = [
  {
    name: 'signup',
    path: '/signup',
    component: SignupView,
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
