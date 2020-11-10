import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home/index.vue";
import Item from "../components/Item/index.vue";
import Score from "../components/Score/index.vue";

const routes = [
  // 路由重定向
  {
    path: "/",
    redirect: "/home"
  },
  // 首页
  {
    path: "/home",
    component: Home
  },
  // 答题页
  {
    path: "/item",
    component: Item
  },
  // 分数页
  {
    path: "/score",
    component: Score
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
