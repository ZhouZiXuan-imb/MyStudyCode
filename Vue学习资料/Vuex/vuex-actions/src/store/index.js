//      创建一个数据仓库
import {createStore} from 'vuex'

export default createStore({
    state() {
        return {
            count: 0
        }
    },
    mutations: {
        add(state, val) {
            state.count += val
        }
    },
    actions: {
        // context 是上下文
        dingshiqi(context, val) {
            setInterval(function () {
                // commit是调用同步方法
                context.commit('add', val)
            }, 1000)
        }
    }
})