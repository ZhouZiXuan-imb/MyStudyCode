// 1. 引入vue-router
import {createRouter, createWebHashHistory} from "vue-router";
// 引入组件
import Home from "../components/Home";
import about from "../components/about";

//2. 定义路由
const routes = [
    {path: '/', redirect: '/home'},
    {path: "/home", component: Home},
    {path: "/about", component: about}
];

//3. 创建路由
const router = new createRouter({
    history: createWebHashHistory(),
    // 定义好的路由
    routes
});

//4. 到处路由
export default router;