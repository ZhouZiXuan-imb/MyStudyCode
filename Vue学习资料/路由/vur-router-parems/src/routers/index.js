// 1. 引入vue-router
import {createRouter, createWebHashHistory} from 'vue-router'
// 1.1 引入组件
import Home from "../components/Home";
import about from "../components/about";

// 2. 定义路由规则
const routes = [
    {path: '/', redirect: '/home'},
    {path: '/home/:id', component: Home, props:router => ({id: router.params.id,name:'周子轩'})},
    {path: '/about', component: about},
]

// 3. 创建路由
const router = new createRouter({
    history: createWebHashHistory(),
    routes
})

// 4. 导出路由
export default router
