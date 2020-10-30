// 引入
import { createStore } from "vuex";
// 导出配置
export default createStore({
  state() {
    return {
      count: 0
    };
  },
  mutations: {
    add(state) {
      state.count++;
    }
  },
  actions: {},
  getters: {
    num(state) {
      return state.count;
    }
  }
});
