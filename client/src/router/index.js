import { createRouter, createWebHistory } from 'vue-router';

import IndexView from '@/views/IndexView.vue';
import HomeView from '@/views/HomeView.vue';
import UserProfileView from '@/views/ProfileView.vue';

import store from '@/store';

//

const routes = [
  {
    name: 'index',
    path: '/',
    component: IndexView,
    meta: { cantAccessIfLoggedIn: true },
  },
  {
    name: 'home',
    path: '/home',
    component: HomeView,
    meta: { authRequired: true },
  },
  {
    name: 'profile',
    path: '/profile',
    component: UserProfileView,
    meta: { authRequired: true },
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

// Global Route Gaurd
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.cantAccessIfLoggedIn)) {
    if (store.state.userLoggedIn) next({ name: 'home' });
    else next();
    return;
  }

  if (!to.matched.some((record) => record.meta.authRequired)) {
    next();
    return;
  }

  if (store.state.userLoggedIn) next();
  else next({ name: 'index' });
});

export default router;
