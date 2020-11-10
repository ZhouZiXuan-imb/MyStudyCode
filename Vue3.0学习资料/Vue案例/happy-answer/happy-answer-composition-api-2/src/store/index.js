import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state() {
    return {
      level: "第一周",
      questions: [],
      itemNum: 1,
      answerId: []
    };
  },
  mutations: {
    setData(state, payload) {
      state.questions = payload.data;
    },
    // 吧选择的id答案push到answerId数组中存储
    addAnswerId(state, payload) {
      state.answerId.push(payload);
      console.log(state.answerId);
    },
    // 点击下一题之后让itemNum加1
    addItemNum(state, res) {
      state.itemNum += res;
    },
    clearItemNum(state) {
      state.itemNum = 1
    },
    clearAnswerId(state) {
      state.answerId = []
    }
  },
  actions: {
    // 获取题目数据
    async getData(context) {
      // 使用axios获取data文件夹中的数据
      let res = await axios.get("data/question.json");
      context.commit("setData", res);
    },
    // 点击下一题按钮后吧点击的id保存到answerId
    getAnswerId(context, id) {
      context.commit("addAnswerId", id);

      if (context.state.itemNum < context.state.questions.length) {
        context.commit("addItemNum", 1);
      }
    },
    // 点击再来一次清空itemNum和answerId
    clear(context) {
      context.commit('clearItemNum')
      context.commit('clearAnswerId')
    }
  },
  modules: {}
});
