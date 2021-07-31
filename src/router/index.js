import { createRouter, createWebHashHistory } from 'vue-router';
// import Home from '../views/home/index';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/index/index'),
    meta: {
      index: 0
    }
  }, {
    path: '/discovery',
    name: 'Discovery',
    component: () => import('../views/discovery/index/index'),
    meta: {
      index: 1
    }
  }, {
    path: '/lemon',
    name: 'Lemon',
    component: () => import('../views/lemon/index/index'),
    meta: {
      index: 2
    }
  }, {
    path: '/me',
    name: 'Me',
    component: () => import('../views/me/index/index'),
    meta: {
      index: 3
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
