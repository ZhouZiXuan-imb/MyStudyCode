import {createRouter, createWebHashHistory} from "vue-router";
import Home from '../components/Home'

const routes = [
    {
        path: '/', component: Home
    },
    // 题目路由
    {
        path:'/item',component: () => import ('../components/Item')
    },
    // 分数路由
    {
        path:'/score',component:() => import ('../components/score')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
