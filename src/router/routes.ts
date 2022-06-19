import { RouteRecordRaw } from 'vue-router';
import generatedRoutes from './auto-routing';

const routes: RouteRecordRaw[] = [
  ...generatedRoutes,
  {
    path: '/',
    component: () => import('layouts/default.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
