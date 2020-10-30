// 引入
import {createStore} from 'vuex'

// 导出配置
export default createStore({
    // 这里的state相当于 data(){  return{}  }
    state() {
        return {
            name:'周子轩',
            age:19,
            list:[1,2,3,4]
        };
    },
    // 用于修改store中的数据
    mutations: {},
    // 用于处理异步任务  比如定时器
    actions: {},
    // 类似于computed  gtters 用于对store中的数据进行加工处理形成新的数据
    getters: {}
})