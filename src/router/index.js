import Vue from 'vue'
import VueRouter from 'vue-router'
import Demo from "../views/demo/Demo";
import Demo2 from "@/views/demo/Demo2";
import Home from "@/views/demo/index"
import Demo3 from "@/views/demo/Demo3";

Vue.use(VueRouter);
// 获取原型对象上的push函数
const originalPush = VueRouter.prototype.push;
// 修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};
const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: 'demo1',
        name: 'demo',
        component: Demo
      },
      {
        path: 'demo2',
        name: 'demo2',
        component: Demo2,
        meta: {
          hideLeft: true
        }
      },
      {
        path: 'demo3',
        name: 'demo3',
        component: Demo3
      }
    ]
  },
  {
    path: '',
    redirect: 'demo1'
  }
];

const router = new VueRouter({
  routes
});

export default router
