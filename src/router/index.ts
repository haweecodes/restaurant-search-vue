import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/search',
    name: 'Result',
    component: () => import(/* webpackChunkName: "result" */ '../views/SearchResultViewer.vue'),
  },
  {
    path: '/restaurant/',
    name: 'ViewDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "detail" */ '../views/ViewDetail.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
