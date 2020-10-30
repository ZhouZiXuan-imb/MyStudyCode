import {createRouter,createWebHashHistory} from 'vue-router';

import User from "../components/User";
import Login from "../components/Login";
import UnameAndPwd from "../components/UnameAndPwd";
import EWM from "../components/EWM";

// 定义路由规则
const routes = [
    {path:'/User/:id', component: User,props:route => ({ id: route.params.id ,name:'周子轩'})},
    {
        path: '/Login', component: Login,
        children: [
            {path:'/UNameAndPwd',component:UnameAndPwd},
            {path:'/EWM',component:EWM}
        ],
    }
]

const routers = new createRouter({
    history:createWebHashHistory(),
    routes,
})

export default routers;