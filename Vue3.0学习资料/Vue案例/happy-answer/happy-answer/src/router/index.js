import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/components/Home/index.vue'

const routes = [
    {
        path:'/',component:Home
    },
    {
        path:'/item',component: () => import ('../components/Item/index')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router