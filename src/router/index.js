import Vue from 'vue'
import VueRouter from 'vue-router'
import Demo from "../views/demo/Demo";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'demo',
    component: Demo
  }
];

const router = new VueRouter({
  routes
});

export default router
