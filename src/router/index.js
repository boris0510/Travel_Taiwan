import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/attractions',
    name: 'Attractions',
    component: () => import('../views/pages/Attractions.vue'),
  },
  {
    path: '/activity',
    name: 'Activity',
    component: () => import('../views/pages/Activity.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
