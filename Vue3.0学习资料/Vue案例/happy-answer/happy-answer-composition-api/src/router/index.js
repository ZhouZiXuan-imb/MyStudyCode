import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home";
import Item from "../components/Item";
import Score from "../components/Score";

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  // 首页路由
  {
    path: "/home",
    component: Home
  },
  // 题目路由
  {
    path: "/item",
    component: Item
  },
  // 分数页路由,
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
