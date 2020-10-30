import {createRouter, createWebHashHistory} from 'vue-router'


let routes = [
    { path:'/', redirect:'/user' },
    { path:'/user', component:() => import('../components/users')},
    { path:'/quanxian',component: () => import('../components/quanxian') },
    { path:'/dingdan',component: () => import('../components/dingdan') },
    { path:'/shangpin',component: () => import('../components/shangpin') },
    { path:'/xitong',component: () => import('../components/xitong') }
]

let router = new createRouter({
    history:createWebHashHistory(),
    routes
})

export default router
