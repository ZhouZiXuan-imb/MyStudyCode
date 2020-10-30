// 引入
import {createStore} from 'vuex'

// 导出配置
export default createStore({
    state() {
        return {
            username: '周子轩'
        }
    },
    // 修改store中数据的方法
    mutations: {
        changeName(state) {
            state.username = '周周'
        },
        changeOtherName(state,newName) {
            state.username = newName
        }
    },
    // 用于执行异步代码
    actions: {},
    // 用于把属性进行计算  与computed相似
    getters: {}

})